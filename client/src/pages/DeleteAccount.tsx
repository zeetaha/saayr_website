import { useLanguage } from "@/hooks/use-language";
import { ArrowLeft, AlertTriangle, Trash2, Mail } from "lucide-react";
import { Link } from "wouter";
import saayrLogo from "@assets/Saayr_1769283861756.png";

export default function DeleteAccount() {
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
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-0">Delete Account</h1>
              <p className="text-muted-foreground mt-1">Request to permanently delete your Saayr account</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Important Information</h3>
                <p className="text-amber-700 text-sm">Deleting your account is permanent and cannot be undone. All your data, including points, XP, rewards, and activity history will be permanently removed.</p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Delete Your Account</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Option 1: Delete from the App</h3>
            <ol className="list-decimal pl-6 mb-6">
              <li>Open the Saayr app on your device</li>
              <li>Go to <strong>Settings</strong> (gear icon)</li>
              <li>Tap on <strong>Account</strong></li>
              <li>Scroll down and tap <strong>Delete Account</strong></li>
              <li>Confirm your decision by entering your password</li>
              <li>Tap <strong>Delete Permanently</strong></li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-3">Option 2: Request via Email</h3>
            <p>If you cannot access the app, you can request account deletion by email:</p>
            <ol className="list-decimal pl-6 mb-6">
              <li>Send an email to <a href="mailto:Info@saayr.sa" className="text-primary hover:underline">Info@saayr.sa</a></li>
              <li>Use the subject line: <strong>"Account Deletion Request"</strong></li>
              <li>Include your registered email address and phone number</li>
              <li>We will verify your identity and process the request within 7 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Gets Deleted</h2>
            <ul className="list-disc pl-6">
              <li>Your profile information (name, email, phone number)</li>
              <li>All accumulated points and XP</li>
              <li>Reward history and redeemed items</li>
              <li>Check-in history and activity data</li>
              <li>Any content you have shared</li>
              <li>Account preferences and settings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p>After account deletion:</p>
            <ul className="list-disc pl-6">
              <li>Personal data is deleted within 30 days</li>
              <li>Some anonymized data may be retained for analytics purposes</li>
              <li>Data required by law may be retained as per Saudi regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p>If you have questions about account deletion or need assistance, please contact our support team:</p>
            <a
              href="mailto:Info@saayr.sa"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Support
            </a>
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
