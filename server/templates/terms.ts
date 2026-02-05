export function renderTermsPage(): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
  <title>Terms &amp; Conditions - Saayr</title>
  <meta name="description" content="Terms and Conditions for Saayr. Read our terms of service covering account usage, rewards, payments, and more." />
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
        <h1>Terms &amp; Conditions</h1>
        <p class="last-updated"><strong>Last updated:</strong> 2026/1/3</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By using the Saayr mobile application and services ("the App"), you agree to these Terms &amp; Conditions. If you do not agree, do not use the App.</p>
          <p>The App is operated by <strong>Saayr Rewards Company</strong>, a company registered in the Kingdom of Saudi Arabia.</p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>Users must be <strong>13 years or older</strong>. By using the App, you confirm you meet this requirement.</p>
        </section>

        <section>
          <h2>3. Account Responsibility</h2>
          <p>Users are responsible for:</p>
          <ul>
            <li>Maintaining account security</li>
            <li>All activity under their account</li>
          </ul>
          <p><strong>Saayr Rewards Company</strong> is not responsible for unauthorized access caused by user negligence.</p>
        </section>

        <section>
          <h2>4. App Features, Rewards, and Content</h2>
          <ul>
            <li>Points, XP, levels, and rewards are granted according to in-app activity</li>
            <li>Rewards are <strong>non-cashable</strong> unless explicitly stated</li>
            <li>Features, missions, or rewards may be modified, suspended, or removed at any time</li>
            <li>Abuse or fraud may result in account suspension or termination</li>
          </ul>
        </section>

        <section>
          <h2>5. Payments</h2>
          <ul>
            <li>Payments may be made by users or on behalf of other users</li>
            <li>Payment confirmations are system-generated and final</li>
            <li>Refunds are subject to store or payment provider policies</li>
          </ul>
        </section>

        <section>
          <h2>6. Prohibited Activities</h2>
          <p>Users may not:</p>
          <ul>
            <li>Manipulate or exploit app features or rewards</li>
            <li>Use automation or bots</li>
            <li>Harass or harm other users</li>
            <li>Engage in illegal activities</li>
          </ul>
        </section>

        <section>
          <h2>7. User Content</h2>
          <p>You are responsible for content shared in the App.</p>
          <p>By sharing content, you grant the App a license to use, display, and distribute it as necessary for operation.</p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>All content, trademarks, logos, and software are owned by <strong>Saayr Rewards Company</strong>. Unauthorized use is prohibited.</p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>The App is provided "as is." <strong>Saayr Rewards Company</strong> is <strong>not liable</strong> for:</p>
          <ul>
            <li>Lost rewards or points</li>
            <li>Missed check-ins or XP</li>
            <li>Service interruptions, errors, or technical issues</li>
            <li>Any indirect or consequential damages</li>
          </ul>
        </section>

        <section>
          <h2>10. Governing Law</h2>
          <p>These Terms are governed by the laws of the Kingdom of Saudi Arabia. Disputes will first be addressed through internal support channels before legal action.</p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>Terms may be updated at any time. Continued use constitutes acceptance.</p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>Support is available via in-app channels or email at <a href="mailto:Info@saayr.sa">Info@saayr.sa</a>.</p>
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
