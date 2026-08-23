export function OtpEmailTemplate(name: string, otp: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />

  <title>Your HireLoom AI Verification Code</title>

  <style>
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: #fbfbfc;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1a1a1a;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    img {
      border: 0;
      display: block;
      max-width: 100%;
    }

    a {
      text-decoration: none;
    }

    .page {
      width: 100%;
      background-color: #fbfbfc;
      padding: 64px 24px;
    }

    .email {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      background-color: #ffffff;
    }

    .header {
      padding: 0 8px 40px;
      text-align: center;
    }

    .brand {
      font-size: 15px;
      line-height: 20px;
      font-weight: 700;
      letter-spacing: -0.2px;
      color: #1a1a1a;
    }

    .brand-dot {
      color: #7c6ff0;
    }

    .hero {
      padding: 0 24px;
      text-align: center;
    }

    .hero-badge {
      display: inline-block;
      padding: 6px 14px;
      background-color: #f5f4ff;
      border-radius: 999px;
      color: #7c6ff0;
      font-size: 12px;
      line-height: 16px;
      font-weight: 600;
      letter-spacing: 0.2px;
    }

    .hero-title {
      margin: 28px 0 0;
      color: #17171a;
      font-size: 34px;
      line-height: 1.25;
      font-weight: 700;
      letter-spacing: -1px;
    }

    .hero-title-accent {
      color: #7c6ff0;
    }

    .hero-description {
      max-width: 420px;
      margin: 18px auto 0;
      color: #71717a;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
    }

    .otp-wrapper {
      padding-top: 36px;
    }

    .otp-box {
      display: inline-block;
      background-color: #f5f4ff;
      border: 1px solid #e3e0fb;
      border-radius: 14px;
      padding: 20px 40px;
    }

    .otp-code {
      margin: 0;
      color: #17171a;
      font-size: 36px;
      line-height: 1.2;
      font-weight: 700;
      letter-spacing: 10px;
    }

    .otp-meta {
      margin: 16px 0 0;
      color: #b4b4bb;
      font-size: 12.5px;
      line-height: 18px;
    }

    .divider-row {
      padding: 56px 24px 0;
    }

    .divider {
      height: 1px;
      background-color: #ececef;
    }

    .info-section {
      padding: 40px 24px 0;
    }

    .info-grid {
      width: 100%;
    }

    .info-cell {
      width: 50%;
      padding: 0 14px;
      vertical-align: top;
      text-align: center;
    }

    .info-icon {
      width: 40px;
      height: 40px;
      background-color: #f5f4ff;
      border-radius: 12px;
      margin: 0 auto;
    }

    .info-icon-content {
      width: 40px;
      height: 40px;
      text-align: center;
      vertical-align: middle;
      font-size: 17px;
      line-height: 40px;
    }

    .info-title {
      margin: 18px 0 0;
      color: #17171a;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      letter-spacing: -0.1px;
    }

    .info-description {
      margin: 6px 0 0;
      color: #8b8b93;
      font-size: 12.5px;
      line-height: 19px;
    }

    .notice-section {
      padding: 56px 40px 0;
      text-align: center;
    }

    .notice-text {
      max-width: 440px;
      margin: 0 auto;
      color: #71717a;
      font-size: 13.5px;
      line-height: 21px;
      font-weight: 400;
    }

    .footer {
      padding: 56px 24px 8px;
      text-align: center;
    }

    .footer-links {
      padding-bottom: 16px;
    }

    .footer-link {
      color: #8b8b93 !important;
      font-size: 12px;
      line-height: 18px;
      font-weight: 500;
    }

    .footer-separator {
      padding: 0 10px;
      color: #dcdce0;
      font-size: 12px;
    }

    .copyright {
      margin: 0;
      color: #b4b4bb;
      font-size: 11.5px;
      line-height: 18px;
    }

    @media only screen and (max-width: 600px) {
      .page {
        padding: 40px 16px;
      }

      .hero {
        padding: 0 8px;
      }

      .hero-title {
        font-size: 28px;
        letter-spacing: -0.6px;
      }

      .hero-description {
        font-size: 15px;
        line-height: 24px;
      }

      .otp-box {
        padding: 18px 24px;
      }

      .otp-code {
        font-size: 28px;
        letter-spacing: 7px;
      }

      .divider-row {
        padding: 40px 16px 0;
      }

      .info-section {
        padding: 32px 8px 0;
      }

      .info-cell {
        width: 100%;
        display: block;
        padding: 0 0 28px;
      }

      .notice-section {
        padding: 40px 16px 0;
      }

      .footer {
        padding: 40px 16px 8px;
      }
    }
  </style>
</head>

<body>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <div class="page">

          <table role="presentation" class="email" width="100%" cellpadding="0" cellspacing="0" border="0">

            <tr>
              <td class="header">
                <div class="brand">HireLoom<span class="brand-dot">AI</span></div>
              </td>
            </tr>

            <tr>
              <td class="hero">

                <span class="hero-badge">Verify your identity</span>

                <h1 class="hero-title">
                  Your verification<br />
                  <span class="hero-title-accent">code</span>
                </h1>

                <p class="hero-description">
                  Hi ${name}, use the code below to verify your identity
                  and continue securely.
                </p>

                <div class="otp-wrapper">
                  <div class="otp-box">
                    <p class="otp-code">${otp}</p>
                  </div>
                  <p class="otp-meta">This code expires in 10 minutes</p>
                </div>

              </td>
            </tr>

            <tr>
              <td class="divider-row">
                <div class="divider"></div>
              </td>
            </tr>

            <tr>
              <td class="info-section">

                <table role="presentation" class="info-grid" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>

                    <td class="info-cell">
                      <table role="presentation" width="40" height="40" cellpadding="0" cellspacing="0" border="0" align="center" class="info-icon">
                        <tr>
                          <td class="info-icon-content" align="center">🔒</td>
                        </tr>
                      </table>
                      <p class="info-title">Keep it private</p>
                      <p class="info-description">Never share this code with anyone</p>
                    </td>

                    <td class="info-cell">
                      <table role="presentation" width="40" height="40" cellpadding="0" cellspacing="0" border="0" align="center" class="info-icon">
                        <tr>
                          <td class="info-icon-content" align="center">⏱</td>
                        </tr>
                      </table>
                      <p class="info-title">One-time use</p>
                      <p class="info-description">Valid for a single verification only</p>
                    </td>

                  </tr>
                </table>

              </td>
            </tr>

            <tr>
              <td class="notice-section">
                <p class="notice-text">
                  If you didn't request this code, you can safely ignore this email.
                  Someone may have entered your email address by mistake.
                </p>
              </td>
            </tr>

            <tr>
              <td class="footer">
                <div class="footer-links">
                  <a href="https://hireloomai.krishnastack.com" class="footer-link">Visit HireLoom</a>
                  <span class="footer-separator">·</span>
                  <a href="https://hireloomai.krishnastack.com/privacy" class="footer-link">Privacy</a>
                  <span class="footer-separator">·</span>
                  <a href="https://hireloomai.krishnastack.com/contact" class="footer-link">Contact</a>
                </div>
                <p class="copyright">© 2026 HireLoom AI</p>
              </td>
            </tr>

          </table>

        </div>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}