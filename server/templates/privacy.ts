export function renderPrivacyPage(): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
  <title>Privacy Policy - Saayr</title>
  <meta name="description" content="Privacy Policy for Saayr. Learn how we collect, use, store, and share your personal information when using the Saayr mobile application." />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'DM Sans', sans-serif;
      background-color: #09090b;
      color: #fafafa;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    a { color: #8b5cf6; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .container { max-width: 56rem; margin: 0 auto; padding: 0 1rem; }
    header {
      position: sticky; top: 0; z-index: 50;
      background: rgba(9, 9, 11, 0.8);
      backdrop-filter: blur(24px);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    header .container {
      display: flex; align-items: center; gap: 1rem;
      padding-top: 1rem; padding-bottom: 1rem;
    }
    .back-link {
      display: flex; align-items: center; gap: 0.5rem;
      color: #a1a1aa; font-size: 0.875rem; font-weight: 500;
      text-decoration: none; transition: color 0.2s;
    }
    .back-link:hover { color: #fafafa; text-decoration: none; }
    .back-link svg { width: 1.25rem; height: 1.25rem; }
    .logo-area {
      display: flex; align-items: center; gap: 0.75rem; margin-left: auto;
    }
    .logo-area img { width: 2rem; height: 2rem; border-radius: 0.5rem; object-fit: cover; }
    .logo-area span { font-weight: 700; color: #fafafa; }
    main { padding: 3rem 0; }
    h1 { font-size: 2.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .last-updated { color: #a1a1aa; margin-bottom: 2rem; }
    h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; }
    h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; }
    section { margin-bottom: 2rem; }
    p { margin-bottom: 0.75rem; color: #d4d4d8; }
    ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; color: #d4d4d8; }
    li { margin-bottom: 0.25rem; }
    strong { color: #fafafa; }
    footer {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 2rem 0;
    }
    footer .container {
      text-align: center; font-size: 0.875rem; color: #a1a1aa;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        <span>Back</span>
      </a>
      <div class="logo-area">
        <img src="/favicon.png" alt="Saayr" />
        <span>Saayr</span>
      </div>
    </div>
  </header>

  <main>
    <div class="container">
      <article>
        <h1>Privacy Policy</h1>
        <p class="last-updated"><strong>Last updated:</strong> 2026/1/3</p>

        <section>
          <h2>1. Introduction</h2>
          <p>This Privacy Policy explains how personal information is collected, used, stored, and shared when you use the Saayr mobile application and related services ("the App").</p>
          <p>The App is operated by <strong>Saayr Rewards Company</strong>, a company registered in the Kingdom of Saudi Arabia. By using the App, you agree to the practices described in this policy. This policy is designed to comply with applicable Saudi laws, including the Saudi Personal Data Protection Law (PDPL).</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <h3>Account Information</h3>
          <ul>
            <li>Name, username, email, and phone number</li>
            <li>Account preferences and settings</li>
          </ul>
          <h3>Device &amp; Technical Information</h3>
          <ul>
            <li>IP address, device ID, operating system, and other technical data</li>
            <li>Usage data such as app interactions and feature usage</li>
          </ul>
          <h3>Location Information</h3>
          <ul>
            <li>GPS or other location data when using check-ins or location-based features</li>
          </ul>
          <h3>Content &amp; Communications</h3>
          <ul>
            <li>Messages, content, feedback, or surveys you submit</li>
          </ul>
          <p>We do <strong>not knowingly</strong> collect sensitive personal data from children under 13.</p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Operate and provide the App and its features</li>
            <li>Track and deliver points, XP, levels, rewards, and missions</li>
            <li>Maintain and improve the App</li>
            <li>Communicate with users about updates, offers, or support</li>
            <li>Detect, prevent, and respond to fraud, abuse, or misuse</li>
            <li>Comply with applicable Saudi laws</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing &amp; Disclosure</h2>
          <p>We do <strong>not sell personal data</strong>.</p>
          <p>Information may be shared with:</p>
          <ul>
            <li>Service providers who support app operations (analytics, hosting, payments)</li>
            <li>Other users if you choose to share content or participate in social features</li>
            <li>Authorities or legal entities when required by Saudi law</li>
          </ul>
          <p>Third-party providers are required to protect data according to industry standards.</p>
        </section>

        <section>
          <h2>5. Cookies and Similar Technologies</h2>
          <p>The App may use cookies, pixels, or similar tools for analytics, performance, and personalization. You can manage these settings in your device or browser.</p>
        </section>

        <section>
          <h2>6. Security</h2>
          <p><strong>Saayr Rewards Company</strong> implements reasonable technical and organizational measures to protect your data. No system is completely secure, and we are not responsible for unauthorized access beyond our control.</p>
        </section>

        <section>
          <h2>7. Retention</h2>
          <p>Data is retained only as long as necessary to provide the App, fulfill legal obligations, or enforce agreements. Users can request deletion of their data at any time.</p>
        </section>

        <section>
          <h2>8. Children</h2>
          <p>The App is intended for users <strong>13 years or older</strong>. We do not knowingly collect data from children under 13. Any such data will be deleted if discovered.</p>
        </section>

        <section>
          <h2>9. Your Choices</h2>
          <p>Users can:</p>
          <ul>
            <li>Access, update, or delete their account information</li>
            <li>Opt out of promotional communications</li>
            <li>Control location and notification settings on their device</li>
          </ul>
        </section>

        <section>
          <h2>10. Changes to Policy</h2>
          <p>We may update this Privacy Policy periodically. Updates will be posted in the App or communicated via email. Continued use constitutes acceptance of changes.</p>
        </section>

        <section>
          <h2>11. Contact</h2>
          <p>For privacy questions or concerns, contact <strong>Saayr Rewards Company</strong> via in-app support or email at <a href="mailto:Info@saayr.sa">Info@saayr.sa</a>.</p>
        </section>
      </article>
    </div>
  </main>

  <footer>
    <div class="container">
      &copy; ${year} Saayr. All rights reserved.
    </div>
  </footer>
</body>
</html>`;
}
