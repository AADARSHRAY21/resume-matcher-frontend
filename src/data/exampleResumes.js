// Sample resumes shown on guide pages. Keys = guide slugs.
// All people and numbers are fictional.

export const exampleResumes = {
  student: {
    name: "Riya Sharma",
    contact: [
      "Pune, India",
      "riya.sharma@example.com",
      "+91 98765 43210",
      "linkedin.com/in/riya-sharma-example",
      "github.com/riya-example",
    ],
    sections: [
      {
        type: "entries",
        title: "Education",
        items: [
          {
            heading: "B.Tech, Computer Science & Engineering",
            sub: "Sample Institute of Technology",
            period: "2022 – 2026",
            bullets: [
              "CGPA: 8.4/10",
              "Coursework: Data Structures, DBMS, Operating Systems, Computer Networks",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Projects",
        items: [
          {
            heading: "Campus Event Manager",
            sub: "React, Node.js, MongoDB",
            period: "2025",
            bullets: [
              "Built a full-stack app where clubs publish events and students register; adopted by 3 campus clubs.",
              "Added JWT login and role-based access for admins and students.",
            ],
          },
          {
            heading: "Expense Tracker API",
            sub: "Java, Spring Boot, PostgreSQL",
            period: "2024",
            bullets: [
              "Designed 8 REST endpoints with validation and pagination.",
              "Wrote JUnit tests covering the core service layer.",
            ],
          },
        ],
      },
      {
        type: "skills",
        title: "Skills",
        groups: [
          { label: "Languages", items: ["Java", "JavaScript", "Python", "SQL"] },
          { label: "Web", items: ["React", "Node.js", "Express", "REST APIs"] },
          { label: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
        ],
      },
      {
        type: "entries",
        title: "Experience & Activities",
        items: [
          {
            heading: "Technical Lead",
            sub: "Coding Club",
            period: "2024 – 2025",
            bullets: [
              "Organized 4 DSA workshops with 60+ attendees.",
              "Mentored 10 first-year students on Git and basic web development.",
            ],
          },
        ],
      },
    ],
  },

  fresher: {
    name: "Arjun Mehta",
    contact: [
      "Bengaluru, India",
      "arjun.mehta@example.com",
      "+91 91234 56789",
      "linkedin.com/in/arjun-mehta-example",
      "github.com/arjun-example",
    ],
    sections: [
      {
        type: "text",
        title: "Summary",
        text: "Computer science graduate who has built REST APIs and React interfaces through projects and a 2-month internship. Looking for an entry-level backend developer role.",
      },
      {
        type: "skills",
        title: "Skills",
        groups: [
          { label: "Languages", items: ["Java", "JavaScript", "SQL"] },
          { label: "Frameworks", items: ["Spring Boot", "React"] },
          { label: "Databases", items: ["PostgreSQL", "MongoDB"] },
          { label: "Tools", items: ["Git", "Docker (basics)", "Postman"] },
        ],
      },
      {
        type: "entries",
        title: "Projects",
        items: [
          {
            heading: "Job Application Tracker",
            sub: "Spring Boot, PostgreSQL, React",
            period: "2025",
            bullets: [
              "Built a full-stack tracker with JWT authentication and 10+ REST endpoints.",
              "Deployed the frontend on Vercel and wrote setup docs in the README.",
            ],
          },
          {
            heading: "Weather Dashboard",
            sub: "React, public weather API",
            period: "2024",
            bullets: [
              "Fetched and displayed a 5-day forecast with search and unit toggle.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Internship",
        items: [
          {
            heading: "Web Development Intern",
            sub: "Sample Tech Pvt Ltd (Remote)",
            period: "Jun – Aug 2025",
            bullets: [
              "Built 5 reusable React components used across the company dashboard.",
              "Fixed 12 UI and API bugs in Express services during weekly sprints.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Education",
        items: [
          {
            heading: "B.Tech, Computer Science & Engineering",
            sub: "Sample Institute of Technology",
            period: "2021 – 2025",
            bullets: ["CGPA: 8.1/10"],
          },
        ],
      },
    ],
  },

  "career-change": {
    name: "Neha Iyer",
    contact: [
      "Mumbai, India",
      "neha.iyer@example.com",
      "+91 99887 76655",
      "linkedin.com/in/neha-iyer-example",
    ],
    sections: [
      {
        type: "text",
        title: "Summary",
        text: "Operations manager with 6 years in retail, moving into data analysis. Strong in reporting, demand forecasting and process improvement; completed SQL and Power BI training and 2 portfolio projects.",
      },
      {
        type: "skills",
        title: "Skills",
        groups: [
          {
            label: "Transferable",
            items: [
              "KPI reporting",
              "Demand forecasting",
              "Stakeholder communication",
              "Process improvement",
            ],
          },
          {
            label: "Technical",
            items: ["SQL", "Excel (pivot tables, lookups)", "Power BI", "Python (pandas)"],
          },
        ],
      },
      {
        type: "entries",
        title: "Experience",
        items: [
          {
            heading: "Store Operations Manager",
            sub: "Sample Retail Ltd",
            period: "2019 – 2025",
            bullets: [
              "Built weekly sales and stock dashboards in Excel for a team of 25, replacing manual reports.",
              "Cut stock-outs by 18% by forecasting demand from 2 years of sales data.",
              "Presented monthly KPI reviews to regional leadership and agreed actions with 4 department leads.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Projects",
        items: [
          {
            heading: "Retail Sales Analysis",
            sub: "SQL, Power BI",
            period: "2025",
            bullets: [
              "Analysed 100k+ transactions in SQL to find the top 3 causes of declining margins.",
              "Built an interactive Power BI dashboard for a mock quarterly review.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Education",
        items: [
          {
            heading: "Data Analytics Certificate",
            sub: "Sample Learning Platform",
            period: "2025",
          },
          {
            heading: "B.Com",
            sub: "Sample University",
            period: "2015 – 2018",
          },
        ],
      },
    ],
  },
     engineering: {
    name: "Rohan Das",
    contact: [
      "Bangalore, India",
      "rohan.das@example.com",
      "+91 90000 55566",
      "linkedin.com/in/rohan-das-example",
      "github.com/rohan-example",
    ],
    sections: [
      {
        type: "text",
        title: "Summary",
        text: "Final-year Computer Science Engineering student with a 3-month backend internship and 2 deployed projects. Strong in Java, Spring Boot and REST API design; looking for a junior backend or software engineer role.",
      },
      {
        type: "skills",
        title: "Technical Skills",
        groups: [
          { label: "Languages", items: ["Java", "JavaScript", "SQL"] },
          { label: "Backend", items: ["Spring Boot", "Node.js", "REST APIs", "JWT authentication"] },
          { label: "Databases", items: ["PostgreSQL", "MongoDB"] },
          { label: "Tools", items: ["Git", "Docker (basics)", "Postman", "Maven"] },
          { label: "Core CS", items: ["Data structures", "Algorithms", "OOP", "DBMS", "Operating systems"] },
        ],
      },
      {
        type: "entries",
        title: "Experience",
        items: [
          {
            heading: "Backend Developer Intern",
            sub: "Sample Tech Pvt Ltd (Remote)",
            period: "Jun – Aug 2025",
            bullets: [
              "Built 6 REST endpoints in Express.js for the order module and cut average response time by trimming redundant database queries.",
              "Fixed 15+ API and data-validation bugs across weekly sprints and added tests for the payment flow.",
              "Wrote API documentation used by the frontend team to integrate 4 new screens.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Projects",
        items: [
          {
            heading: "Resume Matcher",
            sub: "Java, Spring Boot, PostgreSQL, React",
            period: "2025",
            bullets: [
              "Built a full-stack app that scores a resume against a job description, with PDF parsing and JWT-secured endpoints.",
              "Designed the PostgreSQL schema and 10+ REST endpoints; deployed the frontend on Vercel.",
            ],
          },
          {
            heading: "Library Management System",
            sub: "Java, MySQL",
            period: "2024",
            bullets: [
              "Implemented book issue, return and fine calculation with a normalised schema of 6 tables.",
              "Covered the core service layer with JUnit tests.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Education",
        items: [
          {
            heading: "B.Tech, Computer Science & Engineering",
            sub: "Sample Academy of Technology",
            period: "2022 – 2026",
            bullets: ["CGPA: 8.2/10"],
          },
        ],
      },
      {
        type: "entries",
        title: "Certifications",
        items: [
          { heading: "Java Programming", sub: "Sample Learning Platform", period: "2024" },
          { heading: "SQL for Data Analysis", sub: "Sample Learning Platform", period: "2024" },
        ],
      },
    ],
  },

  nursing: {
    name: "Anjali Nair",
    contact: [
      "Kochi, India",
      "anjali.nair@example.com",
      "+91 90000 33344",
    ],
    sections: [
      {
        type: "text",
        title: "Summary",
        text: "Registered nurse with 4 years of critical care experience in a medical ICU. Skilled in ventilator care, infusion management and patient education; seeking a staff nurse role in a tertiary care hospital.",
      },
      {
        type: "entries",
        title: "Licence & Certifications",
        items: [
          { heading: "Registered Nurse", sub: "State Nursing Council", period: "Active" },
          { heading: "Basic Life Support (BLS)", sub: "Sample Resuscitation Council", period: "Valid till 2027" },
          { heading: "Advanced Cardiac Life Support (ACLS)", sub: "Sample Resuscitation Council", period: "Valid till 2027" },
        ],
      },
      {
        type: "entries",
        title: "Clinical Experience",
        items: [
          {
            heading: "Staff Nurse, Medical ICU",
            sub: "Sample City Hospital (500 beds)",
            period: "2022 – Present",
            bullets: [
              "Provide bedside care for 4 ventilated patients per shift in a 20-bed medical ICU, monitoring vitals and titrating infusions per physician orders.",
              "Introduced a bedside medication double-check, helping bring reported medication errors down from 5 to 1 per quarter.",
              "Precepted 6 new graduate nurses through a 4-week orientation on documentation and handover.",
            ],
          },
          {
            heading: "Staff Nurse, General Medical Ward",
            sub: "Sample Community Hospital (120 beds)",
            period: "2021 – 2022",
            bullets: [
              "Cared for 8 to 10 patients per shift, with wound care, IV therapy and discharge education.",
            ],
          },
        ],
      },
      {
        type: "skills",
        title: "Skills",
        groups: [
          { label: "Procedures", items: ["IV cannulation", "Wound care", "Ventilator care", "Catheterisation"] },
          { label: "Monitoring", items: ["Haemodynamic monitoring", "ECG interpretation (basic)"] },
          { label: "Systems", items: ["Hospital EMR", "Electronic medication records"] },
        ],
      },
      {
        type: "entries",
        title: "Education",
        items: [
          {
            heading: "B.Sc. Nursing",
            sub: "Sample College of Nursing",
            period: "2017 – 2021",
          },
        ],
      },
    ],
  },
    teacher: {
    name: "Meera Kulkarni",
    contact: [
      "Hyderabad, India",
      "meera.kulkarni@example.com",
      "+91 90000 77788",
    ],
    sections: [
      {
        type: "text",
        title: "Summary",
        text: "Mathematics teacher with 6 years of experience teaching Classes 8 to 10 in CBSE schools. Known for raising board-exam averages through weekly diagnostics and targeted revision; comfortable with Google Classroom and blended lessons.",
      },
      {
        type: "entries",
        title: "Qualifications & Licences",
        items: [
          { heading: "Bachelor of Education (B.Ed)", sub: "Sample University", period: "2018" },
          { heading: "CTET (Paper II)", sub: "Qualified", period: "2018" },
          { heading: "M.Sc. Mathematics", sub: "Sample University", period: "2017" },
        ],
      },
      {
        type: "entries",
        title: "Teaching Experience",
        items: [
          {
            heading: "Mathematics Teacher, Classes 9-10",
            sub: "Sample Public School (CBSE)",
            period: "2021 – Present",
            bullets: [
              "Teach 140 students across 3 sections; raised the board-exam class average from 68% to 76% in two years through weekly diagnostic tests and revision groups.",
              "Moved weekly assignments to Google Classroom and made short concept videos, lifting on-time submission from 70% to 92%.",
              "Run remedial sessions for 25 students each term, with 80% moving above the pass mark.",
            ],
          },
          {
            heading: "Mathematics Teacher, Classes 8-9",
            sub: "Sample International School",
            period: "2019 – 2021",
            bullets: [
              "Planned and delivered lessons for 5 sections of 35 students and prepared termly assessments.",
              "Coordinated the school's Mathematics Olympiad preparation for 60 students.",
            ],
          },
        ],
      },
      {
        type: "skills",
        title: "Skills",
        groups: [
          { label: "Curriculum & Assessment", items: ["Lesson planning", "Formative assessment", "Remedial teaching", "Board exam preparation"] },
          { label: "Classroom", items: ["Classroom management", "Differentiated instruction", "Parent communication"] },
          { label: "Digital Tools", items: ["Google Classroom", "Smart board", "Online quiz tools"] },
        ],
      },
      {
        type: "entries",
        title: "Achievements & Activities",
        items: [
          { heading: "Best Teacher Award", sub: "Sample Public School", period: "2024" },
          { heading: "Maths Club In-charge", sub: "Sample Public School", period: "2022 – Present" },
          { heading: "NEP 2020 Teacher Training Programme", sub: "Sample Education Board", period: "2023" },
        ],
      },
    ],
  },

  executive: {
    name: "Vikram Malhotra",
    contact: [
      "Mumbai, India",
      "vikram.malhotra@example.com",
      "+91 90000 99900",
      "linkedin.com/in/vikram-malhotra-example",
    ],
    sections: [
      {
        type: "text",
        title: "Executive Summary",
        text: "Operations executive with 16 years in manufacturing and logistics, most recently running a ₹420 Cr P&L across 4 regions. Known for margin turnaround, disciplined expansion and building leadership teams. Seeking a COO or Business Head role.",
      },
      {
        type: "skills",
        title: "Core Competencies",
        groups: [
          { label: "Strategy & Finance", items: ["P&L management", "Strategic planning", "Cost optimisation", "M&A integration"] },
          { label: "Operations", items: ["Operational excellence", "Supply chain", "Go-to-market", "Digital transformation"] },
          { label: "Leadership", items: ["Change management", "Talent development", "Board reporting", "Stakeholder management"] },
        ],
      },
      {
        type: "entries",
        title: "Career Highlights",
        items: [
          {
            heading: "Selected results",
            period: "2015 – 2025",
            bullets: [
              "Lifted EBITDA margin from 9% to 14% across a ₹420 Cr business in three years.",
              "Launched operations in 3 new states in 18 months, adding ₹95 Cr in annual revenue.",
              "Built a 12-person leadership team; 4 members were promoted to VP-level roles.",
            ],
          },
        ],
      },
      {
        type: "entries",
        title: "Professional Experience",
        items: [
          {
            heading: "Vice President, Operations",
            sub: "Sample Industries Ltd",
            period: "2020 – Present",
            bullets: [
              "Scope: ₹420 Cr P&L, 1,200 staff, 4 regions, 9 plants and depots; report to the CEO and present quarterly to the board.",
              "Cut cost per unit by 11% through plant consolidation and a supplier renegotiation programme.",
              "Led the ERP rollout across all regions on schedule, reducing order-to-delivery time by 18%.",
            ],
          },
          {
            heading: "Director, Operations",
            sub: "Sample Logistics Pvt Ltd",
            period: "2015 – 2020",
            bullets: [
              "Scope: ₹180 Cr P&L, 450 staff, 2 regions.",
              "Grew revenue from ₹180 Cr to ₹310 Cr while holding service levels above 97%.",
            ],
          },
          {
            heading: "Earlier roles: General Manager, Regional Manager, Plant Manager",
            sub: "Sample Manufacturing Ltd",
            period: "2009 – 2015",
          },
        ],
      },
      {
        type: "entries",
        title: "Education & Credentials",
        items: [
          { heading: "MBA, Operations & Strategy", sub: "Sample Business School", period: "2009" },
          { heading: "B.E., Mechanical Engineering", sub: "Sample College of Engineering", period: "2007" },
          { heading: "Executive Leadership Programme", sub: "Sample Management Institute", period: "2021" },
        ],
      },
      {
        type: "entries",
        title: "Board Roles & Affiliations",
        items: [
          { heading: "Advisory Board Member", sub: "Sample Industry Association", period: "2022 – Present" },
        ],
      },
    ],
  },
};