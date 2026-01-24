import { WaitlistForm } from "@/components/WaitlistForm";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import { useLanguage } from "@/hooks/use-language";
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
  Mail
} from "lucide-react";
import { SiX, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si";
import saayrLogo from "@assets/Saayr_1769283861756.png";

export default function Home() {
  const { t, language, setLanguage, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-background overflow-x-hidden text-foreground ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      {/* --- FIXED HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={saayrLogo} alt="Saayr" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-foreground text-xl tracking-tight">
              {isRTL ? "سيّر" : "Saayr"}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#what" className="hover:text-foreground transition-colors">{t("nav.about")}</a>
            <a href="#how" className="hover:text-foreground transition-colors">{t("nav.howItWorks")}</a>
            <a href="#join" className="hover:text-foreground transition-colors">{t("nav.forBusiness")}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              data-testid="button-language-toggle"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "العربية" : "English"}
            </button>
            <a 
              href="#join" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-join-header"
            >
              {t("nav.joinWaitlist")}
            </a>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden pt-28 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        <div className="container max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <FadeIn delay={0.1}>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {t("hero.badge")}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                {t("hero.headline1")} <br/>
                <span className="gradient-text">{t("hero.headline2")}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className={`text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl ${isRTL ? 'mx-auto lg:mr-0 lg:ml-auto' : 'mx-auto lg:mx-0'}`}>
                {t("hero.description")}
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className={`flex flex-col items-center ${isRTL ? 'lg:items-end' : 'lg:items-start'}`}>
              <WaitlistForm className="max-w-md w-full" />
              <p className="text-sm text-muted-foreground mt-4">
                {t("hero.earlyExplorers")}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="relative hidden lg:block">
            {/* Phone/App Mockup */}
            <div className={`relative z-10 w-[320px] mx-auto ${isRTL ? 'rotate-[6deg] hover:rotate-0' : 'rotate-[-6deg] hover:rotate-0'} transition-transform duration-500`}>
               {/* Decorative floating elements */}
               <div className={`absolute ${isRTL ? '-left-12' : '-right-12'} top-20 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce`} style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{t("phone.xp")}</div>
                      <div className="text-xs text-muted-foreground">{t("phone.levelUp")}</div>
                    </div>
                  </div>
               </div>

               <div className={`absolute ${isRTL ? '-right-8' : '-left-8'} bottom-32 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce`} style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{t("phone.checkedIn")}</div>
                      <div className="text-xs text-muted-foreground">{t("phone.location")}</div>
                    </div>
                  </div>
               </div>

               {/* Main Card Image */}
               <div className="w-full aspect-[9/19] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-900 overflow-hidden relative">
                 <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 rounded-t-[2.5rem] flex justify-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-b-xl"></div>
                 </div>
                 {/* Placeholder UI */}
                 <div className="w-full h-full bg-background rounded-[2.2rem] overflow-hidden flex flex-col">
                    <div className="h-1/2 bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex flex-col justify-end">
                      <h3 className="text-3xl font-display font-bold text-foreground mb-1">{t("phone.greeting")}</h3>
                      <p className="text-muted-foreground mb-4">{t("phone.level")}</p>
                      <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                        <div className="w-[70%] h-full bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-6 space-y-4">
                      <div className="h-20 rounded-2xl bg-secondary/30 w-full animate-pulse"></div>
                      <div className="h-20 rounded-2xl bg-secondary/30 w-full animate-pulse delay-100"></div>
                      <div className="h-20 rounded-2xl bg-secondary/30 w-full animate-pulse delay-200"></div>
                    </div>
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- WHAT IS SAAYR --- */}
      <AnimatedSection id="what" className="bg-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">{t("what.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">{t("what.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            {t("what.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="w-8 h-8 text-primary" />}
              title={t("what.showUp.title")}
              description={t("what.showUp.description")}
            />
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-primary" />}
              title={t("what.engage.title")}
              description={t("what.engage.description")}
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-primary" />}
              title={t("what.rewarded.title")}
              description={t("what.rewarded.description")}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* --- HOW IT WORKS --- */}
      <AnimatedSection id="how" className="bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("how.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("how.subtitle")}</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
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
      <AnimatedSection>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="bg-primary/5 rounded-[2.5rem] p-10 md:p-14 border border-primary/10 hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-primary">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{t("audience.explorers.title")}</h3>
              <ul className="space-y-4 mb-8">
                <ListItem>{t("audience.explorers.item1")}</ListItem>
                <ListItem>{t("audience.explorers.item2")}</ListItem>
                <ListItem>{t("audience.explorers.item3")}</ListItem>
              </ul>
              <a href="#join" className="font-semibold text-primary hover:text-primary/80 flex items-center gap-2">
                {t("audience.explorers.cta")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-accent/5 rounded-[2.5rem] p-10 md:p-14 border border-accent/10 hover:border-accent/20 transition-all duration-300">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-accent">
                <Store className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{t("audience.business.title")}</h3>
              <ul className="space-y-4 mb-8">
                <ListItem>{t("audience.business.item1")}</ListItem>
                <ListItem>{t("audience.business.item2")}</ListItem>
                <ListItem>{t("audience.business.item3")}</ListItem>
              </ul>
              <a href="#join" className="font-semibold text-accent hover:text-accent/80 flex items-center gap-2">
                {t("audience.business.cta")} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --- VALUES & TRUST --- */}
      <AnimatedSection className="bg-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">{t("trust.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-700">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t("trust.privacy.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("trust.privacy.description")}</p>
             </div>
             <div className="p-6">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-700">
                   <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t("trust.community.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("trust.community.description")}</p>
             </div>
             <div className="p-6">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-700">
                   <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{t("trust.saudi.title")}</h4>
                <p className="text-sm text-muted-foreground">{t("trust.saudi.description")}</p>
             </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --- FINAL CTA --- */}
      <section id="join" className="py-24 md:py-32 bg-primary relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">{t("cta.title")}</h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            {t("cta.description")} <span className="text-accent font-bold">{t("cta.boost")}</span> {t("cta.dayOne")}
          </p>
          
          <WaitlistForm variant="footer" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-foreground text-white/50 py-12 border-t border-white/10">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={saayrLogo} alt="Saayr" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-bold text-white text-lg tracking-tight">
              {isRTL ? "سيّر" : "Saayr"}
            </span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} {isRTL ? "سيّر" : "Saayr"}. {t("footer.copyright")}
          </div>
          <div className="flex gap-4">
            <a 
              href="https://x.com/saayrapp" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              data-testid="link-twitter"
            >
              <SiX className="w-4 h-4" />
            </a>
            <a 
              href="https://www.instagram.com/saayrapp/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              data-testid="link-instagram"
            >
              <SiInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://www.tiktok.com/@saayrapp" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              data-testid="link-tiktok"
            >
              <SiTiktok className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/company/saayr" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:Info@saayr.sa" 
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10">
      <div className="mb-6 inline-block p-4 rounded-2xl bg-secondary/50">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="bg-background md:bg-transparent p-6 rounded-2xl md:p-0 text-center relative group">
      <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary mx-auto flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors duration-300 mb-6 relative z-10 shadow-sm">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 w-5 h-5 rounded-full bg-white/50 flex items-center justify-center shrink-0">
        <div className="w-2 h-2 rounded-full bg-current opacity-70" />
      </div>
      <span className="text-lg opacity-90">{children}</span>
    </li>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
