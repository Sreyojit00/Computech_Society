const Enquiry = require("../models/enquiryModel");
const transporter = require("../config/mailConfig");

const createEnquiry = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // ✅ Validation
    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, phone and message are required",
      });
    }

    // ✅ Save to DB
    const newEnquiry = await Enquiry.create({
      name,
      phone,
      email,
      message,
    });

    // ✅ Send response FIRST (important)
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We will get in touch with you shortly",
      data: newEnquiry,
    });

    // ✅ Send email in background (DO NOT await)
    transporter.sendMail({
      from: process.env.ADMIN_USER,
      to: process.env.ADMIN_USER,
      subject: "New Enquiry Received",
      html: `
        <div style="padding:20px;font-family:sans-serif;">
          <h2>New Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || "Not Provided"}</p>
          <p><b>Message:</b> ${message}</p>
        </div>
      `,
    })
    .then(info => console.log("📩 Email sent:", info.response))
    .catch(err => console.log("❌ Email error:", err));

  } catch (error) {
    console.log("🔥 ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createEnquiry };