/* Every fact here comes from Aditya's LinkedIn profile and GitHub account,
   read on 7 Nov 2026. Nothing is invented or estimated.
   Edit this file to change the site; nothing else holds content. */

window.DATA = {
  name: "Aditya Tyagi",
  role: "Artificial Intelligence Engineer",
  company: "pragyaa.ai",
  location: "Delhi, India",
  availability: "Open to work · on-site, hybrid or remote",
  tagline: "I build LLM systems that run in production, not in demos.",
  intro:
    "AI engineer working on multi-agent systems, RAG pipelines and workflow " +
    "automation. I spend most of my time on the unglamorous half of AI work — " +
    "data quality, chunking, guardrails and evaluation — because that is where " +
    "the results actually come from.",

  roles: [
    "Artificial Intelligence Engineer",
    "Multi-agent Systems",
    "RAG &amp; Retrieval",
    "Workflow Automation",
  ],

  links: {
    github: "https://github.com/adi-0704",
    linkedin: "https://www.linkedin.com/in/adityatyagi-ai",
  },

  stats: [
    { value: "32", label: "Public repositories" },
    { value: "9", label: "Shipped projects" },
    { value: "1.4k", label: "LinkedIn followers" },
  ],

  experience: [
    {
      org: "pragyaa.ai",
      title: "Artificial Intelligence Engineer",
      kind: "Full-time · Hybrid",
      period: "Aug 2026 — Present",
      note: "Joined as an intern in May 2026 and stayed on full-time.",
      skills: ["Knowledge Engineering", "Conversational AI", "IT Consulting"],
      current: true,
    },
    {
      org: "Launch91",
      title: "Managing Director",
      kind: "Part-time · Remote",
      period: "Aug 2026 — Present",
      note: "A publication featuring early-stage startups across Asia.",
      skills: ["Knowledge Engineering", "Management"],
      current: true,
    },
    {
      org: "GMAX Electric",
      title: "Co-Founder",
      kind: "Part-time · Remote",
      period: "Jul 2026 — Present",
      note: "Previously AI Intern (Jan–Mar 2026) and Marketing Assistant (2024).",
      skills: ["Start-up Leadership", "Start-up Ventures"],
      current: true,
    },
    {
      org: "GMAX Electric",
      title: "AI Intern",
      kind: "Internship · Hybrid",
      period: "Jan 2026 — Mar 2026",
      note:
        "Built AI automation workflows with n8n and the Claude API, and shipped " +
        "website components and AI image-generation features in Python.",
      skills: ["n8n", "Claude API", "Python", "REST APIs"],
    },
    {
      org: "Honeybee Digital",
      title: "Digital Marketing Intern",
      kind: "Internship · Remote",
      period: "Sep 2025 — Jan 2026",
      note:
        "Applied AI tooling to content and SEO workflows, and ran reporting " +
        "automation across client accounts.",
      skills: ["SEO", "Digital Marketing", "Automation"],
    },
    {
      org: "Mirai School of Technology",
      title: "Project Intern",
      kind: "Internship · Remote",
      period: "Jul 2025 — Aug 2025",
      note:
        "Project-based program in AI workflow design, API integration and " +
        "low-code automation. Delivered a working LLM automation to finish.",
      skills: ["n8n", "API Integration"],
    },
  ],

  education: {
    title: "Minor in Artificial Intelligence",
    org: "IIT Ropar",
    period: "Sep 2024 — Aug 2025",
    note:
      "A hybrid programme covering applied AI tooling and technique for " +
      "students and early-career engineers.",
  },

  projects: [
    {
      name: "Autonomous AI News Intelligence Engine",
      period: "Mar 2026 — Present",
      blurb:
        "A multi-agent system that runs the whole content lifecycle: scraping " +
        "global RSS feeds, summarising them, and publishing to LinkedIn and " +
        "Telegram. A self-correcting logic flow keeps output quality up without " +
        "anyone watching it.",
      tags: ["n8n", "Multi-agent", "LLM", "Automation"],
      url: "https://github.com/adi-0704/News-Automation-Workflow",
      featured: true,
    },
    {
      name: "Enterprise RAG System with RBAC",
      period: "Jan 2026 — Mar 2026",
      blurb:
        "A production retrieval-augmented generation pipeline for document " +
        "querying, with role-based access control and LLM guardrails to keep " +
        "data scoped and answers grounded.",
      tags: ["RAG", "Pinecone", "Chroma", "Streamlit"],
      url: "https://github.com/adi-0704/RAG-Solar-Assistant",
      featured: true,
    },
    {
      name: "Loqo-Script-AI",
      period: "2026",
      blurb:
        "A multi-agent LangGraph and Gemini pipeline that turns raw news URLs " +
        "into structured TV broadcast screenplays, with dynamic visual prompting.",
      tags: ["LangGraph", "Gemini", "TypeScript"],
      url: "https://github.com/adi-0704/Loqo-Script-AI",
      featured: true,
    },
    {
      name: "AI Resume Analyzer",
      period: "Mar 2026",
      blurb:
        "A web app that reads a resume and returns structured feedback, skill " +
        "suggestions and improvement tips.",
      tags: ["Python", "Streamlit", "LLM APIs"],
      url: "https://github.com/adi-0704/ai-resume-analyzer",
      demo:
        "https://ai-resume-analyzer-heqyxwcvg3hffqlsforlrt.streamlit.app/",
    },
    {
      name: "ATS System",
      period: "2026",
      blurb:
        "Scores resumes against job descriptions and returns relevance scores, " +
        "strengths, weaknesses and hiring insights from LLM reasoning.",
      tags: ["LLM reasoning", "Python"],
      url: "https://github.com/adi-0704/ats-system",
    },
    {
      name: "Universal Deep Email Scraper",
      period: "Feb 2026 — Present",
      blurb:
        "Extracts and cleans contact data from awkward web structures, with AI " +
        "cleaning modules that validate accuracy and format leads for CRM import.",
      tags: ["BeautifulSoup", "Selenium", "Data cleaning"],
      url: "https://github.com/adi-0704/emailscraper",
    },
    {
      name: "G-Max E-commerce & Admin Suite",
      period: "Jan 2026 — Feb 2026",
      blurb:
        "A full-stack commerce platform with a React front end, Node backend " +
        "and a custom admin dashboard for live inventory, products and " +
        "Firebase-driven analytics.",
      tags: ["React", "Node.js", "Firebase"],
      url: "https://github.com/adi-0704/gmax-platform",
    },
    {
      name: "Strawberry Juice Showcase",
      period: "Mar 2026",
      blurb:
        "An immersive product site with a frame-by-frame canvas animation " +
        "system driven by scroll position, built for smooth, high-performance " +
        "rendering.",
      tags: ["Next.js 14", "Tailwind", "Canvas"],
      url: "https://github.com/adi-0704/juice-website",
    },
    {
      name: "CollabHive",
      period: "2026",
      blurb:
        "Creator-first influencer marketing platform, shipped and live as a " +
        "static site.",
      tags: ["Static site", "GitHub Pages"],
      url: "https://github.com/adi-0704/collabhive-site",
    },
  ],

  skillGroups: [
    {
      label: "AI & LLM",
      items: [
        "Multi-agent systems", "RAG", "LangGraph", "Prompt engineering",
        "LLM guardrails", "Conversational AI", "OpenAI", "Gemini", "Claude API",
      ],
    },
    {
      label: "Automation",
      items: ["n8n", "Workflow design", "API integration", "Web scraping", "Schedulers"],
    },
    {
      label: "Engineering",
      items: [
        "Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
        "FastAPI", "Streamlit", "PostgreSQL", "Firebase", "Docker",
      ],
    },
  ],
};
