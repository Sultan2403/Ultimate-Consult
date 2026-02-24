//  Main
const express = require("express");
const app = express();

//  Helpers
const cors = require("cors");
const connectDB = require("./DB/Connections/connectDB");

// Middlewares
const { errors } = require("celebrate");
const authMiddleware = require("./Middlewares/admin.auth");

// Routers
const customerRouter = require("./Routers/customer.routes");
const authRouter = require("./Routers/auth.routes");
const adminRouter = require("./Routers/admin.routes");
const { authLimiter } = require("./Middlewares/rate-limiter.middleware");

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

//  Routes

app.use("/admin", authMiddleware, adminRouter);
app.use("/customers", customerRouter);
app.use("/auth", authLimiter, authRouter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Looking for something? 👀" });
});

app.get("/health", (req, res) => {
  res.json({ success: true, message: "Server says Heyyyy! :)" });
});

app.use(errors());

module.exports = app;
