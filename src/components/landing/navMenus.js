// Content for the landing nav mega menus.
// `soon: true` = feature not built yet (shows a "Soon" badge, not clickable).

export const featureMenu = [
  {
    id: "keyword-scanner",
    icon: "🔍",
    title: "AI Keyword Scanner",
    desc: "See the exact keywords a job posting is scanning for.",
    to: "/match",
  },
  {
    id: "ai-match",
    icon: "🧠",
    title: "AI Match Analysis",
    desc: "Semantic score with strengths and gaps, powered by Gemini.",
    to: "/match",
  },
  {
    id: "resume-parser",
    icon: "📄",
    title: "Resume Parser",
    desc: "Upload a PDF and see exactly what a parser reads.",
    to: "/resume-upload",
  },
  {
    id: "tailored-pdf",
    icon: "✨",
    title: "Tailored Resume PDF",
    desc: "Tailor your resume to a posting in one click.",
    to: "/match",
    soon: true,
  },
  {
    id: "ats-checker",
    icon: "✅",
    title: "ATS Resume Checker",
    desc: "Catch the formatting issues that break resume parsers.",
    to: "/match",
    soon: true,
  },
  {
    id: "bullet-generator",
    icon: "📝",
    title: "AI Bullet Point Generator",
    desc: "Turn missing keywords into achievement bullets.",
    to: "/match",
    soon: true,
  },
];

export const guideMenu = {
  byBackground: [
    {
      id: "student",
      icon: "🎓",
      title: "Student Resume",
      desc: "Stand out with little or no work history",
    },
    {
      id: "career-change",
      icon: "🧭",
      title: "Career Change Resume",
      desc: "Lead with the skills that transfer",
    },
    {
      id: "fresher",
      icon: "🚀",
      title: "Fresher Resume",
      desc: "Projects and skills over experience",
    },
  ],
  more: [
    { id: "engineering", icon: "⚙️", title: "Engineering Resume" },
    { id: "nursing", icon: "🩺", title: "Nursing Resume" },
    { id: "teacher", icon: "🍎", title: "Teacher Resume" },
    { id: "executive", icon: "📈", title: "Executive Resume" },
  ],
};