import User from ('../models/user');
import Joi from ('joi');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

// Register a new user
const register = (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password, email } = req.body;


    const existingUser = User.findUserByEmail(email);
    if (existingUser) {
        return res.status(409).json({ message: 'User already exists with this email' });
    }

    const newUser = User.createUser({ username, password, email });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
};

// Login an existing user
const login = (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password } = req.body;

    // Find user by email
    const user = User.findUserByEmail(email);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', user });
};

const profile = (req, res) => {
    const users = User.getAllUsers()    

    res.json(users)
}

// Export the controller functions
export default {
    register,
    login,
    profile
};