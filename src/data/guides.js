export const guides = [
  {
    slug: "student",
    icon: "🎓",
    title: "Student Resume",
    tagline: "Stand out with little or no work history",
    whoFor:
      "Current students (especially final-year) applying for internships, part-time roles or campus placements with no full-time experience yet.",
    format:
      "One page, single column, standard font (Calibri, Arial or Times) at 10-11pt. Export as PDF unless the posting asks for .docx. No photos, tables, text boxes or skill-rating bars, because parsers misread them.",
    sections: [
      { name: "Header", note: "Name, email, phone, city, LinkedIn and GitHub or portfolio. One or two lines, no full street address." },
      { name: "Education", note: "Goes first because it is your strongest credential: degree, college, expected graduation month and year, CGPA if it is strong or the form asks." },
      { name: "Projects", note: "2-3 projects with the stack, your role and a result. This replaces work experience." },
      { name: "Internships / Experience", note: "Internships, part-time work, freelance, club or fest roles. Keep only what is relevant to the job." },
      { name: "Skills", note: "Grouped (Languages, Frameworks, Tools) and ordered by relevance to the posting." },
      { name: "Achievements & Certifications", note: "Hackathons, ranks, competitions, verifiable certificates. Two or three lines at most." },
    ],
    mustInclude: [
      "Expected graduation month and year",
      "CGPA or percentage, if it is strong or the application asks for it",
      "2-3 projects, each with stack, your role and a measurable result or scale",
      "Working links: GitHub with pinned repos, LinkedIn, live demos",
      "Skills grouped by category, not one long comma list",
      "Coursework only when it directly matches the job",
    ],
    examples: [
      {
        before: "Made a todo app using React.",
        after: "Built a task manager in React and Firebase with authentication and real-time sync, used daily by 30 classmates for two months.",
      },
      {
        before: "Worked on team project for college fest website.",
        after: "Led a 4-person team to ship the fest website in 3 weeks and built the registration backend (Node.js, MongoDB) that handled 1,200+ sign-ups.",
      },
      {
        before: "Good communication skills.",
        after: "Presented the final-year project to a faculty panel and demoed it to 80+ attendees at the college tech fest.",
      },
    ],
    mistakes: [
      "Objective statements like \"Seeking a challenging position\". Skip them, or write a 2-line summary tied to the target role.",
      "Skill bars, star ratings or percentages. They cannot be parsed and mean nothing to a recruiter.",
      "Project bullets that describe the tutorial instead of what you built and decided.",
      "Padding with school-level subjects, hobbies and \"References available on request\".",
      "Two pages with one page of content. One strong page beats two thin ones.",
    ],
    keywords: [
      "Teamwork", "Leadership", "Research", "Data analysis", "Presentation",
      "Project management", "Problem solving", "Time management", "Microsoft Excel", "Git",
    ],
    checklist: [
      "Fits on one page and exports to PDF",
      "File named FirstName_LastName_Resume.pdf",
      "Every link opens and points to real work",
      "Every bullet starts with an action verb",
      "Numbers added wherever they are true",
      "Skills reordered to match this job's posting",
      "Read aloud once to catch typos",
    ],
  },

  {
    slug: "fresher",
    icon: "🚀",
    title: "Fresher Resume",
    tagline: "Projects and skills over experience",
    whoFor:
      "Recent graduates (0-1 year out) applying for their first full-time role. You have graduated, so the focus shifts from where you study to what you can do.",
    format:
      "One page, single column, plain headings (Skills, Projects, Experience, Education) so parsers can find them. PDF export. Keep the design plain: recruiters scan an entry-level resume in seconds.",
    sections: [
      { name: "Header", note: "Name, email, phone, city, LinkedIn, GitHub or portfolio." },
      { name: "Summary", note: "Two lines: the role you are targeting plus your 2-3 strongest relevant skills. Rewrite it for every application." },
      { name: "Skills", note: "Right under the summary. For entry-level roles, recruiters and ATS filters check skills first. Order them by the job posting." },
      { name: "Projects", note: "2-3 projects with stack, what you built, and the outcome. Add a deployed link wherever possible." },
      { name: "Internships / Experience", note: "Internships and freelance work with outcomes, not duties." },
      { name: "Education", note: "Compact: degree, college, graduation year, CGPA if strong. Add 10th/12th marks only if the application asks." },
      { name: "Certifications", note: "Only relevant and verifiable ones, with the issuer." },
    ],
    mustInclude: [
      "A 2-line summary naming the target role, not a generic objective",
      "Skills ordered by relevance to this specific posting",
      "2-3 projects with deployed links, not only repo links",
      "Internship bullets with outcomes (what changed because of you)",
      "Graduation year, so recruiters know you are available now",
      "Certifications only if they match the role",
    ],
    examples: [
      {
        before: "Hardworking and passionate fresher seeking an opportunity to grow.",
        after: "Full-stack developer (React, Node.js, MongoDB) with 2 deployed projects and a 3-month internship, targeting junior web developer roles.",
      },
      {
        before: "Worked on backend APIs during internship.",
        after: "Built 6 REST endpoints in Express.js for the order module and cut average response time by trimming redundant database queries.",
      },
      {
        before: "Created a weather app.",
        after: "Built and deployed a weather dashboard (React, public weather API) with city search and 5-day forecast; live demo and source linked.",
      },
    ],
    mistakes: [
      "Listing 25 skills. Keep the ones you can defend in an interview, ordered by the job.",
      "\"Hardworking, passionate, quick learner\" summaries. Everyone writes them, so they carry no signal.",
      "Projects with no deployed link or screenshots, which forces the recruiter to take your word.",
      "A long education block (school marks, every semester) that pushes your projects off the page.",
      "Sending one identical resume everywhere instead of re-ordering skills for each posting.",
    ],
    keywords: [
      "Data structures", "Algorithms", "REST API", "SQL", "Git",
      "Problem solving", "Debugging", "Agile", "Unit testing", "Communication",
    ],
    checklist: [
      "Summary rewritten for this job",
      "Top 5 skills match the posting's wording (only ones you truly have)",
      "Each project has a live link or demo",
      "Internship bullets show outcomes",
      "One page, PDF, standard fonts",
      "No spelling or tense mistakes (past roles in past tense)",
      "LinkedIn and GitHub match what the resume says",
    ],
  },

  {
    slug: "career-change",
    icon: "🧭",
    title: "Career Change Resume",
    tagline: "Lead with the skills that transfer",
    whoFor:
      "Professionals with experience in one field moving into another. Your history is real but uses the wrong vocabulary, so the resume has to translate it.",
    format:
      "Combination (hybrid) format: summary and skills at the top, then reverse-chronological experience. One page if you have under 10 years of experience, two at most. Plain headings and PDF export.",
    sections: [
      { name: "Header", note: "Name, contact details, LinkedIn. Make sure your LinkedIn headline already shows the new direction." },
      { name: "Professional summary", note: "3 lines: your target role, your background, and proof you are already moving into the field." },
      { name: "Core skills", note: "Grouped to mirror the target job's requirements, with the transferable skills first." },
      { name: "Relevant projects & certifications", note: "The bridge: courses, certifications, portfolio work, freelance or volunteer work in the new field." },
      { name: "Professional experience", note: "Reverse-chronological, with bullets reframed in the vocabulary of the new field." },
      { name: "Education", note: "Brief. Move it up only if you recently studied for the new field." },
    ],
    mustInclude: [
      "The target job title written in the summary",
      "Transferable skills worded the way the new field's postings word them",
      "At least one bridge item completed in the new field (course, certification, project)",
      "Experience bullets reframed around the shared skills, with results",
      "A short, honest line for any gap in the timeline",
      "Only the last 10-15 years in detail; compress older roles into one line",
    ],
    examples: [
      {
        before: "Experienced professional looking for new opportunities.",
        after: "Operations professional with 6 years in logistics, transitioning to data analysis. Completed a SQL and Python certification and built 3 portfolio projects on supply-chain data.",
      },
      {
        before: "Handled customer complaints in the support team.",
        after: "Triaged 40+ customer escalations weekly and traced recurring issues to root cause, feeding bug reports to the engineering team.",
      },
      {
        before: "Taught mathematics to class 10 students.",
        after: "Analysed exam results for 120 students in Excel to find weak topics and redesigned lessons around them.",
      },
    ],
    mistakes: [
      "Hiding your past career. Reframe it instead; a vague timeline looks like a red flag.",
      "Old-industry jargon that the new field's recruiter and ATS do not recognise.",
      "A summary that says \"seeking a career change\". Name the role you want instead.",
      "No proof of the new field. Without a course, project or certification, the switch reads as a wish.",
      "Listing every duty from every old job. Keep what supports the new direction.",
    ],
    keywords: [
      "Stakeholder management", "Process improvement", "Cross-functional collaboration",
      "Reporting", "Analysis", "Project coordination", "Training", "Problem solving",
    ],
    checklist: [
      "Target job title appears in the summary",
      "Skills section mirrors the posting's wording",
      "At least one bridge item sits above the experience section",
      "Old bullets rewritten with new-field vocabulary and results",
      "Timeline gaps are explained briefly",
      "Resume length matches your experience (1-2 pages)",
      "LinkedIn headline matches the resume",
    ],
  },
    {
    slug: "engineering",
    icon: "⚙️",
    title: "Engineering Resume",
    tagline: "Show what you designed, built and improved, with numbers",
    whoFor:
      "Engineers in core disciplines (mechanical, electrical, electronics, civil) with 0-8 years of experience, applying for design, production, maintenance or site roles.",
    format:
      "Single column, reverse-chronological, PDF export. One page up to about 5 years of experience, two pages beyond that. Plain headings and a standard font so parsers can read every section.",
    sections: [
      { name: "Header", note: "Name, email, phone, city, LinkedIn. Add a portfolio or GitHub link only if it shows real design or project work." },
      { name: "Summary", note: "Two or three lines: your discipline, years of experience, your strongest tools and the kind of role you want." },
      { name: "Technical skills", note: "Group by type (Design software, Analysis, Manufacturing or Site, Standards) and match the posting's exact tool names." },
      { name: "Experience", note: "Reverse-chronological. Each bullet should show what you did, the scale and the result." },
      { name: "Projects", note: "Academic or personal projects with real constraints. Essential for freshers; keep to 1-2 for experienced engineers." },
      { name: "Education", note: "Degree, college, year, CGPA if strong. One or two lines." },
      { name: "Certifications & licences", note: "Six Sigma, PMP, PLC training, safety certificates, professional registration. Only the ones that match the job." },
    ],
    mustInclude: [
      "Your discipline and target role stated in the summary",
      "Software and tools named exactly (SolidWorks, AutoCAD, ANSYS, MATLAB, PLC) with the level you really have",
      "Quantified results: cost saved, time cut, defect rate, yield, tolerance achieved",
      "Scale of the work: budget, team size, units produced or project size",
      "Standards and methods you applied (ISO 9001, GD&T, FMEA, Lean) where relevant",
      "Certifications and licences with the issuer",
    ],
    examples: [
      {
        before: "Responsible for design of components.",
        after: "Designed 14 sheet-metal brackets in SolidWorks to a tolerance of ±0.2 mm, cutting per-unit material cost by 9%.",
      },
      {
        before: "Worked on quality improvement.",
        after: "Led a root-cause analysis (5-Why, Pareto) on a recurring weld defect and reduced rejection from 6% to 2.5% in one quarter.",
      },
      {
        before: "Did site supervision.",
        after: "Supervised a 20-person crew on a 3-storey RCC building and handed it over on schedule with zero lost-time incidents.",
      },
    ],
    mistakes: [
      "Listing duties (\"responsible for...\") instead of results.",
      "A long software list with no indication of how well you use each tool.",
      "Leaving out scale. \"Designed a part\" says little; \"designed 14 parts for a 5,000-unit run\" says a lot.",
      "Generic claims like \"team player\" instead of showing a project you delivered with a team.",
      "Mid-career resumes that still give half a page to college projects.",
    ],
    keywords: [
      "CAD", "SolidWorks", "AutoCAD", "FEA", "GD&T", "Root cause analysis",
      "Lean manufacturing", "Six Sigma", "PLC", "ISO 9001", "Project management", "MATLAB",
    ],
    checklist: [
      "Discipline and target role appear in the summary",
      "Tool names match the job posting's wording",
      "Every experience bullet has a number or a clear outcome",
      "Standards and certifications are listed with issuers",
      "Length fits your experience (1-2 pages), exported as PDF",
      "File named FirstName_LastName_Resume.pdf",
      "Read aloud once to catch typos",
    ],
  },

  {
    slug: "nursing",
    icon: "🩺",
    title: "Nursing Resume",
    tagline: "Lead with your licence, then show clinical depth",
    whoFor:
      "Registered nurses, GNM and B.Sc nursing graduates, and nursing students applying for hospital, clinic and community health roles.",
    format:
      "Single column, PDF export. One page for new graduates, up to two for experienced nurses. Plain headings, standard font, no photo unless the application asks for one.",
    sections: [
      { name: "Header", note: "Name, phone, email, city. Add your registration number only if the employer asks for it." },
      { name: "Summary", note: "Two lines: your specialty, years of experience and the kind of unit or role you want." },
      { name: "Licence & certifications", note: "Goes near the top because it is a hard requirement: council registration with status, BLS/ACLS and other certificates with dates." },
      { name: "Clinical experience", note: "Reverse-chronological. For each role, name the unit type, bed count and patient load, then your results." },
      { name: "Skills", note: "Clinical skills and systems, grouped (Procedures, Monitoring, Documentation) using the posting's wording." },
      { name: "Education", note: "Degree or diploma, institution, year. New graduates: list clinical placements here or under experience." },
    ],
    mustInclude: [
      "Licence or council registration with its current status",
      "BLS, ACLS or other certificates with issue or expiry dates",
      "Unit type and scale: ICU, ward, 30 beds, patients per shift",
      "Clinical procedures and equipment you handle (IV cannulation, ventilator care, wound care)",
      "EMR or hospital systems you have used",
      "Outcomes where true: errors reduced, staff trained, audits passed",
    ],
    examples: [
      {
        before: "Took care of patients in ICU.",
        after: "Provided bedside care for 4 ventilated patients per shift in a 20-bed medical ICU, monitoring vitals and titrating infusions per physician orders.",
      },
      {
        before: "Helped improve patient safety.",
        after: "Introduced a bedside medication double-check on the ward, helping bring reported medication errors down from 5 to 1 per quarter.",
      },
      {
        before: "Trained new staff.",
        after: "Precepted 6 new graduate nurses through a 4-week orientation covering documentation and shift handover.",
      },
    ],
    mistakes: [
      "Not stating licence status or leaving out certificate dates, which is often the first thing screened.",
      "Listing duties without the unit, bed count or patient load that show your level.",
      "Including any patient information. Keep every example anonymous.",
      "Vague traits like \"caring and compassionate\" instead of evidence.",
      "Skipping the EMR and hospital systems you have used.",
    ],
    keywords: [
      "Patient assessment", "Medication administration", "IV therapy", "Wound care",
      "Infection control", "Electronic health records", "BLS", "ACLS",
      "Patient education", "Triage", "Care planning",
    ],
    checklist: [
      "Licence status and certificate dates are visible",
      "Each role names the unit type and patient load",
      "Bullets show outcomes, not only duties",
      "No patient identifiers anywhere",
      "Skills match the posting's wording (only ones you truly have)",
      "One to two pages, exported as PDF",
      "Read aloud once to catch typos",
    ],
  },
];

export const getGuide = (slug) => guides.find((g) => g.slug === slug);