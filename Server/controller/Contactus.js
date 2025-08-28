const Contact = require("../models/contactus");  // Mongoose model
const mailSender = require("../utils/mailSender");

exports.contactUsController = async (req, res) => {
console.log("📩 Contact request received:", req.body)
  try {
    const { firstname, lastname, email, phoneNo, message } = req.body;

    // Validation
    if (!firstname || !lastname || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    // Save to DB
    const contactData = await Contact.create({
      firstname,
      lastname,
      email,
      phoneNo,
      message,
    });

  res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: contactData,
    });

    // Send email to admin
    try {
      const emailBody = `
        <h3>📩 New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNo || "Not Provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;

      await mailSender(
        process.env.ADMIN_MAIL || process.env.MAIL_USER, // your admin email
        "New Contact Us Message",
        emailBody
      );
    } catch (emailError) {
      console.error("Error sending email:", emailError.message);
      // don’t fail the request just because email didn’t send
    }

   

  } catch (error) {
    console.error("Contact Us Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the form",
    });
  }
};
