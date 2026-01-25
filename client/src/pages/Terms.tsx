import { useLanguage } from "@/hooks/use-language";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import saayrLogo from "@assets/Saayr_1769283861756.png";

export default function Terms() {
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
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8"><strong>Last updated:</strong> 2026/1/3</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>By using the Saayr mobile application and services ("the App"), you agree to these Terms & Conditions. If you do not agree, do not use the App.</p>
            <p>The App is operated by <strong>Saayr Rewards Company</strong>, a company registered in the Kingdom of Saudi Arabia.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <p>Users must be <strong>13 years or older</strong>. By using the App, you confirm you meet this requirement.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Account Responsibility</h2>
            <p>Users are responsible for:</p>
            <ul className="list-disc pl-6">
              <li>Maintaining account security</li>
              <li>All activity under their account</li>
            </ul>
            <p><strong>Saayr Rewards Company</strong> is not responsible for unauthorized access caused by user negligence.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. App Features, Rewards, and Content</h2>
            <ul className="list-disc pl-6">
              <li>Points, XP, levels, and rewards are granted according to in-app activity</li>
              <li>Rewards are <strong>non-cashable</strong> unless explicitly stated</li>
              <li>Features, missions, or rewards may be modified, suspended, or removed at any time</li>
              <li>Abuse or fraud may result in account suspension or termination</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Payments</h2>
            <ul className="list-disc pl-6">
              <li>Payments may be made by users or on behalf of other users</li>
              <li>Payment confirmations are system-generated and final</li>
              <li>Refunds are subject to store or payment provider policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Prohibited Activities</h2>
            <p>Users may not:</p>
            <ul className="list-disc pl-6">
              <li>Manipulate or exploit app features or rewards</li>
              <li>Use automation or bots</li>
              <li>Harass or harm other users</li>
              <li>Engage in illegal activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. User Content</h2>
            <p>You are responsible for content shared in the App.</p>
            <p>By sharing content, you grant the App a license to use, display, and distribute it as necessary for operation.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p>All content, trademarks, logos, and software are owned by <strong>Saayr Rewards Company</strong>. Unauthorized use is prohibited.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p>The App is provided "as is." <strong>Saayr Rewards Company</strong> is <strong>not liable</strong> for:</p>
            <ul className="list-disc pl-6">
              <li>Lost rewards or points</li>
              <li>Missed check-ins or XP</li>
              <li>Service interruptions, errors, or technical issues</li>
              <li>Any indirect or consequential damages</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p>These Terms are governed by the laws of the Kingdom of Saudi Arabia. Disputes will first be addressed through internal support channels before legal action.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p>Terms may be updated at any time. Continued use constitutes acceptance.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
            <p>Support is available via in-app channels or email at <a href="mailto:Info@saayr.sa" className="text-primary hover:underline">Info@saayr.sa</a>.</p>
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
