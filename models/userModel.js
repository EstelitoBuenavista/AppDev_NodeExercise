const users = [
    {
        id: 1,
        username: 'john_doe',
        password: 'password123',
        email: 'john_doe@example.com'
    },
    {
        id: 2,
        username: 'jane_smith',
        password: 'mysecretpass',
        email: 'jane_smith@example.com'
    }
];


// Function to retrieve all users
function getAllUsers() {
    return users;
}

// Function to find a user by their username
function findUserByEmail(email) {
    return users.find(user => user.email === email);
}

function findUserByID(id) {
    return users.find(user => user.id === id);
}

function createUser(newUser) {
    const id = users.length ? users[users.length - 1].id + 1 : 1; 
    const user = { id, ...newUser };
    users.push(user);
    return user;
}

export default {
    getAllUsers,
    findUserByEmail,
    createUser,
    findUserByID
};