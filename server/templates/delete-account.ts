export function renderDeleteAccountPage(): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
  <title>Delete Account - Saayr</title>
  <meta name="description" content="Request to permanently delete your Saayr account. Learn what data gets deleted and how the process works." />
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
    h1 { font-size: 2.25rem; font-weight: 700; margin-bottom: 0; }
    h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; }
    h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; }
    section { margin-bottom: 2rem; }
    p { margin-bottom: 0.75rem; color: #d4d4d8; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; color: #d4d4d8; }
    ul { list-style: disc; }
    ol { list-style: decimal; }
    li { margin-bottom: 0.25rem; }
    strong { color: #fafafa; }
    .title-area {
      display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;
    }
    .trash-icon {
      width: 4rem; height: 4rem; background: #fef2f2; border-radius: 1rem;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .trash-icon svg { width: 2rem; height: 2rem; color: #dc2626; }
    .title-area p { color: #a1a1aa; margin-top: 0.25rem; margin-bottom: 0; }
    .warning-box {
      background: #fffbeb; border: 1px solid #fde68a; border-radius: 0.75rem;
      padding: 1.5rem; margin-bottom: 2rem; display: flex; align-items: flex-start; gap: 1rem;
    }
    .warning-box svg { width: 1.5rem; height: 1.5rem; color: #d97706; flex-shrink: 0; margin-top: 0.125rem; }
    .warning-box h3 { font-weight: 600; color: #92400e; margin-bottom: 0.5rem; margin-top: 0; font-size: 1rem; }
    .warning-box p { color: #b45309; font-size: 0.875rem; margin-bottom: 0; }
    .phone-form {
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 2rem;
    }
    .phone-form label {
      display: block; font-weight: 600; margin-bottom: 0.5rem; color: #fafafa;
    }
    .phone-form p.hint {
      font-size: 0.875rem; color: #a1a1aa; margin-bottom: 1rem;
    }
    .input-row {
      display: flex; gap: 0.75rem;
    }
    .phone-form input[type="tel"] {
      flex: 1; padding: 0.75rem 1rem; border-radius: 0.75rem;
      border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.06);
      color: #fafafa; font-size: 1rem; font-family: 'DM Sans', sans-serif;
      outline: none; transition: border-color 0.2s;
    }
    .phone-form input[type="tel"]::placeholder { color: #71717a; }
    .phone-form input[type="tel"]:focus { border-color: #8b5cf6; }
    .phone-form button {
      padding: 0.75rem 1.5rem; border-radius: 0.75rem; border: none;
      background: #dc2626; color: #fff; font-size: 1rem; font-weight: 600;
      font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s;
      white-space: nowrap;
    }
    .phone-form button:hover { background: #b91c1c; }
    .phone-form button:disabled { opacity: 0.5; cursor: not-allowed; }
    .success-msg {
      display: none; margin-top: 1rem; padding: 1rem; border-radius: 0.75rem;
      background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3);
    }
    .success-msg p { color: #4ade80; margin: 0; }
    .success-msg p strong { color: #22c55e; }
    .contact-btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      margin-top: 1rem; padding: 0.75rem 1.5rem;
      background: #8b5cf6; color: #fff; border-radius: 0.75rem;
      text-decoration: none; font-weight: 600; transition: background 0.2s;
    }
    .contact-btn:hover { background: #7c3aed; text-decoration: none; }
    .contact-btn svg { width: 1.25rem; height: 1.25rem; }
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
        <div class="title-area">
          <div class="trash-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
          </div>
          <div>
            <h1>Delete Account</h1>
            <p>Request to permanently delete your Saayr account</p>
          </div>
        </div>

        <div class="warning-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          <div>
            <h3>Important Information</h3>
            <p>Deleting your account is permanent and cannot be undone. All your data, including points, XP, rewards, and activity history will be permanently removed.</p>
          </div>
        </div>

        <section>
          <h2>Request Account Deletion</h2>
          <div class="phone-form" id="deleteForm">
            <label for="phone">Phone Number</label>
            <p class="hint">Enter the phone number associated with your Saayr account.</p>
            <div class="input-row">
              <input type="tel" id="phone" name="phone" placeholder="+966 5XX XXX XXXX" required />
              <button type="button" id="submitBtn" onclick="handleSubmit()">Submit Request</button>
            </div>
            <div class="success-msg" id="successMsg">
              <p><strong>Your request has been received.</strong></p>
              <p>We will process your account deletion request within 7 business days. You will receive a confirmation once completed.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>How to Delete Your Account</h2>

          <h3>Option 1: Delete from the App</h3>
          <ol>
            <li>Open the Saayr app on your device</li>
            <li>Go to <strong>Settings</strong> (gear icon)</li>
            <li>Tap on <strong>Account</strong></li>
            <li>Scroll down and tap <strong>Delete Account</strong></li>
            <li>Confirm your decision by entering your password</li>
            <li>Tap <strong>Delete Permanently</strong></li>
          </ol>

          <h3>Option 2: Request via Email</h3>
          <p>If you cannot access the app, you can request account deletion by email:</p>
          <ol>
            <li>Send an email to <a href="mailto:Info@saayr.sa">Info@saayr.sa</a></li>
            <li>Use the subject line: <strong>"Account Deletion Request"</strong></li>
            <li>Include your registered email address and phone number</li>
            <li>We will verify your identity and process the request within 7 business days</li>
          </ol>
        </section>

        <section>
          <h2>What Gets Deleted</h2>
          <ul>
            <li>Your profile information (name, email, phone number)</li>
            <li>All accumulated points and XP</li>
            <li>Reward history and redeemed items</li>
            <li>Check-in history and activity data</li>
            <li>Any content you have shared</li>
            <li>Account preferences and settings</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>After account deletion:</p>
          <ul>
            <li>Personal data is deleted within 30 days</li>
            <li>Some anonymized data may be retained for analytics purposes</li>
            <li>Data required by law may be retained as per Saudi regulations</li>
          </ul>
        </section>

        <section>
          <h2>Need Help?</h2>
          <p>If you have questions about account deletion or need assistance, please contact our support team:</p>
          <a href="mailto:Info@saayr.sa" class="contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Contact Support
          </a>
        </section>
      </article>
    </div>
  </main>

  <footer>
    <div class="container">
      &copy; ${year} Saayr. All rights reserved.
    </div>
  </footer>

  <script>
    function handleSubmit() {
      var phone = document.getElementById('phone');
      var btn = document.getElementById('submitBtn');
      var successMsg = document.getElementById('successMsg');

      if (!phone.value.trim()) {
        phone.focus();
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Submitting...';

      setTimeout(function() {
        successMsg.style.display = 'block';
        btn.textContent = 'Submitted';
        phone.disabled = true;
      }, 800);
    }

    document.getElementById('phone').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleSubmit();
    });
  </script>
</body>
</html>`;
}
