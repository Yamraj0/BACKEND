export const verifyEmailTemplete =(name,verificationUrl,verifyToken)=>{
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#4CAF50; padding:20px;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">Verify Your Email</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333; font-size:16px; line-height:1.5;">
              <p>Hello <strong>${name}</strong>,</p>
              <p>Thank you for signing up! To complete your registration, please verify your email address by clicking the button below:</p>
              <p style="text-align:center; margin:30px 0;">
                <a href="${verificationUrl}" 
                   style="background-color:#4CAF50; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:5px; font-size:16px; display:inline-block;">
                  Verify Email
                </a>
              </p>
              <p>If the button doesn’t work, Use code to verify your email:</p>
              <p style="word-break:break-all; color:#4CAF50;">${verifyToken}</p>
              <p>This link will expire in <strong>1 hour</strong>.</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="background-color:#f4f4f4; padding:20px; font-size:12px; color:#777777;">
              <p>&copy; 2026 OJHA GROUP. All rights reserved.</p>
              <p>Please do not reply to this email.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
} 