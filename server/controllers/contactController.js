import transporter, { getIsSmtpReady } from '../config/nodemailer.js';
import { generateEmailHTML } from '../utils/emailTemplate.js';

export const handleContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const ipAddress =
      req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown IP';

    const recipient = process.env.RECIPIENT_EMAIL || 'kowsalyasubbu289@gmail.com';

    // Log inquiry details to server console
    console.log('\n════════════════ NEW CONTACT INQUIRY RECEIVED ════════════════');
    console.log(`👤  Name:     ${name}`);
    console.log(`📧  Email:    ${email}`);
    console.log(`📞  Phone:    ${phone || 'Not provided'}`);
    console.log(`📌  Subject:  ${subject}`);
    console.log(`📝  Message:  ${message}`);
    console.log(`⏰  Time:     ${timestamp}`);
    console.log(`🌐  IP:       ${ipAddress}`);
    console.log('═══════════════════════════════════════════════════════════════\n');

    const smtpReady = getIsSmtpReady();

    // If GMAIL_APP_PASSWORD is not set or invalid, return error so user knows why email wasn't delivered
    if (!smtpReady) {
      console.warn('⚠️  [Contact Form] SMTP is not ready. GMAIL_APP_PASSWORD in server/.env needs a valid 16-character Google App Password.');
      return res.status(503).json({
        success: false,
        message: 'Email service is not configured with a valid Gmail App Password. Please update GMAIL_APP_PASSWORD in server/.env or email kowsalyasubbu289@gmail.com directly.',
      });
    }

    const htmlContent = generateEmailHTML({
      name,
      email,
      phone,
      subject,
      message,
      timestamp,
      ipAddress,
    });

    const mailOptions = {
      from: `"Kowsalya Portfolio" <${process.env.GMAIL_USER || 'kowsalyasubbu289@gmail.com'}>`,
      replyTo: email,
      to: recipient,
      subject: `[Portfolio Inquiry] ${subject} — from ${name}`,
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅  [Email Delivered] Successfully sent to ${recipient} from ${email}`);
      return res.status(200).json({
        success: true,
        message: 'Message Sent Successfully',
        data: { submittedAt: timestamp },
      });
    } catch (sendErr) {
      console.error(`❌  [Nodemailer Error] ${sendErr.message}`);
      return res.status(500).json({
        success: false,
        message: `Failed to send email via Gmail: ${sendErr.message}. Please verify GMAIL_APP_PASSWORD in server/.env.`,
      });
    }

  } catch (error) {
    next(error);
  }
};
