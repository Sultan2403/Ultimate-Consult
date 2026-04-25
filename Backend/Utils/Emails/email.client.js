const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT), // Force it to be a number
  secure: false, // false for 587, true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  pool: true,
  maxConnections: 5,
  maxMessages: 100,
});

transporter.verify((err) => {
  if (err) {
    console.error("❌ Email transporter error:", err.message, err);
  } else {
    console.log("✅ Email transporter ready");
  }
});

module.exports = transporter;
