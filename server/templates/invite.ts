const APP_STORE_URL = "https://apps.apple.com/us/app/saayr/id6758619817";

export function renderInvitePage(): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>سيّر — دعوة</title>
<meta name="description" content="انضم لمجموعة على سيّر. حمّل التطبيق من App Store.">
<link rel="icon" type="image/png" href="/favicon.png">
<meta property="og:title" content="سيّر">
<meta property="og:description" content="انضم لمجموعة على سيّر">
<meta property="og:image" content="/favicon.png">
<style>
:root{
  --teal:#005854; --teal-deep:#002E2B;
  --falcon:#E8A33D;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html{background:var(--teal-deep)}
body{
  font-family:-apple-system,"SF Arabic",BlinkMacSystemFont,"Segoe UI",Tahoma,sans-serif;
  background:
    radial-gradient(1100px 700px at 85% -10%, rgba(232,163,61,.14), transparent 60%),
    radial-gradient(900px 700px at -10% 110%, rgba(255,255,255,.06), transparent 55%),
    linear-gradient(168deg,#00635E 0%, var(--teal) 42%, var(--teal-deep) 100%);
  min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:52px 20px 32px;color:#fff;position:relative;overflow-x:hidden;text-align:center;
}
.wrap{width:100%;max-width:420px;display:flex;flex-direction:column;align-items:center}

@keyframes rise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.r1{animation:rise .5s ease .05s both}
.r2{animation:rise .5s ease .15s both}
.r3{animation:rise .5s ease .25s both}
@media(prefers-reduced-motion:reduce){.r1,.r2,.r3{animation:none}}

.logo{width:96px;height:96px;border-radius:28px;overflow:hidden;box-shadow:0 16px 40px rgba(0,0,0,.32);margin-bottom:22px}
.logo img{width:100%;height:100%;display:block}

h1{font-size:26px;font-weight:800;margin-bottom:12px}
p.sub{font-size:15px;line-height:1.6;color:rgba(255,255,255,.78);margin-bottom:32px}

.store{
  position:relative;display:flex;align-items:center;gap:11px;justify-content:center;
  background:rgba(0,0,0,.42);border:1px solid rgba(255,255,255,.22);
  border-radius:15px;padding:13px 24px;text-decoration:none;color:#fff;
  min-width:200px;transition:transform .12s, background .12s;
}
.store:active{transform:scale(.96)}
.store:hover{background:rgba(0,0,0,.55)}
.store .st{display:flex;flex-direction:column;font-size:17px;font-weight:800;line-height:1.15;text-align:right}
.store .st small{font-size:11px;font-weight:600;opacity:.75}
[dir="ltr"] .store .st{text-align:left}

.langbtn{
  position:fixed;top:16px;inset-inline-end:18px;z-index:5;
  background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.28);
  color:#fff;font-size:13px;font-weight:800;border-radius:99px;padding:8px 16px;
  cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  font-family:inherit;transition:transform .12s, background .12s;
}
.langbtn:active{transform:scale(.94)}
.langbtn:hover{background:rgba(255,255,255,.2)}

.foot{margin-top:40px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.6}
.foot b{color:rgba(255,255,255,.78)}
</style>
</head>
<body>

<button class="langbtn" id="langBtn" onclick="switchLang()">EN</button>

<div class="wrap">
  <div class="logo r1"><img src="/favicon.png" alt="سيّر"></div>
  <h1 class="r2" id="h1">انضم لمجموعة على سيّر</h1>
  <p class="sub r3" id="sub">افتح هذا الرابط من جوالك للانضمام مباشرة من التطبيق، أو حمّله الحين.</p>

  <a class="store r3" href="${APP_STORE_URL}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M16.365 12.44c.03 3.2 2.81 4.27 2.84 4.28-.02.08-.44 1.52-1.46 3-.88 1.28-1.8 2.55-3.24 2.58-1.42.03-1.88-.84-3.5-.84-1.63 0-2.14.81-3.48.87-1.4.05-2.46-1.38-3.35-2.65-1.82-2.63-3.2-7.44-1.34-10.68.93-1.61 2.58-2.63 4.38-2.66 1.37-.03 2.66.92 3.5.92.83 0 2.4-1.14 4.05-.97.69.03 2.63.28 3.87 2.1-.1.06-2.31 1.35-2.27 4.05zM13.6 4.5c.74-.9 1.24-2.14 1.1-3.38-1.07.04-2.36.71-3.12 1.6-.69.8-1.29 2.07-1.13 3.29 1.19.09 2.41-.6 3.15-1.51z"/></svg>
    <span class="st" id="st1"><small>حمّله من</small>App Store</span>
  </a>

  <p class="foot" id="foot"><b>سيّر</b> · صنع بحب في الرياض 🇸🇦<br>saayr.sa</p>
</div>

<script>
var L = {
  ar: {
    h1: "انضم لمجموعة على سيّر",
    sub: "افتح هذا الرابط من جوالك للانضمام مباشرة من التطبيق، أو حمّله الحين.",
    st1: "<small>حمّله من</small>App Store",
    foot: "<b>سيّر</b> · صنع بحب في الرياض 🇸🇦<br>saayr.sa",
    btn: "EN", dir: "rtl", lang: "ar"
  },
  en: {
    h1: "Join a group on SAAYR",
    sub: "Open this link on your phone to join straight from the app, or download it now.",
    st1: "<small>Download on the</small>App Store",
    foot: "<b>Saayr</b> · Made with love in Riyadh 🇸🇦<br>saayr.sa",
    btn: "عربي", dir: "ltr", lang: "en"
  }
};
var cur = "ar";
function switchLang(){
  cur = (cur === "ar") ? "en" : "ar";
  var t = L[cur];
  document.documentElement.setAttribute("dir", t.dir);
  document.documentElement.setAttribute("lang", t.lang);
  ["h1","sub","st1","foot"].forEach(function(id){
    document.getElementById(id).innerHTML = t[id];
  });
  document.getElementById("langBtn").textContent = t.btn;
}
</script>
</body>
</html>`;
}
