import { WaitlistForm } from "@/components/WaitlistForm";
import { AnimatedSection, FadeIn } from "@/components/AnimatedSection";
import { 
  MapPin, 
  Trophy, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Heart, 
  Store,
  Smartphone,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden font-sans text-foreground">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden pt-20 pb-20">
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
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Launching Soon in KSA
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Come over. <br/>
                <span className="gradient-text">Get Rewarded.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto lg:mx-0">
                Turns your check-ins and real-world moments into XP, Levels, and rewards that actually matter.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col items-center lg:items-start">
              <WaitlistForm className="max-w-md w-full" />
              <p className="text-sm text-muted-foreground mt-4">
                Join 2,000+ early explorers • No spam, ever.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="relative hidden lg:block">
            {/* Phone/App Mockup Placeholder */}
            <div className="relative z-10 w-[320px] mx-auto rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
               {/* Decorative floating elements */}
               <div className="absolute -right-12 top-20 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">+500 XP</div>
                      <div className="text-xs text-muted-foreground">Level Up!</div>
                    </div>
                  </div>
               </div>

               <div className="absolute -left-8 bottom-32 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Checked In</div>
                      <div className="text-xs text-muted-foreground">At The Coffee Club</div>
                    </div>
                  </div>
               </div>

               {/* Main Card Image */}
               {/* Unsplash abstract phone/app concept */}
               <div className="w-full aspect-[9/19] bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-900 overflow-hidden relative">
                 <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 rounded-t-[2.5rem] flex justify-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-b-xl"></div>
                 </div>
                 {/* Placeholder UI */}
                 <div className="w-full h-full bg-background rounded-[2.2rem] overflow-hidden flex flex-col">
                    <div className="h-1/2 bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex flex-col justify-end">
                      <h3 className="text-3xl font-display font-bold text-foreground mb-1">Hello, Sara!</h3>
                      <p className="text-muted-foreground mb-4">Level 5 Explorer</p>
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
      <AnimatedSection className="bg-white">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">More than just "Points"</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            "Saayr" isn't just an app name. It's an invitation. It means <span className="text-foreground font-semibold">"coming over"</span> or passing by. 
            We believe that showing up matters. We're building a world where your presence creates value—for you, your favorite spots, and your community.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="w-8 h-8 text-primary" />}
              title="Show Up"
              description="Check in at local spots, events, and hidden gems around Saudi Arabia."
            />
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-accent" />}
              title="Engage"
              description="Leave reviews, share photos, and complete challenges to boost your status."
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-orange-500" />}
              title="Get Rewarded"
              description="Unlock exclusive perks, freebies, and VIP status at places you love."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* --- HOW IT WORKS (Horizontal Scroll / Steps) --- */}
      <AnimatedSection className="bg-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
            <p className="text-lg text-muted-foreground">From explorer to local legend in three steps.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <StepCard 
                number="1"
                title="Download & Explore"
                description="Find hot spots near you. From cozy cafes in Riyadh to beach resorts in Jeddah."
              />
              <StepCard 
                number="2"
                title="Collect XP"
                description="Every check-in and interaction earns you Experience Points. Watch your level grow."
              />
              <StepCard 
                number="3"
                title="Redeem & Enjoy"
                description="Turn your levels into free coffee, discounts, or exclusive access."
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
              <h3 className="text-3xl font-bold mb-4">For Explorers</h3>
              <ul className="space-y-4 mb-8">
                <ListItem>Discover hidden gems in your city</ListItem>
                <ListItem>Socialize and compete with friends</ListItem>
                <ListItem>Earn rewards for doing what you love</ListItem>
              </ul>
              <a href="#join" className="font-semibold text-primary hover:text-primary/80 flex items-center gap-2">
                Start your journey <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-accent/5 rounded-[2.5rem] p-10 md:p-14 border border-accent/10 hover:border-accent/20 transition-all duration-300">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-accent">
                <Store className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">For Businesses</h3>
              <ul className="space-y-4 mb-8">
                <ListItem>Drive real foot traffic, not just clicks</ListItem>
                <ListItem>Build loyal communities</ListItem>
                <ListItem>Gamify your customer experience</ListItem>
              </ul>
              <a href="#join" className="font-semibold text-accent hover:text-accent/80 flex items-center gap-2">
                Partner with us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --- VALUES & TRUST --- */}
      <AnimatedSection className="bg-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Built with Integrity</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-6">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-700">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Privacy First</h4>
                <p className="text-sm text-muted-foreground">Your location data is yours. We only use check-ins you actively choose to share.</p>
             </div>
             <div className="p-6">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-700">
                   <Heart className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Community Driven</h4>
                <p className="text-sm text-muted-foreground">Designed to bring people together in the real world, not keep them scrolling.</p>
             </div>
             <div className="p-6">
                <div className="mx-auto w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-700">
                   <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">Proudly Saudi</h4>
                <p className="text-sm text-muted-foreground">Built in KSA, for KSA. We understand the local culture and hospitality.</p>
             </div>
          </div>
        </div>
      </AnimatedSection>

      {/* --- FINAL CTA --- */}
      <section id="join" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to start earning?</h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">
            Be the first to know when we launch in your city. Early access members get a <span className="text-primary font-bold">Level 5 Boost</span> on day one.
          </p>
          
          <WaitlistForm variant="footer" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-foreground text-white/50 py-12 border-t border-white/10">
        <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-foreground font-bold font-display text-xl">
              S
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight">Saayr</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} Saayr. All rights reserved. Built with ❤️ in Riyadh.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
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

// Re-export arrow right since it's used inline
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
