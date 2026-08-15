import React, { useState, useEffect, useRef } from "react";
import {
  Camera, Mic, Users, Phone, Trophy, Globe, ShieldCheck, Volume2,
  Vibrate, Settings, ChevronRight, Check, AlertTriangle, X, Play,
  Pause, Home as HomeIcon, ScanLine, MessageCircle, User, ArrowLeft,
  Star, Award, Eye, Ear, Smartphone, FileText, Upload, RotateCcw,
  Flag, ThumbsUp, MapPin, Clock, CircleCheck, ChevronLeft, Contrast,
  Type, Send
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Design tokens (professional Indian fintech palette)               */
/* ------------------------------------------------------------------ */
const C = {
  navy: "#0B2545",
  navySoft: "#13345E",
  blue: "#1E5AA8",
  blueSoft: "#E4EDF8",
  teal: "#2A9D8F",
  bg: "#E9EFF5",
  card: "#F5F8FB",
  border: "#D7E0EA",
  text: "#0B2545",
  textMute: "#5A6B7D",
  green: "#1E8E3E",
  greenBg: "#E1F2E4",
  amber: "#B45309",
  amberBg: "#FBEBD3",
  red: "#C22525",
  redBg: "#F8E2E2",
};

/* ------------------------------------------------------------------ */
/*  Language + content data                                           */
/* ------------------------------------------------------------------ */
const LANGUAGES = [
  { code: "hi", native: "हिंदी", label: "Hindi" },
  { code: "en", native: "English", label: "English" },
  { code: "bn", native: "বাংলা", label: "Bengali" },
  { code: "mr", native: "मराठी", label: "Marathi" },
  { code: "ta", native: "தமிழ்", label: "Tamil" },
  { code: "te", native: "తెలుగు", label: "Telugu" },
  { code: "kn", native: "ಕನ್ನಡ", label: "Kannada" },
  { code: "gu", native: "ગુજરાતી", label: "Gujarati" },
  { code: "pa", native: "ਪੰਜਾਬੀ", label: "Punjabi" },
  { code: "bho", native: "भोजपुरी", label: "Bhojpuri" },
  { code: "ur", native: "اردو", label: "Urdu" },
];

const STR = {
  hi: {
    welcomeTitle: "SunoSaathi",
    tagline: "समझो। सुरक्षित रहो। सही फैसला लो।",
    start: "Saathi ke saath shuru karein",
    demo: "Demo User ke roop mein jaari rakhein",
    chooseLang: "Aap SunoSaathi ko kis bhasha mein use karna chahte hain?",
    detect: "Meri bhasha khud pehchaanein",
    saathiGreetHome: "Namaste! Main aapka Saathi hoon. Main aapki madad karne ke liye yahan hoon.",
    scanCard: "Scan Document", scanSub: "Loan ya financial paper check karein",
    askCard: "Ask Saathi", askSub: "Apna sawal bolkar poochhein",
    communityCard: "Community", communitySub: "Logon ke asli experiences sunein",
    mitraCard: "Bank Mitra", mitraSub: "Insaan se madad lein",
    pointsCard: "Mere Saathi Points",
    navHome: "Home", navScan: "Scan", navCommunity: "Community", navSaathi: "Saathi", navProfile: "Profile",
    scanTitle: "Apna financial document scan karein",
    tryScenarios: "Ya ek demo document try karein",
    trySafe: "Safe Loan Try Karein", tryCaution: "Caution Loan Try Karein", tryHigh: "High-Risk Loan Try Karein",
    processing: "Saathi document samajh raha hai...",
    stopTalk: "ROKEIN & BANK MITRA SE BAAT KAREIN",
    whyRisky: "Yeh risky kyun hai?",
    whatAsk: "Mujhe kya poochhna chahiye?",
    understand: "Document samjhein",
    playAudio: "Sunein", replay: "Dobara sunein",
    changeLang: "🌐 भाषा",
    communityTitle: "Verified Voice Experiences",
    recordPrompt: "Apni kahani batao, kisi aur ki madad karo.",
    recordBtn: "Experience Record Karein",
    listen: "Sunein", translate: "Translate", helpful: "Useful", report: "Report",
    originalVoice: "Original Voice",
    verified: "Verified Experience", pending: "Verification ke intezaar mein",
    mitraTitle: "Bank Mitra se madad lein",
    mitraDesc: "Ek Bank Mitra aapko yeh document samajhne mein madad kar sakta hai.",
    mitraRequestBtn: "Abhi Bank Mitra ko bulayein",
    mitraRequested: "Aapka anurodh bhej diya gaya hai. Bank Mitra jald hi sampark karega.",
    accessibility: "Suvidha Settings", highContrast: "High Contrast", largeText: "Bada Text",
    hapticTest: "Vibration Pattern Test Karein",
    profile: "Mera Profile",
    reasonsTitle: "Kya dhyaan dein",
  },
  en: {
    welcomeTitle: "SunoSaathi",
    tagline: "Understand. Stay Safe. Decide Right.",
    start: "Start with Saathi",
    demo: "Continue as Demo User",
    chooseLang: "Which language would you like to use SunoSaathi in?",
    detect: "Detect my language automatically",
    saathiGreetHome: "Hi! I'm Saathi, your companion. I'm here to help you understand your money.",
    scanCard: "Scan Document", scanSub: "Check a loan or financial paper",
    askCard: "Ask Saathi", askSub: "Speak your question out loud",
    communityCard: "Community", communitySub: "Hear real experiences from others",
    mitraCard: "Bank Mitra", mitraSub: "Get help from a real person",
    pointsCard: "My Saathi Points",
    navHome: "Home", navScan: "Scan", navCommunity: "Community", navSaathi: "Saathi", navProfile: "Profile",
    scanTitle: "Scan your financial document",
    tryScenarios: "Or try a demo document",
    trySafe: "Try Safe Loan", tryCaution: "Try Caution Loan", tryHigh: "Try High-Risk Loan",
    processing: "Saathi is reading your document...",
    stopTalk: "STOP & TALK TO BANK MITRA",
    whyRisky: "Why is this risky?",
    whatAsk: "What should I ask?",
    understand: "Understand the document",
    playAudio: "Play", replay: "Replay",
    changeLang: "🌐 Language",
    communityTitle: "Verified Voice Experiences",
    recordPrompt: "Share your story, help someone else decide safely.",
    recordBtn: "Record Experience",
    listen: "Listen", translate: "Translate", helpful: "Helpful", report: "Report",
    originalVoice: "Original Voice",
    verified: "Verified Experience", pending: "Pending Verification",
    mitraTitle: "Talk to a Bank Mitra",
    mitraDesc: "A Bank Mitra can help you understand this document in person, over a call.",
    mitraRequestBtn: "Request Bank Mitra Now",
    mitraRequested: "Your request has been sent. A Bank Mitra will contact you shortly.",
    accessibility: "Accessibility Settings", highContrast: "High Contrast Mode", largeText: "Large Text",
    hapticTest: "Test vibration patterns",
    profile: "My Profile",
    reasonsTitle: "What to check",
  },
};
const getL = (lang) => STR[lang] || STR.en;
const isMockLang = (lang) => lang && lang !== "hi" && lang !== "en";

const DOCS = {
  safe: {
    key: "safe", risk: "green", name_hi: "Personal Loan – SafeBank", name_en: "Personal Loan – SafeBank",
    interest: "11% p.a.", fee: "₹500 (1%)", penalty: "₹100 flat late fee", duration: "24 months",
    reasons_en: [], reasons_hi: [],
    summary_en: "This is a standard personal loan. The interest rate and fees are in a normal range, and the penalty for a late payment is small and fixed. No unusual or hidden conditions were found.",
    summary_hi: "Yeh ek saamaanya personal loan hai. Interest rate aur fees normal range mein hain, aur late payment ki penalty chhoti aur fixed hai. Koi ajeeb ya chhupi hui sharton nahi mili.",
  },
  caution: {
    key: "caution", risk: "amber", name_hi: "Consumer Durable Loan – QuickFin", name_en: "Consumer Durable Loan – QuickFin",
    interest: "16% p.a.", fee: "₹2,500 (5%)", penalty: "₹500 + 2% per month", duration: "12 months",
    reasons_en: ["High processing fee (5% of loan amount)", "Strict 3-day payment deadline each month", "Penalty grows every month it stays unpaid"],
    reasons_hi: ["Zyada processing fee (loan ka 5%)", "Har mahine sirf 3 din ki payment deadline", "Penalty har mahine badhti rehti hai"],
    summary_en: "This document looks legitimate, but it has a few conditions that need your attention: a high processing fee, a very strict payment deadline, and a penalty that increases over time. Ask the Bank Mitra to explain these before you sign.",
    summary_hi: "Yeh document legitimate lagta hai, lekin kuch sharton par dhyaan dena zaroori hai: zyada processing fee, ek sakht payment deadline, aur penalty jo samay ke saath badhti hai. Sign karne se pehle Bank Mitra se in cheezon ke baare mein poochhein.",
  },
  high: {
    key: "high", risk: "red", name_hi: "Instant Cash Loan – RapidCredit", name_en: "Instant Cash Loan – RapidCredit",
    interest: "38% p.a. (compounding monthly)", fee: "₹4,000 hidden as 'service charge'", penalty: "Doubles after 2 missed payments", duration: "6 months",
    reasons_en: ["Extremely high interest rate", "Hidden charges not disclosed upfront", "Compounding penalty clause", "Unusually aggressive repayment terms"],
    reasons_hi: ["Bahut zyada interest rate", "Chhupi hui charges jo pehle nahi bataayi gayi", "Compounding penalty wali shart", "Bahut sakht repayment sharten"],
    summary_en: "This document has several signs of a high-risk loan: an extremely high interest rate, a hidden charge disguised as a 'service fee', and a penalty that doubles quickly if you miss payments. We strongly recommend speaking to a Bank Mitra before signing anything.",
    summary_hi: "Is document mein high-risk loan ke kayi lakshan hain: bahut zyada interest rate, 'service charge' ke naam par chhupi hui fees, aur penalty jo payment miss karne par jaldi double ho jaati hai. Sign karne se pehle Bank Mitra se zaroor baat karein.",
  },
};

const RISK_META = {
  green: { color: C.green, bg: C.greenBg, emoji: "🟢", label_en: "LOW RISK", label_hi: "LOW RISK", face: "😊", haptic: "1 long, smooth vibration", pulses: 1 },
  amber: { color: C.amber, bg: C.amberBg, emoji: "🟡", label_en: "CAUTION", label_hi: "CAUTION", face: "😐", haptic: "2 short pulses", pulses: 2 },
  red: { color: C.red, bg: C.redBg, emoji: "🔴", label_en: "HIGH RISK", label_hi: "HIGH RISK", face: "😟", haptic: "3 sharp pulses", pulses: 3 },
};

const COMMUNITY = [
  { id: 1, name: "Ravi K.", region: "Kanpur", spokenLang: "Hindi", verified: true, product: "Personal Loan", helpful: 34,
    original_hi: "Maine is loan mein processing fee pehle nahi dekhi thi, EMI shuru hone ke baad pata chala.",
    en: "I didn't notice the processing fee on this loan until after my EMIs had already started.",
    bn: "আমি এই ঋণের প্রসেসিং ফি আগে লক্ষ্য করিনি, EMI শুরু হওয়ার পরে বুঝেছি।" },
  { id: 2, name: "Sunita D.", region: "Lucknow", spokenLang: "Bhojpuri", verified: true, product: "Consumer Durable Loan", helpful: 51,
    original_hi: "Bank Mitra se poochhe bina sign kar diya, baad mein penalty ka pata chala jo bahut zyada thi.",
    en: "I signed without asking the Bank Mitra, and later found out the penalty was much higher than I expected.",
    bn: "ব্যাংক মিত্রকে না জিজ্ঞেস করে সই করেছিলাম, পরে বুঝলাম পেনাল্টি অনেক বেশি ছিল।" },
  { id: 3, name: "Anonymous — Kanpur", region: "Kanpur", spokenLang: "Tamil", verified: true, product: "Instant Cash Loan", helpful: 88,
    original_hi: "Yeh loan lena mushkil raha, interest rate itna zyada tha ki EMI kabhi khatam hi nahi hui.",
    en: "This loan was hard to manage — the interest rate was so high that the EMIs never seemed to end.",
    bn: "এই ঋণ পরিশোধ করা কঠিন ছিল, সুদের হার এত বেশি ছিল যে EMI শেষই হচ্ছিল না।" },
  { id: 4, name: "Meena P.", region: "Varanasi", spokenLang: "Marathi", verified: false, product: "Personal Loan", helpful: 12,
    original_hi: "Mera experience theek raha, lekin main Bank Mitra se doosri baar zaroor poochhungi.",
    en: "My experience was okay overall, but next time I'll definitely check with a Bank Mitra first.",
    bn: "আমার অভিজ্ঞতা মোটামুটি ভালো ছিল, তবে পরের বার অবশ্যই ব্যাংক মিত্রের কাছে জিজ্ঞেস করব।" },
  { id: 5, name: "Verified Contributor — Kanpur", region: "Kanpur", spokenLang: "Telugu", verified: true, product: "Consumer Durable Loan", helpful: 27,
    original_hi: "Community mein sunkar mujhe pata chala ki late fee kitni badh sakti hai, isliye maine time par payment ki.",
    en: "Hearing this in the community made me realise how much a late fee can grow, so I made sure to pay on time.",
    bn: "কমিউনিটিতে শুনে বুঝলাম দেরি ফি কতটা বাড়তে পারে, তাই সময়মতো টাকা দিয়েছিলাম।" },
  { id: 6, name: "Arjun S.", region: "Prayagraj", spokenLang: "Punjabi", verified: true, product: "Instant Cash Loan", helpful: 63,
    original_hi: "Main Bank Mitra se mila to unhone mujhe safer option dikhaya, main bahut khush hoon.",
    en: "When I met the Bank Mitra, they showed me a safer option — I'm really glad I asked.",
    bn: "ব্যাংক মিত্রের সাথে দেখা করে উনি আমাকে একটা নিরাপদ বিকল্প দেখালেন, আমি সত্যিই খুশি।" },
];

const CONTRIBUTOR = {
  name: "Ravi K.", shared: 12, verifiedCount: 8, pendingCount: 2, reviewCount: 2, points: 420,
  badges: ["🎙️ Voice Contributor", "🛡️ Verified Contributor", "🌟 Community Helper"],
};

/* Mitra Saathi — the real human Bank Mitra assigned to help.
   Shown with name, ID and languages so the user knows exactly who
   they're trusting, not an anonymous "support" button. */
const MITRA = {
  name: "Suman Yadav",
  id: "BM-2291",
  branch: "Kanpur Nagar Branch",
  experience: "6 years",
  languages_en: ["Hindi", "Bhojpuri", "English"],
  languages_hi: ["Hindi", "Bhojpuri", "English"],
  rating: 4.8,
  calls: 1240,
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                             */
/* ------------------------------------------------------------------ */
function TopBar({ title, onBack, right }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: C.border, background: C.card }}>
      <div className="flex items-center gap-2 min-w-0">
        {onBack && (
          <button onClick={onBack} className="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100" aria-label="Back">
            <ArrowLeft size={20} color={C.navy} />
          </button>
        )}
        <h1 className="font-semibold truncate" style={{ color: C.navy, fontSize: "1.05rem" }}>{title}</h1>
      </div>
      {right}
    </div>
  );
}

