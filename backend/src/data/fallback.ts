// Fallback data used when Supabase is not configured.
// This keeps the API usable during local development.

export const fallbackProfile = {
  name: "Tanuj Kumar",
  title: "Full Stack Developer | Web Developer | .NET Developer",
  location: "Halifax, Nova Scotia",
  phone: "+1 902-240-6651",
  email: "TanujDonkal29@gmail.com",
  summary:
    "Software Engineer with hands-on experience building scalable web applications using React, TypeScript, and Node.js. Strong foundation in REST API design, backend development, and database integration, with experience in CI/CD pipelines and testing workflows. Built production-style full-stack systems including AI-assisted features and data-driven applications. Passionate about designing clean, efficient, and scalable software solutions.",
  languages: ["English", "Hindi"],
};

export const fallbackExperiences = [
  {
    year: "2023 - 2024",
    title: "Software Developer",
    company: "Fashify",
    type: "Fulltime",
    description:
      "Developed and maintained full-stack ERP modules for schools and global clients using C#, ASP.NET Core, SQL Server, Entity Framework, and JavaScript. Designed and optimized SQL Server databases, built and integrated REST APIs, and implemented AI-driven features such as automated data classification and AI-assisted reporting.",
  },
  {
    year: "2021",
    title: "Web Development Intern",
    company: "Uniworld Studios Pvt. Ltd.",
    type: "Internship",
    description:
      "Contributed to new features and maintenance of responsive, dynamic web applications using HTML, CSS, JavaScript, React, and Angular. Assisted in data annotation for AI-powered search and recommendation systems. Supported UI debugging, cross-browser compatibility fixes, and performance improvements.",
  },
];

export const fallbackEducation = [
  {
    title: "IT Programming for IoT (Certification)",
    description:
      "Nova Scotia Community College, Halifax - 2025-2026 (Pursuing)",
  },
  {
    title: "Full Stack Application Development (Certification)",
    description: "Nova Scotia Community College, Halifax - 2024-2025",
  },
  {
    title: "Bachelor of Technology - Computer Science",
    description: "KIIT College of Engineering, India - 2018-2023",
  },
];

export const fallbackSkills = [
  { name: "React", category: "Frontend", rating: 5 },
  { name: "TypeScript", category: "Frontend", rating: 5 },
  { name: "JavaScript", category: "Frontend", rating: 5 },
  { name: "Node.js", category: "Backend", rating: 4 },
  { name: "C# / .NET", category: "Backend", rating: 4 },
  { name: "SQL Server", category: "Database", rating: 4 },
];

export const fallbackProjects = [
  {
    title: "Nova Scotia Ale - Full-Stack Marketplace Platform",
    description:
      "Built a full-stack marketplace platform for accommodations, jobs, and rides using React, TypeScript, Node.js, Express, and Supabase. Designed and integrated REST APIs with authentication and data validation. Implemented CI/CD workflows using GitHub Actions.",
    tech: "React, TypeScript, Node.js, Express, Supabase",
    slug: "nova-scotia-ale",
    image: "/images/work/work-img-1.jpg",
  },
  {
    title: "ERP System for Schools & Global Clients",
    description:
      "Developed backend modules and business logic for ERP workflows including attendance, reporting, and user management. Integrated frontend components with backend APIs. Optimized SQL queries and implemented role-based access control.",
    tech: "C#, ASP.NET Core, SQL Server, Entity Framework, JavaScript",
    slug: "erp-system",
    image: "/images/work/work-img-2.jpg",
  },
];

export const fallbackContactBar = {
  contactItems: [
    {
      type: "email",
      label: "TanujDonkal29@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:TanujDonkal29@gmail.com",
    },
    {
      type: "phone",
      label: "+1 902-240-6651",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+19022406651",
    },
    {
      type: "location",
      label: "Halifax, Nova Scotia",
      icon: "/images/icon/web-icon.svg",
      link: "#contact",
    },
  ],
  socialItems: [
    {
      platform: "github",
      icon: "/images/icon/github-icon.svg",
      link: "https://github.com/TanujDonkal",
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/tanuj-kumar-",
    },
  ],
};

export const fallbackContactLinks = {
  socialLinks: [
    { title: "GitHub", href: "https://github.com/TanujDonkal" },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/tanuj-kumar-" },
  ],
  contactInfo: [
    {
      type: "email",
      label: "TanujDonkal29@gmail.com",
      link: "mailto:TanujDonkal29@gmail.com",
    },
    {
      type: "phone",
      label: "+1 902-240-6651",
      link: "tel:+19022406651",
    },
  ],
};
