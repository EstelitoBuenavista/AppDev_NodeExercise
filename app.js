import express from "express"
import bodyParser from "body-parser"
import userRoute from "./routes/user.js"
import rateLimiter from "./middleware/rateLimiter.js";
import loggerMiddleware from "./middleware/detailLogger.js";

const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/', userRoute);
app.use(rateLimiter());
app.use(loggerMiddleware());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});