const Enquiry = require("../models/enquiryModel");
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Initialize Brevo API once (outside function)
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_PASS; // ✅ use correct variable name

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();


// ✅ Create Enquiry Controller
const createEnquiry = async (req, res) => {
  console.log("📩 Incoming Enquiry Request");

  try {
    const { name, phone, email, message } = req.body;

    // 🔍 Validation
    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, and message are required fields.",
      });
    }

    // 💾 Save to Database
    const newEnquiry = await Enquiry.create({
      name,
      phone,
      email,
      message,
    });

    // ⚡ Send response immediately
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully. We will contact you shortly.",
      data: newEnquiry,
    });

    // 📧 Send Email in background
    sendEmail({ name, phone, email, message });

  } catch (error) {
    console.error("🔥 Enquiry Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};


// ✅ Email Sender Function
const sendEmail = async ({ name, phone, email, message }) => {
  try {
    if (!process.env.BREVO_PASS) {
      console.error("❌ Brevo API key missing");
      return;
    }

    const emailData = {
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
        <div style="background:#f4f6f8;padding:20px;font-family:Arial,sans-serif;">
          <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.1);">
            
            <div style="background:#2563eb;color:#ffffff;padding:15px;text-align:center;">
              <h2 style="margin:0;">New Enquiry Received</h2>
            </div>

            <div style="padding:20px;">
              <p style="color:#555;">You have received a new enquiry. Details are below:</p>

              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:10px;font-weight:bold;">Name:</td>
                  <td style="padding:10px;">${name}</td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:10px;font-weight:bold;">Phone:</td>
                  <td style="padding:10px;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:10px;font-weight:bold;">Email:</td>
                  <td style="padding:10px;">${email || "Not Provided"}</td>
                </tr>
                <tr style="background:#f9fafb;">
                  <td style="padding:10px;font-weight:bold;">Message:</td>
                  <td style="padding:10px;">${message}</td>
                </tr>
              </table>
            </div>

            <div style="background:#111827;color:#9ca3af;text-align:center;padding:10px;font-size:12px;">
              © ${new Date().getFullYear()} Computech Society
            </div>

          </div>
        </div>
      `,
    };

    await apiInstance.sendTransacEmail(emailData);

    console.log("✅ Email sent successfully");

  } catch (err) {
    console.error("❌ Email Sending Failed:", err.response?.body || err.message);
  }
};

module.exports = { createEnquiry };
