export function WelcomeEmailTemplate(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />

  <title>Welcome to HireLoom AI</title>

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

    .hero-button-wrapper {
      padding-top: 32px;
    }

    .hero-button {
      display: inline-block;
      background-color: #7c6ff0;
      color: #ffffff !important;
      padding: 14px 32px;
      border-radius: 10px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      letter-spacing: -0.1px;
    }

    .divider-row {
      padding: 56px 24px 0;
    }

    .divider {
      height: 1px;
      background-color: #ececef;
    }

    .features-section {
      padding: 56px 24px 0;
    }

    .section-title {
      margin: 0;
      color: #17171a;
      font-size: 20px;
      line-height: 28px;
      font-weight: 700;
      letter-spacing: -0.4px;
      text-align: center;
    }

    .feature-grid {
      width: 100%;
      margin-top: 40px;
    }

    .feature-cell {
      width: 33.333%;
      padding: 0 14px;
      vertical-align: top;
      text-align: center;
    }

    .feature-icon {
      width: 40px;
      height: 40px;
      background-color: #f5f4ff;
      border-radius: 12px;
      margin: 0 auto;
    }

    .feature-icon-content {
      width: 40px;
      height: 40px;
      text-align: center;
      vertical-align: middle;
      font-size: 17px;
      line-height: 40px;
    }

    .feature-title {
      margin: 18px 0 0;
      color: #17171a;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      letter-spacing: -0.1px;
    }

    .feature-description {
      margin: 6px 0 0;
      color: #8b8b93;
      font-size: 12.5px;
      line-height: 19px;
    }

    .quote-section {
      padding: 56px 40px 0;
      text-align: center;
    }

    .quote-mark {
      margin: 0;
      color: #d8d5f8;
      font-size: 40px;
      line-height: 20px;
      font-weight: 700;
    }

    .quote-text {
      max-width: 440px;
      margin: 12px auto 0;
      color: #3f3f46;
      font-size: 17px;
      line-height: 27px;
      font-weight: 500;
      letter-spacing: -0.2px;
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

      .divider-row {
        padding: 40px 16px 0;
      }

      .features-section {
        padding: 40px 8px 0;
      }

      .feature-grid {
        margin-top: 30px;
      }

      .feature-cell {
        width: 100%;
        display: block;
        padding: 0 0 28px;
      }

      .quote-section {
        padding: 40px 16px 0;
      }

      .quote-text {
        font-size: 16px;
        line-height: 25px;
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

                <span class="hero-badge">Your career, upgraded</span>

                <h1 class="hero-title">
                  Welcome to<br />
                  <span class="hero-title-accent">HireLoom AI</span>
                </h1>

                <p class="hero-description">
                  Hi ${name}, your personal AI career workspace is ready.
                  Prepare for interviews, build a stronger resume, and
                  move forward with confidence.
                </p>

                <div class="hero-button-wrapper">
                  <a href="https://hireloomai.krishnastack.com" class="hero-button">Start preparing</a>
                </div>

              </td>
            </tr>

            <tr>
              <td class="divider-row">
                <div class="divider"></div>
              </td>
            </tr>

            <tr>
              <td class="features-section">

                <h2 class="section-title">Everything you need, in one place</h2>

                <table role="presentation" class="feature-grid" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>

                    <td class="feature-cell">
                      <table role="presentation" width="40" height="40" cellpadding="0" cellspacing="0" border="0" align="center" class="feature-icon">
                        <tr>
                          <td class="feature-icon-content" align="center">🎯</td>
                        </tr>
                      </table>
                      <p class="feature-title">Mock Interviews</p>
                      <p class="feature-description">Practice and get real feedback</p>
                    </td>

                    <td class="feature-cell">
                      <table role="presentation" width="40" height="40" cellpadding="0" cellspacing="0" border="0" align="center" class="feature-icon">
                        <tr>
                          <td class="feature-icon-content" align="center">✦</td>
                        </tr>
                      </table>
                      <p class="feature-title">Resume Builder</p>
                      <p class="feature-description">Craft a polished, sharp resume</p>
                    </td>

                    <td class="feature-cell">
                      <table role="presentation" width="40" height="40" cellpadding="0" cellspacing="0" border="0" align="center" class="feature-icon">
                        <tr>
                          <td class="feature-icon-content" align="center">◇</td>
                        </tr>
                      </table>
                      <p class="feature-title">Career Roadmaps</p>
                      <p class="feature-description">A clear plan for your goals</p>
                    </td>

                  </tr>
                </table>

              </td>
            </tr>

            <tr>
              <td class="quote-section">
                <p class="quote-mark">"</p>
                <p class="quote-text">
                  Don't just prepare for interviews — prepare to perform.
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