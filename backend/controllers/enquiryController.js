const Enquiry = require("../models/enquiryModel");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const createEnquiry = async (req, res) => {
  console.log("🔥 API HIT: POST /api/enquiry");

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

    // ✅ Send response immediately (fast API)
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We will get in touch with you shortly",
      data: newEnquiry,
    });

    // ✅ Send Email using Brevo API (background)
    sendEmail(name, phone, email, message);

  } catch (error) {
    console.log("🔥 ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ Email Function (Brevo API)
const sendEmail = async (name, phone, email, message) => {
  try {
    const client = SibApiV3Sdk.ApiClient.instance;

    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_PASS;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const sendSmtpEmail = {
      sender: {
        email: "sreyajitlm10.5@gmail.com", // must be verified in Brevo
        name: "Computech Society",
      },
      to: [
        {
          email: "sreyajitlm10.5@gmail.com",
        },
      ],
      subject: "📩 New Enquiry Received",
      htmlContent: `
        <div style="font-family:sans-serif;padding:20px;">
          <h2>New Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email || "Not Provided"}</p>
          <p><b>Message:</b> ${message}</p>
        </div>
      `,
    };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("✅ Email sent via Brevo API");

  } catch (err) {
    console.log("❌ Email API error:", err.response?.body || err.message);
  }
};

module.exports = { createEnquiry };
