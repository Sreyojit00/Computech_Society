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

    // ✅ Styled Email Template
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Enquiry Received",
      html: `
        <div style="background-color:#f3f4f6;padding:20px;font-family:sans-serif;">
          
          <div style="max-width:600px;margin:auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background:linear-gradient(to right,#4f46e5,#3b82f6);color:white;padding:20px;text-align:center;">
              <h2 style="margin:0;font-size:22px;">📩 New Enquiry Received</h2>
            </div>

            <!-- Content -->
            <div style="padding:20px;">
              
              <p style="font-size:16px;color:#374151;margin-bottom:20px;">
                You have received a new enquiry. Details are below:
              </p>

              <!-- Info Table -->
              <table style="width:100%;border-collapse:collapse;">
                
                <tr style="border-bottom:1px solid #e5e7eb;">
                  <td style="padding:12px;font-weight:bold;color:#111827;">Name</td>
                  <td style="padding:12px;color:#374151;">${name}</td>
                </tr>

                <tr style="background:#f9fafb;border-bottom:1px solid #e5e7eb;">
                  <td style="padding:12px;font-weight:bold;color:#111827;">Phone</td>
                  <td style="padding:12px;color:#374151;">${phone}</td>
                </tr>

                <tr style="border-bottom:1px solid #e5e7eb;">
                  <td style="padding:12px;font-weight:bold;color:#111827;">Email</td>
                  <td style="padding:12px;color:#374151;">${email || "Not Provided"}</td>
                </tr>

                <tr style="background:#f9fafb;">
                  <td style="padding:12px;font-weight:bold;color:#111827;">Message</td>
                  <td style="padding:12px;color:#374151;">${message}</td>
                </tr>

              </table>

            </div>

            <!-- Footer -->
            <div style="background:#111827;color:#9ca3af;text-align:center;padding:15px;font-size:12px;">
              © ${new Date().getFullYear()} Computech Society • All rights reserved
            </div>

          </div>
        </div>
      `,
    });

    // ✅ Response
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We will Get in touch with you shortly",
      data: newEnquiry,
    });

  } catch (error) {
    console.log("🔥 ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createEnquiry };