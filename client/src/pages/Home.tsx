import { WaitlistForm } from "@/components/WaitlistForm";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import {
  MapPin,
  Trophy,
  TrendingUp,
  Users,
  ShieldCheck,
  Heart,
  Store,
  Sparkles,
  Globe,
  Mail,
  ArrowRight,
  Check
} from "lucide-react";
import { SiX, SiInstagram, SiLinkedin, SiTiktok, SiAppstore, SiGoogleplay } from "react-icons/si";
import saayrLogo from "@assets/Saayr_1769283861756.png";

export default function Home() {
  const { t, language, setLanguage, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-background overflow-x-hidden text-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      {/* --- FIXED HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/30">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <img src={saayrLogo} alt="Saayr" className="w-11 h-11 rounded-xl object-cover shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-display font-bold text-foreground text-xl tracking-tight">
              {isRTL ? "سيّر" : "Saayr"}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#what" className="hover:text-foreground transition-all duration-300 hover:-translate-y-0.5">{t("nav.about")}</a>
            <a href="#how" className="hover:text-foreground transition-all duration-300 hover:-translate-y-0.5">{t("nav.howItWorks")}</a>
            <a href="#audience" className="hover:text-foreground transition-all duration-300 hover:-translate-y-0.5">{t("nav.forBusiness")}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/80 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "العربية" : "English"}
            </button>
            <a 
              href="#hero-form" 
              className="btn-premium hidden sm:flex items-center gap-2 !px-5 !py-2.5 !rounded-xl text-sm"
              data-testid="button-join-header"
            >
              {t("nav.joinWaitlist")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24 pb-20 animated-gradient noise-overlay">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Gradient Orbs */}
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-[120px] translate-x-1/3 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-accent/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '48px 48px' 
            }} 
          />
          
          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full float" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/40 rounded-full float-delayed" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full float" style={{ animationDelay: '-2s' }} />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <FadeIn delay={0.1}>
              <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-primary text-sm font-semibold mb-8`}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                {t("hero.badge")}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05]">
                {t("hero.headline1")} <br/>
                <span className="gradient-text">{t("hero.headline2")}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className={`text-xl md:text-2xl text-muted-foreground mb-10 text-balance max-w-xl leading-relaxed ${isRTL ? 'mx-auto lg:mr-0 lg:ml-auto' : 'mx-auto lg:mx-0'}`}>
                {t("hero.description")}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className={`flex flex-col items-center ${isRTL ? 'lg:items-end' : 'lg:items-start'}`}>
              <div id="hero-form" className="w-full max-w-md">
                <WaitlistForm className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground mt-5 flex items-center gap-2">
                <span className="flex items-center gap-1.5">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background" />
                    <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-background" />
                    <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-background" />
                  </div>
                  {t("hero.earlyExplorers")}
                </span>
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="relative hidden lg:flex justify-center items-center">
            {/* Glow Effect Behind Phone */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[500px] bg-gradient-to-b from-primary/20 to-accent/10 rounded-full blur-[80px] pulse-glow" />
            </div>
            
            {/* Phone Mockup */}
            <div className={`relative z-10 w-[300px] float`}>
               {/* Floating Cards */}
               <div className={`absolute ${isRTL ? '-left-16' : '-right-16'} top-16 glass-card p-5 rounded-2xl z-20 shadow-2xl shadow-black/10`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">{t("phone.xp")}</div>
                      <div className="text-sm text-muted-foreground">{t("phone.levelUp")}</div>
                    </div>
                  </div>
               </div>

               <div className={`absolute ${isRTL ? '-right-12' : '-left-12'} bottom-40 glass-card p-5 rounded-2xl z-20 shadow-2xl shadow-black/10`} style={{ animationDelay: '-3s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-amber-400 flex items-center justify-center text-white shadow-lg shadow-accent/30">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">{t("phone.checkedIn")}</div>
                      <div className="text-sm text-muted-foreground">{t("phone.location")}</div>
                    </div>
                  </div>
               </div>

               {/* Main Phone */}
               <div className="w-full aspect-[9/19] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2.5 shadow-2xl shadow-black/30 border border-gray-800 overflow-hidden relative">
                 <div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 rounded-t-[2.5rem] flex justify-center items-end pb-1">
                    <div className="w-24 h-5 bg-black rounded-b-2xl border-b border-x border-gray-800"></div>
                 </div>
                 {/* Phone Screen */}
                 <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col">
                    <div className="h-1/2 bg-gradient-to-br from-primary/15 via-primary/10 to-accent/5 p-7 flex flex-col justify-end relative overflow-hidden">
                      {/* Decorative circles */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                      
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 relative z-10">{t("phone.greeting")}</h3>
                      <p className="text-muted-foreground mb-5 relative z-10">{t("phone.level")}</p>
                      <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden relative z-10 shadow-inner">
                        <div className="w-[70%] h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-5 space-y-3">
                      <div className="h-16 rounded-2xl bg-gradient-to-r from-secondary/50 to-secondary/30 w-full flex items-center px-4 gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10" />
                        <div className="flex-1 space-y-2">
                          <div className="w-2/3 h-3 rounded-full bg-muted/50" />
                          <div className="w-1/2 h-2 rounded-full bg-muted/30" />
                        </div>
                      </div>
                      <div className="h-16 rounded-2xl bg-gradient-to-r from-secondary/40 to-secondary/20 w-full flex items-center px-4 gap-3">
                        <div className="w-10 h-10 rounded-xl bg-accent/10" />
                        <div className="flex-1 space-y-2">
                          <div className="w-3/4 h-3 rounded-full bg-muted/50" />
                          <div className="w-1/3 h-2 rounded-full bg-muted/30" />
                        </div>
                      </div>
                      <div className="h-16 rounded-2xl bg-gradient-to-r from-secondary/30 to-secondary/10 w-full flex items-center px-4 gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/5" />
                        <div className="flex-1 space-y-2">
                          <div className="w-1/2 h-3 rounded-full bg-muted/40" />
                          <div className="w-2/3 h-2 rounded-full bg-muted/20" />
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* --- WHAT IS SAAYR --- */}
      <AnimatedSection id="what" className="bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold tracking-wider uppercase text-xs mb-6">{t("what.label")}</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-8 leading-tight">{t("what.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-20 leading-relaxed">
            {t("what.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<MapPin className="w-7 h-7" />}
              title={t("what.showUp.title")}
              description={t("what.showUp.description")}
              gradient="from-primary to-emerald-500"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-7 h-7" />}
              title={t("what.engage.title")}
              description={t("what.engage.description")}
              gradient="from-emerald-500 to-teal-500"
            />
            <FeatureCard 
              icon={<Sparkles className="w-7 h-7" />}
              title={t("what.rewarded.title")}
              description={t("what.rewarded.description")}
              gradient="from-accent to-amber-400"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* --- HOW IT WORKS --- */}
      <AnimatedSection id="how" className="bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-50" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-white text-primary font-semibold tracking-wider uppercase text-xs mb-6 shadow-sm">{t("how.label")}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">{t("how.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("how.subtitle")}</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent hidden md:block z-0" />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              <StepCard 
                number="1"
                title={t("how.step1.title")}
                description={t("how.step1.description")}
              />
              <StepCard 
                number="2"
                title={t("how.step2.title")}
                description={t("how.step2.description")}
              />
              <StepCard 
                number="3"
                title={t("how.step3.title")}
                description={t("how.step3.description")}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --- AUDIENCE SPLIT --- */}
      <AnimatedSection id="audience" className="relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold tracking-wider uppercase text-xs mb-6">{t("audience.label")}</span>
            <h2 className="text-4xl md:text-5xl font-bold">{t("audience.mainTitle")}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="premium-card bg-gradient-to-br from-white to-primary/5 p-10 md:p-14 border border-primary/10 shadow-xl shadow-primary/5">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 mb-8 text-white">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">{t("audience.explorers.title")}</h3>
              <ul className="space-y-4 mb-10">
                <ListItem>{t("audience.explorers.item1")}</ListItem>
                <ListItem>{t("audience.explorers.item2")}</ListItem>
                <ListItem>{t("audience.explorers.item3")}</ListItem>
              </ul>
              <a href="#hero-form" className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all duration-300">
                {t("audience.explorers.cta")} <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="premium-card bg-gradient-to-br from-white to-accent/5 p-10 md:p-14 border border-accent/10 shadow-xl shadow-accent/5">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-accent/30 mb-8 text-white">
                <Store className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">{t("audience.business.title")}</h3>
              <ul className="space-y-4 mb-10">
                <ListItem accent>{t("audience.business.item1")}</ListItem>
                <ListItem accent>{t("audience.business.item2")}</ListItem>
                <ListItem accent>{t("audience.business.item3")}</ListItem>
              </ul>
              <a href="#hero-form" className="inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all duration-300">
                {t("audience.business.cta")} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --- VALUES & TRUST --- */}
      <AnimatedSection className="bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20" />
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold tracking-wider uppercase text-xs mb-6">{t("trust.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">{t("trust.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <TrustCard 
               icon={<ShieldCheck className="w-7 h-7" />}
               title={t("trust.privacy.title")}
               description={t("trust.privacy.description")}
             />
             <TrustCard 
               icon={<Heart className="w-7 h-7" />}
               title={t("trust.community.title")}
               description={t("trust.community.description")}
             />
             <TrustCard 
               icon={<MapPin className="w-7 h-7" />}
               title={t("trust.saudi.title")}
               description={t("trust.saudi.description")}
             />
          </div>
        </div>
      </AnimatedSection>

      {/* --- FOOTER --- */}
      <footer className="bg-gradient-to-b from-foreground to-gray-900 text-white/60 py-16 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <img src={saayrLogo} alt="Saayr" className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <span className="font-display font-bold text-white text-xl tracking-tight">
              {isRTL ? "سيّر" : "Saayr"}
            </span>
          </div>
          <div className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} {isRTL ? "سيّر" : "Saayr"}. {t("footer.copyright")}
          </div>
          <div className="flex gap-3">
            <SocialIcon href="https://x.com/saayrapp" icon={<SiX className="w-4 h-4" />} testId="link-twitter" />
            <SocialIcon href="https://www.instagram.com/saayrapp/" icon={<SiInstagram className="w-4 h-4" />} testId="link-instagram" />
            <SocialIcon href="https://www.tiktok.com/@saayrapp" icon={<SiTiktok className="w-4 h-4" />} testId="link-tiktok" />
            <SocialIcon href="https://www.linkedin.com/company/saayr" icon={<SiLinkedin className="w-4 h-4" />} testId="link-linkedin" />
            <SocialIcon href="mailto:Info@saayr.sa" icon={<Mail className="w-4 h-4" />} testId="link-email" />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8 relative z-10">
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300" data-testid="link-appstore">
            <SiAppstore className="w-6 h-6 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/60">{isRTL ? "حمّل من" : "Download on"}</div>
              <div className="text-sm font-semibold text-white">App Store</div>
            </div>
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300" data-testid="link-playstore">
            <SiGoogleplay className="w-6 h-6 text-white" />
            <div className="text-left">
              <div className="text-[10px] text-white/60">{isRTL ? "حمّل من" : "Get it on"}</div>
              <div className="text-sm font-semibold text-white">Google Play</div>
            </div>
          </a>
        </div>
        {/* Legal Links */}
        <div className="flex justify-center gap-6 mt-8 relative z-10 text-sm">
          <Link href="/privacy" className="hover:text-white transition-colors">{isRTL ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
          <Link href="/terms" className="hover:text-white transition-colors">{isRTL ? "الشروط والأحكام" : "Terms & Conditions"}</Link>
          <Link href="/delete-account" className="hover:text-white transition-colors">{isRTL ? "حذف الحساب" : "Delete Account"}</Link>
        </div>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SocialIcon({ href, icon, testId }: { href: string; icon: React.ReactNode; testId: string }) {
  return (
    <a 
      href={href}
      target={href.startsWith('mailto') ? undefined : "_blank"}
      rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
      className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300"
      data-testid={testId}
    >
      {icon}
    </a>
  );
}

function FeatureCard({ icon, title, description, gradient }: { icon: React.ReactNode; title: string; description: string; gradient: string }) {
  return (
    <div className="premium-card bg-white p-10 shadow-xl shadow-black/5 border border-gray-100 text-center group">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-7 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center group">
      <div className="relative inline-flex mb-8">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-xl shadow-black/10 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-2">
          <span className="text-3xl font-bold gradient-text">{number}</span>
        </div>
        <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
}

function ListItem({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <li className="flex items-start gap-4 text-lg">
      <div className={`w-6 h-6 rounded-full ${accent ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'} flex items-center justify-center flex-shrink-0 mt-0.5`}>
        <Check className="w-3.5 h-3.5" />
      </div>
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}

function TrustCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-8 rounded-3xl bg-gradient-to-b from-white to-secondary/30 border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 hover:-translate-y-2 group">
      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-3">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
