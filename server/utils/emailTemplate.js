export const generateEmailHTML = ({ name, email, phone, subject, message, timestamp, ipAddress }) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Contact Message</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0B1120; color: #E2E8F0; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #0F172A; border-radius: 16px; border: 1px solid #1E293B; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%); padding: 30px; text-align: center; }
    .header h1 { color: #FFFFFF; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
    .header p { color: rgba(255,255,255,0.85); margin: 6px 0 0 0; font-size: 13px; }
    .content { padding: 30px; }
    .info-card { background: #1E293B; border-radius: 12px; padding: 18px; margin-bottom: 20px; border-left: 4px solid #2563EB; }
    .info-row { display: flex; margin-bottom: 10px; font-size: 14px; }
    .info-label { font-weight: 700; color: #94A3B8; width: 120px; text-transform: uppercase; font-size: 11px; tracking: 1px; }
    .info-value { color: #FFFFFF; font-weight: 600; flex: 1; }
    .message-box { background: #1E293B; border-radius: 12px; padding: 20px; font-size: 14px; line-height: 1.6; color: #CBD5E1; border: 1px solid #334155; }
    .footer { padding: 20px 30px; background: #0B1120; text-align: center; font-size: 12px; color: #64748B; border-top: 1px solid #1E293B; }
    .tag { display: inline-block; padding: 4px 10px; border-radius: 20px; background: rgba(37,99,235,0.2); color: #38BDF8; font-size: 11px; font-weight: 700; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Inquiry Received</h1>
      <p>Visitor Submission from Kowsalya S. Portfolio Website</p>
    </div>
    
    <div class="content">
      <div class="info-card">
        <div class="info-row">
          <span class="info-label">Visitor Name:</span>
          <span class="info-value">${name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email Address:</span>
          <span class="info-value"><a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone Number:</span>
          <span class="info-value">${phone || 'Not Provided'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Subject:</span>
          <span class="info-value">${subject}</span>
        </div>
      </div>

      <div style="margin-bottom: 8px; font-size: 12px; font-weight: 700; color: #94A3B8; text-transform: uppercase;">
        Message Body:
      </div>
      <div class="message-box">
        ${message.replace(/\n/g, '<br>')}
      </div>

      <div style="margin-top: 24px; font-size: 11px; color: #64748B; background: #0B1120; padding: 12px; border-radius: 8px; display: flex; justify-content: space-between;">
        <span><strong>Timestamp:</strong> ${timestamp}</span>
        <br/>
        <span><strong>Visitor IP Address:</strong> ${ipAddress}</span>
      </div>
    </div>

    <div class="footer">
      This is an automated notification sent from Kowsalya S.'s Express Portfolio Server.
    </div>
  </div>
</body>
</html>
  `;
};
