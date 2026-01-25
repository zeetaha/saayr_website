import { useLanguage } from "@/hooks/use-language";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import saayrLogo from "@assets/Saayr_1769283861756.png";

export default function Privacy() {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-3 ml-auto">
            <img src={saayrLogo} alt="Saayr" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-foreground">{isRTL ? "سيّر" : "Saayr"}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8"><strong>Last updated:</strong> 2026/1/3</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>This Privacy Policy explains how personal information is collected, used, stored, and shared when you use the Saayr mobile application and related services ("the App").</p>
            <p>The App is operated by <strong>Saayr Rewards Company</strong>, a company registered in the Kingdom of Saudi Arabia. By using the App, you agree to the practices described in this policy. This policy is designed to comply with applicable Saudi laws, including the Saudi Personal Data Protection Law (PDPL).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Account Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, username, email, and phone number</li>
              <li>Account preferences and settings</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Device & Technical Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address, device ID, operating system, and other technical data</li>
              <li>Usage data such as app interactions and feature usage</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Location Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>GPS or other location data when using check-ins or location-based features</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Content & Communications</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Messages, content, feedback, or surveys you submit</li>
            </ul>

            <p>We do <strong>not knowingly</strong> collect sensitive personal data from children under 13.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6">
              <li>Operate and provide the App and its features</li>
              <li>Track and deliver points, XP, levels, rewards, and missions</li>
              <li>Maintain and improve the App</li>
              <li>Communicate with users about updates, offers, or support</li>
              <li>Detect, prevent, and respond to fraud, abuse, or misuse</li>
              <li>Comply with applicable Saudi laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Sharing & Disclosure</h2>
            <p>We do <strong>not sell personal data</strong>.</p>
            <p>Information may be shared with:</p>
            <ul className="list-disc pl-6">
              <li>Service providers who support app operations (analytics, hosting, payments)</li>
              <li>Other users if you choose to share content or participate in social features</li>
              <li>Authorities or legal entities when required by Saudi law</li>
            </ul>
            <p>Third-party providers are required to protect data according to industry standards.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Similar Technologies</h2>
            <p>The App may use cookies, pixels, or similar tools for analytics, performance, and personalization. You can manage these settings in your device or browser.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Security</h2>
            <p><strong>Saayr Rewards Company</strong> implements reasonable technical and organizational measures to protect your data. No system is completely secure, and we are not responsible for unauthorized access beyond our control.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Retention</h2>
            <p>Data is retained only as long as necessary to provide the App, fulfill legal obligations, or enforce agreements. Users can request deletion of their data at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Children</h2>
            <p>The App is intended for users <strong>13 years or older</strong>. We do not knowingly collect data from children under 13. Any such data will be deleted if discovered.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Your Choices</h2>
            <p>Users can:</p>
            <ul className="list-disc pl-6">
              <li>Access, update, or delete their account information</li>
              <li>Opt out of promotional communications</li>
              <li>Control location and notification settings on their device</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Policy</h2>
            <p>We may update this Privacy Policy periodically. Updates will be posted in the App or communicated via email. Continued use constitutes acceptance of changes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Contact</h2>
            <p>For privacy questions or concerns, contact <strong>Saayr Rewards Company</strong> via in-app support or email at <a href="mailto:Info@saayr.sa" className="text-primary hover:underline">Info@saayr.sa</a>.</p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="container max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saayr. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
