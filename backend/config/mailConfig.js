require("dotenv").config(); // 👈 MUST BE FIRST

const nodemailer = require("nodemailer");

// 🔥 DEBUG (temporary)
console.log("MAIL USER:", process.env.ADMIN_EMAIL);
console.log("MAIL PASS:", process.env.ADMIN_PASS);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",   // 👈 USE THIS (more reliable than service)
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

module.exports = transporter;