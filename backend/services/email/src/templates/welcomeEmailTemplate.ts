export function WelcomeEmailTemplate(name:string){

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />

  <title>Welcome to HireLoom AI</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f6f8;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      color: #17202a;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    img {
      border: 0;
      display: block;
      max-width: 100%;
    }

    a {
      text-decoration: none;
    }

    .wrapper {
      width: 100%;
      background-color: #f4f6f8;
      padding: 40px 16px;
    }

    .container {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid #e8ebef;
    }

    .header {
      padding: 28px 36px;
      border-bottom: 1px solid #edf0f2;
    }

    .logo {
      font-size: 21px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: #111827;
    }

    .logo span {
      color: #635bff;
    }

    .hero {
      padding: 52px 36px 42px;
    }

    .eyebrow {
      display: inline-block;
      background: #f0efff;
      color: #5b52d6;
      padding: 7px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    h1 {
      margin: 0;
      font-size: 40px;
      line-height: 1.12;
      letter-spacing: -1.5px;
      color: #111827;
    }

    .hero-text {
      margin: 18px 0 0;
      font-size: 16px;
      line-height: 1.7;
      color: #667085;
    }

    .button-wrapper {
      margin-top: 30px;
    }

    .button {
      display: inline-block;
      background: #111827;
      color: #ffffff !important;
      padding: 14px 23px;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 700;
    }

    .section {
      padding: 0 36px 40px;
    }

    .section-title {
      margin: 0 0 18px;
      font-size: 18px;
      font-weight: 700;
      color: #111827;
    }

    .feature-table {
      width: 100%;
    }

    .feature {
      padding: 18px 0;
      border-top: 1px solid #edf0f2;
    }

    .icon {
      width: 42px;
      height: 42px;
      border-radius: 11px;
      background: #f3f4f6;
      text-align: center;
      vertical-align: middle;
      font-size: 19px;
    }

    .feature-content {
      padding-left: 14px;
      vertical-align: middle;
    }

    .feature-title {
      margin: 0 0 4px;
      font-size: 14px;
      font-weight: 700;
      color: #1d2939;
    }

    .feature-description {
      margin: 0;
      font-size: 13px;
      line-height: 1.55;
      color: #667085;
    }

    .callout {
      margin: 4px 36px 40px;
      padding: 24px;
      background: #f7f7ff;
      border: 1px solid #e6e4ff;
      border-radius: 14px;
    }

    .callout-title {
      margin: 0 0 7px;
      font-size: 15px;
      font-weight: 700;
      color: #29235c;
    }

    .callout-text {
      margin: 0;
      font-size: 13px;
      line-height: 1.6;
      color: #625f7a;
    }

    .footer {
      padding: 28px 36px;
      background: #fafafa;
      border-top: 1px solid #edf0f2;
      text-align: center;
    }

    .footer-text {
      margin: 0;
      font-size: 12px;
      line-height: 1.6;
      color: #98a2b3;
    }

    .footer-links {
      margin-top: 10px;
    }

    .footer-links a {
      color: #667085;
      font-size: 12px;
      margin: 0 7px;
    }

    @media only screen and (max-width: 600px) {
      .wrapper {
        padding: 16px 10px;
      }

      .header {
        padding: 22px 22px;
      }

      .hero {
        padding: 38px 22px 32px;
      }

      .section {
        padding: 0 22px 32px;
      }

      .callout {
        margin: 0 22px 32px;
      }

      .footer {
        padding: 24px 22px;
      }

      h1 {
        font-size: 32px;
      }
    }
  </style>
</head>

<body>

  <table role="presentation" width="100%">
    <tr>
      <td>

        <div class="wrapper">

          <table
            role="presentation"
            class="container"
            align="center"
          >

            <!-- HEADER -->
            <tr>
              <td class="header">

                <div class="logo">
                  HireLoom<span>AI</span>
                </div>

              </td>
            </tr>


            <!-- HERO -->
            <tr>
              <td class="hero">

                <div class="eyebrow">
                  Welcome to HireLoom AI
                </div>

                <h1>
                  Welcome, ${name}.
                </h1>

                <p class="hero-text">
                  Your AI-powered interview preparation journey starts here.
                  Practice smarter, build a stronger resume, and turn your
                  preparation into real career progress.
                </p>

                <div class="button-wrapper">

                  <a
                    href="https://hireloomai.krishnastack.com"
                    class="button"
                  >
                    Open HireLoom AI →
                  </a>

                </div>

              </td>
            </tr>


            <!-- FEATURES -->
            <tr>
              <td class="section">

                <h2 class="section-title">
                  Everything you need to prepare better
                </h2>

                <table
                  role="presentation"
                  class="feature-table"
                >

                  <!-- Feature 1 -->
                  <tr>
                    <td class="feature">

                      <table role="presentation">
                        <tr>

                          <td class="icon">
                            🎯
                          </td>

                          <td class="feature-content">

                            <p class="feature-title">
                              AI-Powered Interviews
                            </p>

                            <p class="feature-description">
                              Practice realistic interviews with AI-generated
                              questions and receive actionable feedback on
                              your answers.
                            </p>

                          </td>

                        </tr>
                      </table>

                    </td>
                  </tr>

                  <tr>
                    <td class="feature">

                      <table role="presentation">
                        <tr>

                          <td class="icon">
                            📄
                          </td>

                          <td class="feature-content">

                            <p class="feature-title">
                              AI Resume Builder
                            </p>

                            <p class="feature-description">
                              Create polished, job-ready resumes tailored
                              around your experience and career goals.
                            </p>

                          </td>

                        </tr>
                      </table>

                    </td>
                  </tr>

                  <tr>
                    <td class="feature">

                      <table role="presentation">
                        <tr>

                          <td class="icon">
                            🧭
                          </td>

                          <td class="feature-content">

                            <p class="feature-title">
                              Personalized Roadmaps
                            </p>

                            <p class="feature-description">
                              Get a structured learning roadmap that helps
                              you understand what to learn, practice, and
                              improve next.
                            </p>

                          </td>

                        </tr>
                      </table>

                    </td>
                  </tr>

                  <tr>
                    <td class="feature">

                      <table role="presentation">
                        <tr>

                          <td class="icon">
                            📈
                          </td>

                          <td class="feature-content">

                            <p class="feature-title">
                              Interview History & Progress
                            </p>

                            <p class="feature-description">
                              Track your previous interviews, review feedback,
                              and see how your performance improves over time.
                            </p>

                          </td>

                        </tr>
                      </table>

                    </td>
                  </tr>

                </table>

              </td>
            </tr>

            <tr>
              <td>

                <div class="callout">

                  <p class="callout-title">
                    Your next interview starts with preparation.
                  </p>

                  <p class="callout-text">
                    Don't just practice more. Practice with purpose.
                    Use HireLoom AI to identify your weak areas, sharpen
                    your answers, and build the confidence to perform
                    when it matters.
                  </p>

                </div>

              </td>
            </tr>

            <tr>
              <td class="footer">

                <p class="footer-text">
                  You're receiving this email because you created an
                  account with HireLoom AI.
                </p>

                <div class="footer-links">

                  <a href="https://hireloomai.krishnastack.com">
                    HireLoom AI
                  </a>

                  <a href="https://hireloomai.krishnastack.com/privacy">
                    Privacy
                  </a>

                  <a href="https://hireloomai.krishnastack.com/contact">
                    Contact
                  </a>

                </div>

                <p
                  class="footer-text"
                  style="margin-top: 14px;"
                >
                  © 2026 HireLoom AI. All rights reserved.
                </p>

              </td>
            </tr>

          </table>

        </div>

      </td>
    </tr>
  </table>

</body>
</html>
  `
}