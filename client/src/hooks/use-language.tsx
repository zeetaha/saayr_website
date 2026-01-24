import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.howItWorks": "How It Works",
    "nav.forBusiness": "For Business",
    "nav.joinWaitlist": "Join Waitlist",
    "hero.badge": "Launching Soon in KSA",
    "hero.headline1": "Come over.",
    "hero.headline2": "Get Rewarded.",
    "hero.description": "Turns your check-ins and real-world moments into XP, Levels, and rewards that actually matter.",
    "hero.earlyExplorers": "Join 2,000+ early explorers",
    "hero.noSpam": "No spam, ever.",
    "what.label": "Our Philosophy",
    "what.title": "More than just \"Points\"",
    "what.description": "\"Saayr\" isn't just an app name. It's an invitation. It means \"coming over\" or passing by. We believe that showing up matters. We're building a world where your presence creates value—for you, your favorite spots, and your community.",
    "what.showUp.title": "Show Up",
    "what.showUp.description": "Check in at local spots, events, and hidden gems around Saudi Arabia.",
    "what.engage.title": "Engage",
    "what.engage.description": "Leave reviews, share photos, and complete challenges to boost your status.",
    "what.rewarded.title": "Get Rewarded",
    "what.rewarded.description": "Unlock exclusive perks, freebies, and VIP status at places you love.",
    "how.title": "The Journey",
    "how.subtitle": "From explorer to local legend in three steps.",
    "how.step1.title": "Download & Explore",
    "how.step1.description": "Find hot spots near you. From cozy cafes in Riyadh to beach resorts in Jeddah.",
    "how.step2.title": "Collect XP",
    "how.step2.description": "Every check-in and interaction earns you Experience Points. Watch your level grow.",
    "how.step3.title": "Redeem & Enjoy",
    "how.step3.description": "Turn your levels into free coffee, discounts, or exclusive access.",
    "audience.explorers.title": "For Explorers",
    "audience.explorers.item1": "Discover hidden gems in your city",
    "audience.explorers.item2": "Socialize and compete with friends",
    "audience.explorers.item3": "Earn rewards for doing what you love",
    "audience.explorers.cta": "Start your journey",
    "audience.business.title": "For Businesses",
    "audience.business.item1": "Drive real foot traffic, not just clicks",
    "audience.business.item2": "Build loyal communities",
    "audience.business.item3": "Gamify your customer experience",
    "audience.business.cta": "Partner with us",
    "trust.title": "Built with Integrity",
    "trust.privacy.title": "Privacy First",
    "trust.privacy.description": "Your location data is yours. We only use check-ins you actively choose to share.",
    "trust.community.title": "Community Driven",
    "trust.community.description": "Designed to bring people together in the real world, not keep them scrolling.",
    "trust.saudi.title": "Proudly Saudi",
    "trust.saudi.description": "Built in KSA, for KSA. We understand the local culture and hospitality.",
    "cta.title": "Ready to start earning?",
    "cta.description": "Be the first to know when we launch in your city. Early access members get a",
    "cta.boost": "Level 5 Boost",
    "cta.dayOne": "on day one.",
    "footer.copyright": "All rights reserved. Built with love in Riyadh.",
    "form.forYou": "For You",
    "form.forBusiness": "For Business",
    "form.emailPlaceholder": "Enter your email...",
    "form.businessEmailPlaceholder": "Business email...",
    "form.joinWaitlist": "Join Waitlist",
    "form.success.title": "Welcome to Saayr!",
    "form.success.description": "We've saved your spot. Get ready to start earning.",
    "phone.greeting": "Hello, Sara!",
    "phone.level": "Level 5 Explorer",
    "phone.xp": "+500 XP",
    "phone.levelUp": "Level Up!",
    "phone.checkedIn": "Checked In",
    "phone.location": "At The Coffee Club",
  },
  ar: {
    "nav.about": "عن سيّر",
    "nav.howItWorks": "كيف يعمل",
    "nav.forBusiness": "للشركات",
    "nav.joinWaitlist": "انضم للقائمة",
    "hero.badge": "بنبدا بالرياض",
    "hero.headline1": "سيّر علينا",
    "hero.headline2": "وجمع مكافآت",
    "hero.description": "حوّل زياراتك ولحظاتك الحقيقية إلى نقاط خبرة ومستويات ومكافآت.",
    "hero.earlyExplorers": "انضم إلى +2,000 مستكشف",
    "hero.noSpam": "",
    "what.label": "فلسفتنا",
    "what.title": "أكثر من مجرد \"نقاط\"",
    "what.description": "\"سيّر\" ليس مجرد اسم تطبيق. إنه دعوة. يعني \"تعال عندنا\" أو مر علينا. نؤمن أن حضورك مهم. نبني عالماً يصنع حضورك فيه قيمة—لك، ولأماكنك المفضلة، ولمجتمعك.",
    "what.showUp.title": "مر علينا",
    "what.showUp.description": "سجل حضورك في الأماكن المحلية والفعاليات والجواهر المخفية في السعودية.",
    "what.engage.title": "تفاعل",
    "what.engage.description": "اترك تقييمات، شارك صوراً، وأكمل التحديات لرفع مستواك.",
    "what.rewarded.title": "احصل على مكافآت",
    "what.rewarded.description": "افتح امتيازات حصرية وهدايا ومكانة VIP في أماكنك المفضلة.",
    "how.title": "الرحلة",
    "how.subtitle": "من مستكشف إلى أسطورة محلية في ثلاث خطوات.",
    "how.step1.title": "حمّل واستكشف",
    "how.step1.description": "اكتشف الأماكن الحماسية قريباً منك. من مقاهي الرياض الدافئة إلى منتجعات جدة الشاطئية.",
    "how.step2.title": "اجمع النقاط",
    "how.step2.description": "كل تسجيل حضور وتفاعل يكسبك نقاط خبرة. شاهد مستواك يرتفع.",
    "how.step3.title": "استبدل واستمتع",
    "how.step3.description": "حوّل مستوياتك إلى قهوة مجانية وخصومات أو دخول حصري.",
    "audience.explorers.title": "للمستكشفين",
    "audience.explorers.item1": "اكتشف الجواهر المخفية في مدينتك",
    "audience.explorers.item2": "تواصل وتنافس مع أصدقائك",
    "audience.explorers.item3": "اكسب مكافآت على ما تحب فعله",
    "audience.explorers.cta": "ابدأ رحلتك",
    "audience.business.title": "للشركات",
    "audience.business.item1": "اجذب زواراً حقيقيين، ليس مجرد نقرات",
    "audience.business.item2": "ابنِ مجتمعات وفية",
    "audience.business.item3": "حوّل تجربة عملائك للعبة",
    "audience.business.cta": "تشارك معنا",
    "trust.title": "بُني بنزاهة",
    "trust.privacy.title": "الخصوصية أولاً",
    "trust.privacy.description": "بيانات موقعك ملكك. نستخدم فقط تسجيلات الحضور التي تختار مشاركتها.",
    "trust.community.title": "مدفوع بالمجتمع",
    "trust.community.description": "صُمم لجمع الناس في العالم الحقيقي، ليس لإبقائهم يتصفحون.",
    "trust.saudi.title": "فخور بأنه سعودي",
    "trust.saudi.description": "بُني في السعودية، للسعودية. نفهم الثقافة والضيافة المحلية.",
    "cta.title": "جاهز تبدأ تكسب؟",
    "cta.description": "كن أول من يعرف عند إطلاقنا في مدينتك. أعضاء الوصول المبكر يحصلون على",
    "cta.boost": "دفعة المستوى 5",
    "cta.dayOne": "من أول يوم.",
    "footer.copyright": "جميع الحقوق محفوظة. بُني بحب في الرياض.",
    "form.forYou": "لك",
    "form.forBusiness": "للشركات",
    "form.emailPlaceholder": "أدخل بريدك الإلكتروني...",
    "form.businessEmailPlaceholder": "البريد الإلكتروني للشركة...",
    "form.joinWaitlist": "انضم للقائمة",
    "form.success.title": "مرحباً بك في سيّر!",
    "form.success.description": "حجزنا مكانك. استعد لبدء الكسب.",
    "phone.greeting": "مرحباً، سارة!",
    "phone.level": "مستكشفة مستوى 5",
    "phone.xp": "+500 نقطة",
    "phone.levelUp": "ارتقيتِ!",
    "phone.checkedIn": "تم التسجيل",
    "phone.location": "في ذا كوفي كلوب",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("saayr-language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("saayr-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
    if (isRTL) {
      document.body.style.fontFamily = "'Almarai', sans-serif";
    } else {
      document.body.style.fontFamily = "'DM Sans', sans-serif";
    }
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
