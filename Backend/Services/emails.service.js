const emailClient = require("../Utils/emails.client");

const sendNotificationEmail = async (consultationDetails) => {
  const adminEmail = process.env.ADMIN_EMAIL;

  const { firstName, lastName, email } = consultationDetails;

  const clientName = `${firstName} ${lastName}`;

  const dashboardLink = `https://localhost:5173/admin/consultations`; // use env vars later.

  return emailClient.sendMail({
    from: `"Ultimate Consult" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: "[Ultimate Consult] New Consultation Request Received!",
    text: `You have a new consultation request from ${clientName} (${email}) on.
           Visit your dashboard to view and manage it: ${dashboardLink}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2c3e50;">New Consultation Request</h2>
        <p>Hello,</p>
        <p>You have received a new consultation request. Here are the details:</p>
        <ul>
          <li><strong>Client Name:</strong> ${clientName}</li>
          <li><strong>Client Email:</strong> ${email}</li>
        </ul>
        <p>To view and manage this request, click the button below:</p>
        <a href="${dashboardLink}" style="display: inline-block; padding: 10px 20px; background-color: #3498db; color: #fff; text-decoration: none; border-radius: 5px;">Go to Dashboard</a>
        <p>Thank you,<br/>Ultimate Consult Team</p>
      </div>
    `,
  });
};

module.exports = { sendNotificationEmail };
