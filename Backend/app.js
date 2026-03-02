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
const paymentsRouter = require("./Routers/payments.routes");
const adminRouter = require("./Routers/admin.routes");
const { authLimiter } = require("./Middlewares/rate-limiter.middleware");
const verifyPaystackWebhook = require("./Middlewares/paystack_webhooks.middleware");
const { webhook_Handler } = require("./Controllers/payments.controller");


connectDB();


app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

// Webhooks
app.post("/webhook/paystack", express.raw({ type: "application/json" }), [
  verifyPaystackWebhook,
  webhook_Handler,
]);

app.use(express.json());

// Routes

app.use("/admin", authMiddleware, adminRouter);
app.use("/customers", customerRouter);
app.use("/payments", authLimiter, paymentsRouter);
app.use("/auth", authLimiter, authRouter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Looking for something? 👀" });
});

app.get("/health", (req, res) => {
  res.json({ success: true, message: "Server says Heyyyy! :)" });
});

app.use(errors());

module.exports = app;
