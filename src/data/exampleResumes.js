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
};