function BottomNav({ screen, setScreen, L }) {
  const items = [
    { key: "home", icon: HomeIcon, label: L.navHome },
    { key: "scan", icon: ScanLine, label: L.navScan },
    { key: "community", icon: Users, label: L.navCommunity },
    { key: "saathi", icon: MessageCircle, label: L.navSaathi },
    { key: "profile", icon: User, label: L.navProfile },
  ];
  return (
    <div className="grid grid-cols-5 border-t" style={{ borderColor: C.border, background: C.card }}>
      {items.map((it) => {
        const active = screen === it.key;
        return (
          <button
            key={it.key}
            onClick={() => setScreen(it.key)}
            className="flex flex-col items-center justify-center gap-1 py-2.5"
          >
            <it.icon size={20} color={active ? C.blue : C.textMute} strokeWidth={active ? 2.4 : 2} />
            <span className="text-[11px]" style={{ color: active ? C.blue : C.textMute, fontWeight: active ? 600 : 500 }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* Illustrated 2D companion — friendly, human, not a robot/emoji.
   variant: "saathi" (AI companion, blue) | "mitra" (human Bank Mitra, teal)
   | "contributor" (anonymized community voice, warm neutral) */
function PersonAvatar({ variant = "saathi", risk, size = 64, talking = false }) {
  const [mouthOpen, setMouthOpen] = useState(false);
  useEffect(() => {
    if (!talking) { setMouthOpen(false); return; }
    const id = setInterval(() => setMouthOpen((o) => !o), 220);
    return () => clearInterval(id);
  }, [talking]);

  const ringByVariant = { saathi: C.blue, mitra: C.teal, contributor: "#8A6D3B" };
  const hairByVariant = { saathi: "#3B2E22", mitra: "#241B14", contributor: "#4A3728" };
  const ring = risk ? RISK_META[risk].color : ringByVariant[variant];
  const skin = "#EFC094";
  const hair = hairByVariant[variant];

  let mouthPath;
  if (mouthOpen) {
    mouthPath = "M38,68 Q50,80 62,68 Q50,74 38,68 Z";
  } else if (risk === "red") {
    mouthPath = "M36,72 Q50,62 64,72";
  } else if (risk === "amber") {
    mouthPath = "M36,69 Q50,69 64,69";
  } else {
    mouthPath = "M36,64 Q50,76 64,64";
  }

  return (
    <div
      className="rounded-full relative shrink-0 overflow-hidden"
      style={{ width: size, height: size, border: `2.5px solid ${ring}`, background: "#FBEFE0" }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="58" r="40" fill={skin} />
        <path d="M11,50 C11,20 89,20 89,50 C82,34 65,28 50,28 C35,28 18,34 11,50 Z" fill={hair} />
        {variant === "mitra" && <rect x="8" y="46" width="10" height="14" rx="4" fill={hair} />}
        {variant === "mitra" && <rect x="82" y="46" width="10" height="14" rx="4" fill={hair} />}
        <ellipse cx="34" cy="58" rx="3.6" ry="4.6" fill="#28211B" />
        <ellipse cx="66" cy="58" rx="3.6" ry="4.6" fill="#28211B" />
        <path d="M27,48 q7,-5 14,0" stroke="#28211B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M59,48 q7,-5 14,0" stroke="#28211B" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d={mouthPath} stroke="#8A4A36" strokeWidth="3" fill={mouthOpen ? "#8A4A36" : "none"} strokeLinecap="round" />
        <circle cx="24" cy="66" r="5" fill="#E8996B" opacity="0.35" />
        <circle cx="76" cy="66" r="5" fill="#E8996B" opacity="0.35" />
      </svg>
      {talking && (
        <span
          className="absolute -bottom-1 -right-1 rounded-full flex items-center justify-center"
          style={{ width: size * 0.32, height: size * 0.32, background: ringByVariant[variant] }}
        >
          <Volume2 size={size * 0.18} color="#fff" />
        </span>
      )}
      {variant === "mitra" && !talking && (
        <span
          className="absolute -bottom-0.5 -right-0.5 rounded-full flex items-center justify-center"
          style={{ width: size * 0.3, height: size * 0.3, background: C.teal }}
        >
          <ShieldCheck size={size * 0.17} color="#fff" />
        </span>
      )}
    </div>
  );
}
function SaathiFace({ risk, size = 64, talking }) {
  return <PersonAvatar variant="saathi" risk={risk} size={size} talking={talking} />;
}

function Badge({ children, color, bg }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ color, background: bg }}
    >
      {children}
    </span>
  );
}

function PrimaryButton({ children, onClick, color = C.blue, style, ...rest }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 active:scale-[0.99] transition"
      style={{ background: color, fontSize: "1rem", ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}

function Card({ children, onClick, style }) {
  return (
    <div
      onClick={onClick}
      className="rounded-2xl border p-4"
      style={{ borderColor: C.border, background: C.card, boxShadow: "0 1px 2px rgba(11,37,69,0.04)", cursor: onClick ? "pointer" : "default", ...style }}
    >
      {children}
    </div>
  );
}

function HapticViz({ risk, active }) {
  const meta = RISK_META[risk];
  const n = meta.pulses;
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: n }).map((_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: 14, height: 14, background: meta.color,
            opacity: active ? 1 : 0.35,
            animation: active ? `pulse${i} 1.1s ease-in-out infinite` : "none",
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes pulse0 { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }
        @keyframes pulse1 { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }
        @keyframes pulse2 { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main app                                                          */
/* ------------------------------------------------------------------ */
export default function SunoSaathi() {
  const [screen, setScreen] = useState("welcome");
  const [prevScreen, setPrevScreen] = useState("welcome");
  const [lang, setLang] = useState(null);
  const [points, setPoints] = useState(180);
  const [access, setAccess] = useState({ highContrast: false, largeText: false });
  const [docKey, setDocKey] = useState(null);
  const [processStep, setProcessStep] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [hapticActive, setHapticActive] = useState(false);
  const [mitraSent, setMitraSent] = useState(false);
  const [recordStage, setRecordStage] = useState("idle"); // idle | recording | converting | done
  const [chat, setChat] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [translateOn, setTranslateOn] = useState(true);
  const [toast, setToast] = useState(null);
  const audioTimer = useRef(null);

  const L = getL(lang || "en");
  const mock = isMockLang(lang);

  function go(next) {
    setPrevScreen(screen);
    setScreen(next);
  }

  function flashToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  }

  function awardPoints(n, msg) {
    setPoints((p) => p + n);
    flashToast(msg || `+${n} Saathi Points`);
  }

  // processing animation
  useEffect(() => {
    if (screen === "processing") {
      setProcessStep(0);
      const id = setInterval(() => {
        setProcessStep((s) => {
          if (s >= 5) {
            clearInterval(id);
            setTimeout(() => go("result"), 500);
            return s;
          }
          return s + 1;
        });
      }, 550);
      return () => clearInterval(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  // haptic + audio simulation when result appears
  useEffect(() => {
    if (screen === "result" && docKey) {
      setHapticActive(true);
      const t = setTimeout(() => setHapticActive(false), 2000);
      if (navigator.vibrate) {
        const doc = DOCS[docKey];
        const pattern =
          doc.risk === "green" ? [400] : doc.risk === "amber" ? [120, 100, 120] : [90, 80, 90, 80, 90];
        try { navigator.vibrate(pattern); } catch (e) {}
      }
      return () => clearTimeout(t);
    }
  }, [screen, docKey]);

  function playAudio(seconds = 4) {
    setAudioPlaying(true);
    clearTimeout(audioTimer.current);
    audioTimer.current = setTimeout(() => setAudioPlaying(false), seconds * 1000);
  }

  function sendChat(preset) {
    const text = preset || chatInput.trim();
    if (!text) return;
    const reply = chatReply(text, lang);
    setChat((c) => [...c, { from: "user", text }, { from: "saathi", text: reply }]);
    setChatInput("");
  }

  /* ---------------------------- screens ---------------------------- */

  if (screen === "welcome") return <Welcome go={go} />;
  if (screen === "language")
    return <LanguageSelect go={go} lang={lang} setLang={setLang} />;

  // shell with bottom nav for main app screens
  const shellScreens = ["home", "scan", "community", "saathi", "profile"];
  const inShell = shellScreens.includes(screen);

  return (
    <div
      className="w-full mx-auto flex flex-col"
      style={{
        maxWidth: 430, minHeight: 640, height: "100%", background: access.highContrast ? "#000" : C.bg,
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        fontSize: access.largeText ? "1.12em" : "1em",
        color: access.highContrast ? "#FFDE59" : C.text,
      }}
    >
      {toast && (
        <div
          className="fixed left-1/2 -translate-x-1/2 top-4 z-50 px-4 py-2.5 rounded-xl text-white text-sm font-semibold shadow-lg"
          style={{ background: C.navy }}
        >
          {toast}
        </div>
      )}

      <div className="flex-1 overflow-y-auto pb-2">
        {screen === "home" && (
          <Home L={L} go={go} points={points} lang={lang} access={access} mock={mock} />
        )}
        {screen === "scan" && (
          <Scan L={L} go={go} setDocKey={setDocKey} />
        )}
        {screen === "processing" && <Processing L={L} step={processStep} docKey={docKey} />}
        {screen === "result" && docKey && (
          <Result
            L={L} lang={lang} go={go} doc={DOCS[docKey]} hapticActive={hapticActive}
            audioPlaying={audioPlaying} playAudio={playAudio} awardPoints={awardPoints}
          />
        )}
        {screen === "community" && (
          <Community
            L={L} lang={lang} mock={mock} translateOn={translateOn} setTranslateOn={setTranslateOn}
            go={go} setRecordStage={setRecordStage} recordStage={recordStage} awardPoints={awardPoints}
          />
        )}
        {screen === "saathi" && (
          <SaathiChat L={L} lang={lang} chat={chat} setChat={setChat} chatInput={chatInput}
            setChatInput={setChatInput} sendChat={sendChat} docKey={docKey} />
        )}
        {screen === "mitra" && (
          <BankMitra L={L} lang={lang} docKey={docKey} go={go} mitraSent={mitraSent} setMitraSent={setMitraSent} />
        )}
        {screen === "mitraDashboard" && <BankMitraDashboard L={L} go={go} />}
        {screen === "accessibility" && (
          <Accessibility L={L} access={access} setAccess={setAccess} go={go} />
        )}
        {screen === "profile" && (
          <Profile L={L} lang={lang} points={points} go={go} setLang={setLang} />
        )}
        {screen === "pitch" && <Pitch L={L} go={go} />}
      </div>

      {inShell && <BottomNav screen={screen} setScreen={go} L={L} />}
    </div>
  );
}

/* Simple canned chat reply generator */
function chatReply(text, lang) {
  const L = getL(lang || "en");
  const t = text.toLowerCase();
  if (t.includes("safe") || t.includes("surakshit") || t.includes("risky") || t.includes("risk")) {
    return lang === "hi"
      ? "Main is document ko check karta hoon. Aapko important fees aur penalties simple bhasha mein bataunga. Scan karke shuru karein."
      : "I'll check the document for you. I'll explain the key fees and penalties in simple language — let's start by scanning it.";
  }
  if (t.includes("mitra") || t.includes("help") || t.includes("madad")) {
    return lang === "hi"
      ? "Bilkul, main aapko ek Bank Mitra se jodh sakta hoon jo insaan ke roop mein madad karega."
      : "Sure, I can connect you with a Bank Mitra who can help you in person.";
  }
  return lang === "hi"
    ? "Samjha. Aap chahen to apna financial document scan karein, main usse aasan bhasha mein samjhaunga."
    : "Got it. Whenever you're ready, scan your financial document and I'll explain it in simple language.";
}

/* ------------------------------------------------------------------ */
/*  Welcome                                                            */
/* ------------------------------------------------------------------ */
function Welcome({ go }) {
  return (
    <div
      className="w-full mx-auto flex flex-col items-center justify-center text-center px-8"
      style={{ maxWidth: 430, minHeight: 640, height: "100%", background: `linear-gradient(180deg, ${C.navy} 0%, ${C.navySoft} 55%, ${C.blue} 100%)`, color: "#fff" }}
    >
      <div className="flex-1" />
      <SaathiFace size={92} />
      <h1 className="mt-6 text-3xl font-bold tracking-tight">SunoSaathi</h1>
      <p className="mt-3 text-base opacity-90">समझो। सुरक्षित रहो। सही फैसला लो।</p>
      <p className="mt-1 text-sm opacity-70">Understand. Stay Safe. Decide Right.</p>
      <div className="flex-1" />
      <div className="w-full pb-10 flex flex-col gap-3">
        <PrimaryButton onClick={() => go("language")} color="#fff" style={{ color: C.navy }}>
          Start with Saathi <ChevronRight size={18} />
        </PrimaryButton>
        <button
          onClick={() => { go("language"); }}
          className="w-full py-3 rounded-xl font-medium text-white border"
          style={{ borderColor: "rgba(255,255,255,0.4)" }}
        >
          Continue as Demo User
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Language select                                                   */
/* ------------------------------------------------------------------ */
function LanguageSelect({ go, lang, setLang }) {
  const [detecting, setDetecting] = useState(false);
  function pick(code) {
    setLang(code);
    go("home");
  }
  function detect() {
    setDetecting(true);
    setTimeout(() => { setDetecting(false); pick("hi"); }, 900);
  }
  return (
    <div className="w-full mx-auto flex flex-col px-5 py-8" style={{ maxWidth: 430, minHeight: 640, height: "100%", background: C.bg }}>
      <SaathiFace size={56} />
      <h2 className="mt-5 text-xl font-semibold" style={{ color: C.navy }}>
        Aap SunoSaathi ko kis bhasha mein use karna chahte hain?
      </h2>
      <p className="text-sm mt-1" style={{ color: C.textMute }}>Which language would you like to use SunoSaathi in?</p>

      <button
        onClick={detect}
        className="mt-5 w-full py-3 rounded-xl border flex items-center justify-center gap-2 font-medium"
        style={{ borderColor: C.blue, color: C.blue, background: C.blueSoft }}
      >
        <Globe size={18} /> {detecting ? "Detecting…" : "Detect my language automatically"}
      </button>

      <div className="grid grid-cols-2 gap-3 mt-5">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => pick(l.code)}
            className="rounded-xl border py-4 px-3 text-center hover:border-blue-400"
            style={{ borderColor: C.border, background: C.card }}
          >
            <div className="text-lg font-semibold" style={{ color: C.navy }}>{l.native}</div>
            <div className="text-xs mt-0.5" style={{ color: C.textMute }}>{l.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Home                                                               */
/* ------------------------------------------------------------------ */
function Home({ L, go, points, lang, access, mock }) {
  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs" style={{ color: C.textMute }}>SunoSaathi</p>
          <h2 className="text-lg font-bold" style={{ color: C.navy }}>
            {LANGUAGES.find((l) => l.code === lang)?.native || "Home"}
          </h2>
        </div>
        <button onClick={() => go("language")} className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1" style={{ background: C.blueSoft, color: C.blue }}>
          <Globe size={14} /> {L.changeLang}
        </button>
      </div>

      <Card style={{ marginTop: 16, background: C.navy, border: "none" }}>
        <div className="flex items-center gap-3">
          <SaathiFace size={48} talking />
          <p className="text-sm text-white leading-snug">{L.saathiGreetHome}</p>
        </div>
      </Card>

      {mock && (
        <div className="mt-3 text-xs rounded-lg px-3 py-2" style={{ background: C.amberBg, color: C.amber }}>
          🌐 Showing content in English/Hindi as a translation demo for {LANGUAGES.find((l) => l.code === lang)?.label}.
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 mt-4">
        <Card onClick={() => go("scan")}>
          <Camera size={26} color={C.blue} />
          <p className="font-semibold mt-2" style={{ color: C.navy }}>{L.scanCard}</p>
          <p className="text-xs mt-0.5" style={{ color: C.textMute }}>{L.scanSub}</p>
        </Card>
        <Card onClick={() => go("saathi")}>
          <Mic size={26} color={C.teal} />
          <p className="font-semibold mt-2" style={{ color: C.navy }}>{L.askCard}</p>
          <p className="text-xs mt-0.5" style={{ color: C.textMute }}>{L.askSub}</p>
        </Card>
        <Card onClick={() => go("community")}>
          <Users size={26} color={C.blue} />
          <p className="font-semibold mt-2" style={{ color: C.navy }}>{L.communityCard}</p>
          <p className="text-xs mt-0.5" style={{ color: C.textMute }}>{L.communitySub}</p>
        </Card>
        <Card onClick={() => go("mitra")}>
          <Phone size={26} color={C.teal} />
          <p className="font-semibold mt-2" style={{ color: C.navy }}>{L.mitraCard}</p>
          <p className="text-xs mt-0.5" style={{ color: C.textMute }}>{L.mitraSub}</p>
        </Card>
      </div>

      <Card onClick={() => go("profile")} style={{ marginTop: 12 }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy size={22} color={C.amber} />
            <span className="font-semibold" style={{ color: C.navy }}>{L.pointsCard}</span>
          </div>
          <span className="font-bold" style={{ color: C.amber }}>{points}</span>
        </div>
      </Card>

      <button
        onClick={() => go("accessibility")}
        className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border"
        style={{ borderColor: C.border, color: C.textMute }}
      >
        <Settings size={16} /> {L.accessibility}
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Scan                                                               */
/* ------------------------------------------------------------------ */
function Scan({ L, go, setDocKey }) {
  function pick(key) {
    setDocKey(key);
    go("processing");
  }
  return (
    <div className="px-4 pt-5 pb-4">
      <h2 className="text-lg font-bold" style={{ color: C.navy }}>{L.scanTitle}</h2>

      <div
        className="mt-4 rounded-2xl flex flex-col items-center justify-center py-14 border-2 border-dashed"
        style={{ borderColor: C.border, background: C.card }}
      >
        <Camera size={40} color={C.blue} />
        <p className="text-sm mt-3" style={{ color: C.textMute }}>Camera preview</p>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3">
        <button className="py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-1" style={{ background: C.blue }}>
          <Camera size={15} /> Capture
        </button>
        <button className="py-2.5 rounded-xl text-sm font-semibold border flex items-center justify-center gap-1" style={{ borderColor: C.border, color: C.navy }}>
          <Upload size={15} /> Upload
        </button>
        <button className="py-2.5 rounded-xl text-sm font-semibold border flex items-center justify-center gap-1" style={{ borderColor: C.border, color: C.navy }}>
          <RotateCcw size={15} /> Retake
        </button>
      </div>

      <p className="text-xs font-semibold uppercase tracking-wide mt-6 mb-2" style={{ color: C.textMute }}>{L.tryScenarios}</p>
      <div className="flex flex-col gap-2.5">
        <button onClick={() => pick("safe")} className="w-full py-3 rounded-xl font-semibold flex items-center justify-between px-4" style={{ background: C.greenBg, color: C.green }}>
          {L.trySafe} <span>🟢</span>
        </button>
        <button onClick={() => pick("caution")} className="w-full py-3 rounded-xl font-semibold flex items-center justify-between px-4" style={{ background: C.amberBg, color: C.amber }}>
          {L.tryCaution} <span>🟡</span>
        </button>
        <button onClick={() => pick("high")} className="w-full py-3 rounded-xl font-semibold flex items-center justify-between px-4" style={{ background: C.redBg, color: C.red }}>
          {L.tryHigh} <span>🔴</span>
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Processing                                                         */
/* ------------------------------------------------------------------ */
function Processing({ L, step, docKey }) {
  const stages = [
    "Reading document",
    "Finding interest rate",
    "Checking processing fees",
    "Checking penalties",
    "Checking repayment terms",
    "Checking suspicious clauses",
  ];
  return (
    <div className="px-6 pt-16 flex flex-col items-center text-center">
      <SaathiFace size={72} talking />
      <p className="mt-5 font-semibold" style={{ color: C.navy }}>{L.processing}</p>
      <div className="w-full mt-8 flex flex-col gap-3">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-3 text-left">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: i < step ? C.greenBg : C.border }}
            >
              {i < step && <Check size={14} color={C.green} />}
            </div>
            <span className="text-sm" style={{ color: i < step ? C.navy : C.textMute, fontWeight: i < step ? 600 : 400 }}>
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Result                                                             */
/* ------------------------------------------------------------------ */
function Result({ L, lang, go, doc, hapticActive, audioPlaying, playAudio, awardPoints }) {
  const meta = RISK_META[doc.risk];
  const hi = lang === "hi";
  const reasons = hi ? doc.reasons_hi : doc.reasons_en;
  const summary = hi ? doc.summary_hi : doc.summary_en;
  const name = hi ? doc.name_hi : doc.name_en;

  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center gap-3">
        <SaathiFace risk={doc.risk} size={56} talking={audioPlaying} />
        <div>
          <p className="text-xs" style={{ color: C.textMute }}>{name}</p>
          <p className="text-sm font-medium" style={{ color: C.navy }}>Saathi Risk Assessment</p>
        </div>
      </div>

      <div className="rounded-2xl mt-4 p-5 text-center" style={{ background: meta.bg }}>
        <div style={{ fontSize: 40 }}>{meta.emoji}</div>
        <p className="font-bold text-lg mt-1" style={{ color: meta.color }}>
          {hi ? meta.label_hi : meta.label_en}
        </p>
        <p className="text-sm mt-2" style={{ color: C.text }}>
          {doc.risk === "green"
            ? (hi ? "Bade risk sanket nahi mile." : "Major risk indicators were not detected.")
            : doc.risk === "amber"
            ? (hi ? "Kuch zaroori sharton par dhyaan dein." : "Important conditions need your attention.")
            : (hi ? "Sambhavit roop se haanikarak financial sharten mili hain." : "Potentially harmful financial conditions detected.")}
        </p>
      </div>

      {/* Tri-sensory */}
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="rounded-xl border p-3 text-center" style={{ borderColor: C.border }}>
          <Eye size={18} color={C.blue} className="mx-auto" />
          <p className="text-[11px] mt-1 font-semibold" style={{ color: C.navy }}>SEE</p>
        </div>
        <div className="rounded-xl border p-3 text-center" style={{ borderColor: C.border }}>
          <Ear size={18} color={C.blue} className="mx-auto" />
          <p className="text-[11px] mt-1 font-semibold" style={{ color: C.navy }}>HEAR</p>
        </div>
        <div className="rounded-xl border p-3 text-center flex flex-col items-center" style={{ borderColor: C.border }}>
          <Vibrate size={18} color={C.blue} />
          <p className="text-[11px] mt-1 font-semibold" style={{ color: C.navy }}>FEEL</p>
          <div className="mt-1"><HapticViz risk={doc.risk} active={hapticActive} /></div>
        </div>
      </div>

      {/* details */}
      <Card style={{ marginTop: 16 }}>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><p style={{ color: C.textMute }}>Interest</p><p className="font-semibold" style={{ color: C.navy }}>{doc.interest}</p></div>
          <div><p style={{ color: C.textMute }}>Processing fee</p><p className="font-semibold" style={{ color: C.navy }}>{doc.fee}</p></div>
          <div><p style={{ color: C.textMute }}>Late penalty</p><p className="font-semibold" style={{ color: C.navy }}>{doc.penalty}</p></div>
          <div><p style={{ color: C.textMute }}>Duration</p><p className="font-semibold" style={{ color: C.navy }}>{doc.duration}</p></div>
        </div>
      </Card>

      {reasons.length > 0 && (
        <Card style={{ marginTop: 12 }}>
          <p className="font-semibold text-sm mb-2" style={{ color: C.navy }}>{L.reasonsTitle}</p>
          <div className="flex flex-col gap-2">
            {reasons.map((r) => (
              <div key={r} className="flex items-start gap-2 text-sm">
                <AlertTriangle size={15} color={meta.color} className="mt-0.5 shrink-0" />
                <span style={{ color: C.text }}>{r}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* audio explanation */}
      <Card style={{ marginTop: 12 }}>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm" style={{ color: C.navy }}>Saathi's explanation</p>
          <button onClick={() => playAudio(5)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: C.blueSoft }}>
            {audioPlaying ? <Pause size={16} color={C.blue} /> : <Play size={16} color={C.blue} />}
          </button>
        </div>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: C.text }}>{summary}</p>
        <div className="flex items-center gap-2 mt-3">
          {audioPlaying && (
            <div className="flex items-end gap-0.5 h-4">
              {[4, 9, 6, 12, 5, 8].map((h, i) => (
                <div key={i} style={{ width: 3, height: h, background: C.teal, borderRadius: 2 }} />
              ))}
            </div>
          )}
          <button onClick={() => playAudio(5)} className="text-xs font-semibold" style={{ color: C.blue }}>{L.replay}</button>
        </div>
      </Card>

      {/* CTA */}
      <div className="mt-5">
        {doc.risk === "red" ? (
          <PrimaryButton color={C.red} onClick={() => go("mitra")}>
            <Phone size={17} /> {L.stopTalk}
          </PrimaryButton>
        ) : doc.risk === "amber" ? (
          <PrimaryButton color={C.amber} onClick={() => go("mitra")}>
            {L.whatAsk}
          </PrimaryButton>
        ) : (
          <PrimaryButton color={C.green} onClick={() => { awardPoints(0); go("home"); }}>
            <Check size={17} /> {L.understand}
          </PrimaryButton>
        )}
        <button onClick={() => go("community")} className="w-full text-sm mt-3 font-medium" style={{ color: C.blue }}>
          {"People who used similar products shared their experience →"}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Community                                                          */
/* ------------------------------------------------------------------ */
function Community({ L, lang, mock, translateOn, setTranslateOn, go, recordStage, setRecordStage, awardPoints }) {
  const targetLabel = LANGUAGES.find((l) => l.code === lang)?.native || "English";
  const hi = lang === "hi";
  const [feed, setFeed] = useState(COMMUNITY);

  function translatedText(exp) {
    if (!translateOn) return null;
    if (lang === "bn") return exp.bn;
    return exp.en; // mock: fall back to English translation for all non-Bengali targets
  }

  function submitExperience() {
    setFeed((f) => [
      {
        id: "you-" + Date.now(),
        name: hi ? "Aap (Anonymous)" : "You (Anonymous)",
        region: "Kanpur", spokenLang: LANGUAGES.find((l) => l.code === lang)?.label || "Hindi",
        verified: false, product: "Personal Loan", helpful: 0,
        original_hi: "Maine abhi apna experience share kiya hai.",
        en: "I just shared my experience.",
        bn: "আমি এইমাত্র আমার অভিজ্ঞতা শেয়ার করেছি।",
      },
      ...f,
    ]);
    setRecordStage("done");
    awardPoints(10, "+10 Saathi Points — experience submitted");
  }

  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold" style={{ color: C.navy }}>{L.communityTitle}</h2>
        <button
          onClick={() => setTranslateOn((v) => !v)}
          className="px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
          style={{ background: translateOn ? C.blueSoft : C.border, color: translateOn ? C.blue : C.textMute }}
        >
          <Globe size={13} /> {L.translate}
        </button>
      </div>

      <Card style={{ marginTop: 12, background: C.blueSoft, border: "none" }}>
        <p className="text-sm" style={{ color: C.navy }}>{L.recordPrompt}</p>
        {recordStage === "idle" && (
          <button
            onClick={() => setRecordStage("recording")}
            className="mt-3 w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
            style={{ background: C.blue }}
          >
            <Mic size={17} /> {L.recordBtn}
          </button>
        )}
        {recordStage === "recording" && (
          <div className="mt-3 flex flex-col items-center py-2">
            <div className="w-14 h-14 rounded-full flex items-center justify-center animate-pulse" style={{ background: C.red }}>
              <Mic size={22} color="#fff" />
            </div>
            <p className="text-xs mt-2" style={{ color: C.textMute }}>{hi ? "Recording ho rahi hai…" : "Recording…"}</p>
            <button
              onClick={() => setRecordStage("converting")}
              className="mt-3 px-5 py-2 rounded-full text-xs font-semibold text-white"
              style={{ background: C.navy }}
            >
              {hi ? "Rokein aur Bhejein" : "Stop & Submit"}
            </button>
          </div>
        )}
        {recordStage === "converting" && (
          <ConvertingToVideo hi={hi} onDone={submitExperience} />
        )}
        {recordStage === "done" && (
          <div className="mt-3 flex items-center gap-2 text-sm" style={{ color: C.amber }}>
            <Clock size={15} /> {L.pending} — awaiting Bank Mitra review
          </div>
        )}
      </Card>

      {mock && (
        <p className="text-xs mt-3" style={{ color: C.textMute }}>
          🌐 Translating experiences into {targetLabel} (mock translation for this prototype).
        </p>
      )}

      <div className="flex flex-col gap-3 mt-4">
        {feed.map((exp) => (
          <CommunityCard key={exp.id} exp={exp} lang={lang} translated={translatedText(exp)} L={L} awardPoints={awardPoints} />
        ))}
      </div>
    </div>
  );
}

/* Converts the raw voice note into a short 2D talking-avatar video.
   Keeps the contributor's identity anonymous while still feeling human. */
function ConvertingToVideo({ hi, onDone }) {
  const [step, setStep] = useState(0);
  const stages = hi
    ? ["Awaaz process ho rahi hai", "Bol translate ho raha hai", "2D avatar video ban raha hai"]
    : ["Processing your voice", "Transcribing speech", "Building 2D avatar video"];
  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => {
        if (s >= stages.length - 1) { clearInterval(id); setTimeout(onDone, 500); return s; }
        return s + 1;
      });
    }, 650);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-3 flex flex-col items-center py-2">
      <PersonAvatar variant="contributor" size={52} talking />
      <p className="text-xs mt-2 font-medium" style={{ color: C.navy }}>
        {hi ? "Aapki awaaz ko chhota video mein badla ja raha hai…" : "Turning your voice note into a short video…"}
      </p>
      <div className="w-full mt-3 flex flex-col gap-1.5">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center gap-2 text-xs">
            <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: i <= step ? C.greenBg : C.border }}>
              {i <= step && <Check size={10} color={C.green} />}
            </div>
            <span style={{ color: i <= step ? C.navy : C.textMute }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommunityCard({ exp, lang, translated, L, awardPoints }) {
  const [playing, setPlaying] = useState(false);
  const [helped, setHelped] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  function play() { setPlaying(true); setTimeout(() => setPlaying(false), 3200); }

  return (
    <Card>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm" style={{ background: C.blueSoft, color: C.blue }}>
            {exp.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: C.navy }}>{exp.name}</p>
            <p className="text-xs" style={{ color: C.textMute }}>{exp.product} · {exp.spokenLang}</p>
          </div>
        </div>
        {exp.verified ? (
          <Badge color={C.green} bg={C.greenBg}><ShieldCheck size={12} /> {L.verified}</Badge>
        ) : (
          <Badge color={C.amber} bg={C.amberBg}><Clock size={12} /> {L.pending}</Badge>
        )}
      </div>

      {/* 2D avatar video — voice note turned into a talking video, identity anonymized */}
      <div className="mt-3 rounded-lg p-3 flex items-center gap-3" style={{ background: C.bg }}>
        <PersonAvatar variant="contributor" size={44} talking={playing} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded" style={{ background: C.blueSoft, color: C.blue }}>🎥 Video</span>
            <span className="text-[11px]" style={{ color: C.textMute }}>{playing ? "Playing…" : "0:18"}</span>
          </div>
          {playing && (
            <div className="flex items-end gap-0.5 h-3 mt-1.5">
              {[3, 7, 5, 9, 4, 6, 8].map((h, i) => (
                <div key={i} style={{ width: 2.5, height: h, background: C.teal, borderRadius: 2 }} />
              ))}
            </div>
          )}
        </div>
        <button onClick={play} className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: C.blueSoft }}>
          {playing ? <Pause size={15} color={C.blue} /> : <Play size={15} color={C.blue} />}
        </button>
      </div>

      <div className="mt-2 rounded-lg p-3" style={{ background: C.bg }}>
        <p className="text-[11px] font-semibold uppercase tracking-wide mb-1" style={{ color: C.textMute }}>
          {showOriginal ? `Original (${exp.spokenLang})` : `Translated`}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: C.text }}>
          {showOriginal ? exp.original_hi : (translated || exp.en)}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-3 text-xs font-semibold">
        <button onClick={play} className="flex items-center gap-1" style={{ color: C.blue }}>
          {playing ? <Pause size={14} /> : <Play size={14} />} {L.listen}
        </button>
        <button onClick={() => setShowOriginal((v) => !v)} className="flex items-center gap-1" style={{ color: C.textMute }}>
          <Globe size={14} /> {L.originalVoice}
        </button>
        <button
          onClick={() => { setHelped(true); awardPoints(5, "+5 Saathi Points — thanks for the feedback"); }}
          className="flex items-center gap-1 ml-auto"
          style={{ color: helped ? C.green : C.textMute }}
        >
          <ThumbsUp size={14} /> {exp.helpful + (helped ? 1 : 0)}
        </button>
        <button className="flex items-center gap-1" style={{ color: C.textMute }}>
          <Flag size={14} />
        </button>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Saathi chat                                                        */
/* ------------------------------------------------------------------ */
function SaathiChat({ L, lang, chat, setChat, chatInput, setChatInput, sendChat, docKey }) {
  const presets = lang === "hi"
    ? ["Ye loan safe hai?", "Bank Mitra se madad chahiye", "Interest rate kya hai?"]
    : ["Is this loan safe?", "I need Bank Mitra's help", "What is the interest rate?"];
  return (
    <div className="px-4 pt-5 pb-2 flex flex-col" style={{ minHeight: 500 }}>
      <div className="flex items-center gap-3">
        <SaathiFace size={44} talking={chat.length > 0} />
        <div>
          <p className="font-semibold" style={{ color: C.navy }}>Saathi</p>
          <p className="text-xs" style={{ color: C.textMute }}>{lang === "hi" ? "Main sun raha hoon…" : "I'm listening…"}</p>
        </div>
      </div>

      <div className="flex-1 mt-4 flex flex-col gap-2 overflow-y-auto" style={{ minHeight: 220 }}>
        {chat.length === 0 && (
          <p className="text-sm text-center mt-8" style={{ color: C.textMute }}>
            {lang === "hi" ? "Apna sawal bolkar ya likh kar poochhein." : "Ask a question by typing or tapping a suggestion below."}
          </p>
        )}
        {chat.map((m, i) => (
          <div key={i} className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm ${m.from === "user" ? "self-end text-white" : "self-start"}`}
            style={{ background: m.from === "user" ? C.blue : C.blueSoft, color: m.from === "user" ? "#fff" : C.text }}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {presets.map((p) => (
          <button key={p} onClick={() => sendChat(p)} className="px-3 py-1.5 rounded-full text-xs font-medium border" style={{ borderColor: C.border, color: C.navy }}>
            {p}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3 mb-2">
        <button className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: C.blueSoft }}>
          <Mic size={18} color={C.blue} />
        </button>
        <input
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendChat()}
          placeholder={lang === "hi" ? "Apna sawal likhein…" : "Type your question…"}
          className="flex-1 rounded-full border px-4 py-2.5 text-sm outline-none"
          style={{ borderColor: C.border }}
        />
        <button onClick={() => sendChat()} className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: C.blue }}>
          <Send size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bank Mitra                                                         */
/* ------------------------------------------------------------------ */
function BankMitra({ L, lang, docKey, go, mitraSent, setMitraSent }) {
  const doc = docKey ? DOCS[docKey] : null;
  const hi = lang === "hi";
  // callStage: idle -> requesting -> connecting -> connected -> ended
  const [callStage, setCallStage] = useState("idle");
  const [seconds, setSeconds] = useState(0);
  const tickRef = useRef(null);

  useEffect(() => {
    if (callStage === "requesting") {
      const t = setTimeout(() => setCallStage("connecting"), 1300);
      return () => clearTimeout(t);
    }
    if (callStage === "connecting") {
      const t = setTimeout(() => { setCallStage("connected"); setMitraSent(true); }, 1600);
      return () => clearTimeout(t);
    }
    if (callStage === "connected") {
      setSeconds(0);
      tickRef.current = setInterval(() => setSeconds((s) => s + 1), 1000);
      return () => clearInterval(tickRef.current);
    }
  }, [callStage, setMitraSent]);

  function requestCall() { setCallStage("requesting"); }
  function endCall() { clearInterval(tickRef.current); setCallStage("ended"); }
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex flex-col items-center text-center py-4">
        <h2 className="text-lg font-bold" style={{ color: C.navy }}>{L.mitraTitle}</h2>
        <p className="text-sm mt-1 max-w-xs" style={{ color: C.textMute }}>{L.mitraDesc}</p>
      </div>

      {/* Mitra Saathi — the real, named human you're being connected to */}
      <Card style={{ borderColor: C.teal }}>
        <div className="flex items-center gap-3">
          <PersonAvatar variant="mitra" size={58} talking={callStage === "connected"} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="font-bold text-sm" style={{ color: C.navy }}>{MITRA.name}</p>
              <Badge color={C.teal} bg={C.blueSoft}><ShieldCheck size={11} /> Verified Bank Mitra</Badge>
            </div>
            <p className="text-xs mt-0.5" style={{ color: C.textMute }}>
              ID {MITRA.id} · {MITRA.branch} · {MITRA.experience} experience
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Star size={12} color={C.amber} fill={C.amber} />
              <span className="text-xs font-semibold" style={{ color: C.navy }}>{MITRA.rating}</span>
              <span className="text-xs" style={{ color: C.textMute }}>· {MITRA.calls}+ calls taken</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {MITRA.languages_en.map((lg) => (
            <span key={lg} className="text-xs px-2 py-1 rounded-full" style={{ background: C.bg, color: C.navy, border: `1px solid ${C.border}` }}>{lg}</span>
          ))}
        </div>
      </Card>

      {doc && (
        <Card style={{ marginTop: 12 }}>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: C.textMute }}>What {MITRA.name.split(" ")[0]} will see</p>
          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex justify-between"><span style={{ color: C.textMute }}>Document</span><span style={{ color: C.navy }}>{doc.name_en}</span></div>
            <div className="flex justify-between"><span style={{ color: C.textMute }}>Risk level</span>
              <Badge color={RISK_META[doc.risk].color} bg={RISK_META[doc.risk].bg}>{RISK_META[doc.risk].emoji} {RISK_META[doc.risk].label_en}</Badge>
            </div>
            <div className="flex justify-between"><span style={{ color: C.textMute }}>Language</span><span style={{ color: C.navy }}>{LANGUAGES.find((l) => l.code === lang)?.label || "English"}</span></div>
            <div className="flex justify-between"><span style={{ color: C.textMute }}>Community experiences</span><span style={{ color: C.navy }}>3 relevant</span></div>
          </div>
        </Card>
      )}

      <div className="mt-5">
        {callStage === "idle" && (
          <PrimaryButton color={C.teal} onClick={requestCall}>
            <Phone size={17} /> {L.mitraRequestBtn}
          </PrimaryButton>
        )}
        {callStage === "requesting" && (
          <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: C.blueSoft }}>
            <div className="w-5 h-5 rounded-full border-2 animate-spin" style={{ borderColor: C.blue, borderTopColor: "transparent" }} />
            <p className="text-sm font-medium" style={{ color: C.navy }}>
              {hi ? `${MITRA.name} ko anurodh bheja ja raha hai…` : `Sending your request to ${MITRA.name}…`}
            </p>
          </div>
        )}
        {callStage === "connecting" && (
          <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: C.blueSoft }}>
            <div className="w-5 h-5 rounded-full border-2 animate-spin" style={{ borderColor: C.teal, borderTopColor: "transparent" }} />
            <p className="text-sm font-medium" style={{ color: C.navy }}>
              {hi ? `${MITRA.name} se connect kiya ja raha hai…` : `Connecting you to ${MITRA.name}…`}
            </p>
          </div>
        )}
        {callStage === "connected" && (
          <div className="rounded-xl p-4" style={{ background: C.greenBg }}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: C.green }} />
              <p className="text-sm font-semibold" style={{ color: C.green }}>
                {hi ? `Call jud gayi hai — ${MITRA.name}` : `Call connected — ${MITRA.name}`}
              </p>
              <span className="ml-auto text-xs font-mono" style={{ color: C.green }}>{mm}:{ss}</span>
            </div>
            <button onClick={endCall} className="mt-3 w-full py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2" style={{ background: C.red }}>
              <Phone size={15} /> {hi ? "Call Khatam Karein" : "End Call"}
            </button>
          </div>
        )}
        {callStage === "ended" && (
          <div className="rounded-xl p-4 flex items-start gap-2" style={{ background: C.greenBg }}>
            <CircleCheck size={18} color={C.green} className="mt-0.5 shrink-0" />
            <p className="text-sm" style={{ color: C.green }}>
              {hi ? `${MITRA.name} ke saath baat ho gayi. Aap dobara kabhi bhi call kar sakte hain.` : `You spoke with ${MITRA.name}. You can request another call anytime.`}
            </p>
          </div>
        )}
      </div>

      <button onClick={() => go("mitraDashboard")} className="w-full text-center text-xs mt-4 font-medium underline" style={{ color: C.textMute }}>
        View Bank Mitra dashboard (staff demo)
      </button>
    </div>
  );
}

function BankMitraDashboard({ L, go }) {
  const cases = [
    { id: 1, user: "Anonymous User", lang: "Hindi", risk: "red", doc: "Personal Loan Agreement", findings: ["High interest", "Processing fee", "Late payment penalty"] },
    { id: 2, user: "Anonymous User", lang: "Tamil", risk: "amber", doc: "Consumer Durable Loan", findings: ["High processing fee", "Strict deadline"] },
    { id: 3, user: "Anonymous User", lang: "Bengali", risk: "green", doc: "Personal Loan Agreement", findings: [] },
  ];
  return (
    <div className="px-4 pt-5 pb-4">
      <TopBar title="Bank Mitra Dashboard" onBack={() => go("mitra")} />
      <p className="text-sm mt-4 font-semibold" style={{ color: C.navy }}>Incoming Assistance Requests</p>
      <div className="flex flex-col gap-3 mt-3">
        {cases.map((c) => {
          const meta = RISK_META[c.risk];
          return (
            <Card key={c.id}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold" style={{ color: C.navy }}>{c.user}</p>
                <Badge color={meta.color} bg={meta.bg}>{meta.emoji} {meta.label_en}</Badge>
              </div>
              <p className="text-xs mt-1" style={{ color: C.textMute }}>{c.doc} · {c.lang}</p>
              {c.findings.length > 0 && (
                <ul className="mt-2 text-xs list-disc pl-4" style={{ color: C.text }}>
                  {c.findings.map((f) => <li key={f}>{f}</li>)}
                </ul>
              )}
              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-2 rounded-lg text-xs font-semibold text-white" style={{ background: C.blue }}>Call User</button>
                <button className="flex-1 py-2 rounded-lg text-xs font-semibold border" style={{ borderColor: C.border, color: C.navy }}>View Document</button>
                <button className="flex-1 py-2 rounded-lg text-xs font-semibold border" style={{ borderColor: C.border, color: C.navy }}>Mark Reviewed</button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Accessibility                                                      */
/* ------------------------------------------------------------------ */
function Accessibility({ L, access, setAccess, go }) {
  const [testRisk, setTestRisk] = useState(null);
  return (
    <div className="px-4 pt-5 pb-4">
      <TopBar title={L.accessibility} onBack={() => go("home")} />
      <div className="mt-4 flex flex-col gap-3">
        <Card>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><Contrast size={18} color={C.blue} /><span className="text-sm font-medium" style={{ color: C.navy }}>{L.highContrast}</span></div>
            <Toggle value={access.highContrast} onChange={(v) => setAccess((a) => ({ ...a, highContrast: v }))} />
          </div>
        </Card>
        <Card>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><Type size={18} color={C.blue} /><span className="text-sm font-medium" style={{ color: C.navy }}>{L.largeText}</span></div>
            <Toggle value={access.largeText} onChange={(v) => setAccess((a) => ({ ...a, largeText: v }))} />
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-2"><Mic size={18} color={C.blue} /><span className="text-sm font-medium" style={{ color: C.navy }}>Voice Navigation</span></div>
          <p className="text-xs" style={{ color: C.textMute }}>“Suno Saathi, scan karo.” · “Community kholo.” · “Mujhe Bank Mitra se baat karni hai.”</p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-3"><Vibrate size={18} color={C.blue} /><span className="text-sm font-medium" style={{ color: C.navy }}>{L.hapticTest}</span></div>
          <div className="flex gap-2">
            {["green", "amber", "red"].map((r) => (
              <button
                key={r}
                onClick={() => { setTestRisk(r); if (navigator.vibrate) { try { navigator.vibrate(r === "green" ? [400] : r === "amber" ? [120,100,120] : [90,80,90,80,90]); } catch(e){} } setTimeout(() => setTestRisk(null), 1400); }}
                className="flex-1 py-2 rounded-lg text-xs font-semibold"
                style={{ background: RISK_META[r].bg, color: RISK_META[r].color }}
              >
                {RISK_META[r].emoji} {r}
              </button>
            ))}
          </div>
          {testRisk && <div className="mt-3"><HapticViz risk={testRisk} active /></div>}
        </Card>
      </div>
    </div>
  );
}

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="w-11 h-6 rounded-full relative transition"
      style={{ background: value ? C.blue : C.border }}
    >
      <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all" style={{ left: value ? 22 : 2 }} />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Profile                                                             */
/* ------------------------------------------------------------------ */
function Profile({ L, lang, points, go, setLang }) {
  return (
    <div className="px-4 pt-5 pb-4">
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold" style={{ background: C.blueSoft, color: C.blue }}>
          RK
        </div>
        <div>
          <p className="font-bold" style={{ color: C.navy }}>{CONTRIBUTOR.name}</p>
          <Badge color={C.green} bg={C.greenBg}><ShieldCheck size={12} /> Verified Voice Contributor</Badge>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <Card><p className="text-xs" style={{ color: C.textMute }}>Shared</p><p className="font-bold text-lg" style={{ color: C.navy }}>{CONTRIBUTOR.shared}</p></Card>
        <Card><p className="text-xs" style={{ color: C.textMute }}>Verified</p><p className="font-bold text-lg" style={{ color: C.green }}>{CONTRIBUTOR.verifiedCount}</p></Card>
        <Card><p className="text-xs" style={{ color: C.textMute }}>Pending</p><p className="font-bold text-lg" style={{ color: C.amber }}>{CONTRIBUTOR.pendingCount}</p></Card>
      </div>

      <Card style={{ marginTop: 12 }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2"><Trophy size={18} color={C.amber} /><span className="font-semibold text-sm" style={{ color: C.navy }}>Saathi Points</span></div>
          <span className="font-bold" style={{ color: C.amber }}>{points}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {CONTRIBUTOR.badges.map((b) => (
            <span key={b} className="text-xs px-2.5 py-1 rounded-full" style={{ background: C.blueSoft, color: C.blue }}>{b}</span>
          ))}
        </div>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <p className="text-sm font-semibold mb-2" style={{ color: C.navy }}>Language</p>
        <button onClick={() => go("language")} className="w-full flex items-center justify-between py-2 text-sm" style={{ color: C.navy }}>
          <span>{LANGUAGES.find((l) => l.code === lang)?.native || "English"}</span>
          <ChevronRight size={16} color={C.textMute} />
        </button>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <button onClick={() => go("accessibility")} className="w-full flex items-center justify-between py-1 text-sm" style={{ color: C.navy }}>
          <span className="flex items-center gap-2"><Settings size={16} /> {L.accessibility}</span>
          <ChevronRight size={16} color={C.textMute} />
        </button>
      </Card>

      <Card style={{ marginTop: 12 }}>
        <p className="text-sm font-semibold mb-2" style={{ color: C.navy }}>Privacy</p>
        <p className="text-xs" style={{ color: C.textMute }}>Delete voice experiences, control anonymity, and manage what's visible to the community from here.</p>
      </Card>

      <button onClick={() => go("pitch")} className="w-full text-center text-xs mt-5 font-medium underline" style={{ color: C.textMute }}>
        View closing / pitch screen
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pitch                                                               */
/* ------------------------------------------------------------------ */
function Pitch({ L, go }) {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center text-center px-8" style={{ maxWidth: 430, minHeight: 640, height: "100%", background: C.navy, color: "#fff" }}>
      <SaathiFace size={72} />
      <h1 className="mt-5 text-2xl font-bold">SunoSaathi</h1>
      <p className="mt-2 text-sm opacity-85">Understand your money. Hear real experiences. Make safer decisions.</p>
      <div className="flex gap-6 mt-8">
        <div className="text-center"><Eye size={26} className="mx-auto" /><p className="text-xs mt-1">SEE</p></div>
        <div className="text-center"><Ear size={26} className="mx-auto" /><p className="text-xs mt-1">HEAR</p></div>
        <div className="text-center"><Vibrate size={26} className="mx-auto" /><p className="text-xs mt-1">FEEL</p></div>
      </div>
      <p className="mt-8 text-sm font-semibold">AI + Community + Human</p>
      <p className="text-xs mt-1 opacity-80">Saathi explains. Community shares. Bank Mitra protects.</p>
      <button onClick={() => go("home")} className="mt-10 px-6 py-3 rounded-xl font-semibold" style={{ background: "#fff", color: C.navy }}>
        Back to app
      </button>
    </div>
  );
}
