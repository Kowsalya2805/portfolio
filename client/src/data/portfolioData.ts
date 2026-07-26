export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  technologies: string[];
  features: string[];
  achievement?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  title: string;
  event: string;
  date: string;
  description: string;
  badge: string;
}

export const personalDetails = {
  name: "Kowsalya S",
  titles: [
    "Artificial Intelligence & Data Science Student",
    "Machine Learning Enthusiast",
    "Python Developer",
    "IoT Developer",
    "Data Analytics Enthusiast"
  ],
  location: "Tamil Nadu, India",
  phone: "+91 9150842698",
  email: "kowsalyasubbu289@gmail.com",
  github: "https://github.com/Kowsalya2805",
  linkedin: "https://www.linkedin.com/in/kowsalya-subu",
  photo: "/profile.jpg",
  resumePdf: "/Kowsalya_S_Resume.pdf",
  bioShort: "Final-year B.Tech AI & Data Science Student at Nandha Engineering College, passionate about Software Engineering, Machine Learning, and IoT.",
  aboutDetailed: {
    summary: "Hi, I'm Kowsalya S, a final-year B.Tech Artificial Intelligence and Data Science student at Nandha Engineering College. I enjoy learning new technologies and building practical projects in Machine Learning, Web Development, and IoT. I like solving real-world problems through technology and continuously improving my technical and communication skills.",
    objective: "My goal is to begin my career as a Software Engineer or AI & Data Science professional, where I can learn from experienced teams, contribute to meaningful projects, and grow both technically and professionally.",
    strengths: [
      "Quick Learner",
      "Problem Solving",
      "Teamwork",
      "Adaptability",
      "Communication",
      "Positive Attitude"
    ],
  },
  stats: {
    gpa: "8.01 / 10.0",
    projects: "3+ Enterprise Projects",
    internships: "2 Industry Internships",
    certifications: "6 Professional Certifications",
    awards: "3 Major Awards"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 82 }
    ]
  },
  {
    name: "Frontend",
    skills: [
      { name: "HTML5 / CSS3", level: 92 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    name: "Backend & Web",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 84 }
    ]
  },
  {
    name: "Data Science & ML",
    skills: [
      { name: "Pandas", level: 92 },
      { name: "NumPy", level: 90 },
      { name: "Exploratory Data Analysis (EDA)", level: 94 },
      { name: "Model Development & Scikit-Learn", level: 88 },
      { name: "Tableau & Data Visualization", level: 84 }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL / PostgreSQL", level: 84 }
    ]
  },
  {
    name: "Hardware & Cloud",
    skills: [
      { name: "IoT & Embedded Systems", level: 88 },
      { name: "Microcontroller / Arduino", level: 86 },
      { name: "Cloud Fundamentals", level: 80 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker & Financial Analytics App",
    category: "Data Analytics & Python",
    shortDesc: "Comprehensive financial monitoring application engineered with custom file handling, Pandas data processing, and spending trend visualizer.",
    fullDesc: "Engineered a desktop/CLI financial analysis software designed to log daily expenditures, perform continuous category-wise breakdown, and generate automated statistical summaries. Features robust file persistence, trend forecast algorithms, and graphical visualizers.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "File I/O"],
    features: [
      "Custom transaction ingestion & automated validation pipelines",
      "Monthly & annual spending breakdown with interactive graphs",
      "Budget breach alerting system with visual threshold indicators",
      "Exportable financial summary reports in CSV and PDF formats"
    ],
    achievement: "Won 3rd Prize in College Level Project Competition (Feb 2024)",
    githubUrl: "https://github.com/Kowsalya2805/Expense-Tracker",
    liveUrl: "https://github.com/Kowsalya2805/Expense-Tracker",
    featured: true
  },
  {
    id: "notes-sharing-platform",
    title: "Notes Sharing Platform",
    category: "Full Stack Web",
    shortDesc: "Role-based academic resource sharing web platform architected with FastAPI, MongoDB, and secure authentication pipelines.",
    fullDesc: "Architected a secure full-stack web application for college students to upload, organize, search, and share academic notes with fine-grained role permissions. Built using modern HTML/CSS frontend with a FastAPI asynchronous python backend and MongoDB database.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    technologies: ["FastAPI", "Python", "MongoDB", "HTML5", "CSS3", "JWT Auth"],
    features: [
      "Role-Based Access Control (RBAC) for Students, Faculty, and Admin",
      "Full-text search & categorization by subject, semester, and department",
      "Secure document upload with virus scan & file format verification",
      "Interactive reader preview modal and peer review feedback system"
    ],
    achievement: "Recognized as Top Departmental Capstone Web Project",
    githubUrl: "https://github.com/Kowsalya2805/Notes-Sharing-Platform",
    liveUrl: "https://github.com/Kowsalya2805/Notes-Sharing-Platform",
    featured: true
  },
  {
    id: "smart-hat-visually-impaired",
    title: "Smart Hat for Visually Impaired People",
    category: "IoT & Assistive Tech",
    shortDesc: "Patent-worthy IoT assistive device integrating ultrasonic sensors and microcontrollers for real-time obstacle detection and acoustic alerts.",
    fullDesc: "Engineered an IoT-enabled wearable assistive hat providing 360-degree environmental spatial perception for visually impaired individuals. Integrates ultrasonic distance sensors, haptic feedback actuators, and buzzer alarms for obstacle collision prevention.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    technologies: ["IoT", "Arduino", "Embedded C/C++", "Sensory Hardware", "Haptic Actuators"],
    features: [
      "Multi-directional ultrasonic distance calculation with low latency",
      "Adaptive frequency haptic and audio feedback based on proximity",
      "Ultra-low power consumption circuit design with rechargeable Li-ion battery",
      "Lightweight ergonomic headgear enclosure optimized for daily wear"
    ],
    achievement: "Awarded Unique Project Recognition at Nandha Innovation Day 2026 (Feb 2026)",
    githubUrl: "https://github.com/Kowsalya2805/Smart-Hat-Visually-Impaired",
    liveUrl: "https://github.com/Kowsalya2805/Smart-Hat-Visually-Impaired",
    featured: true
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "NextLogic",
    role: "Data Analytics Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Tamil Nadu, India",
    type: "Internship",
    responsibilities: [
      "Executed comprehensive data cleaning, deduplication, and preprocessing on large-scale raw industry datasets using Python.",
      "Performed Exploratory Data Analysis (EDA) to isolate core revenue trends, user behavioral anomalies, and operational bottlenecks.",
      "Synthesized business metrics into visual dashboards and actionable recommendations for senior leadership."
    ],
    achievements: [
      "Optimized data preprocessing pipelines, reducing dataset cleaning time by 35%.",
      "Delivered strategic insights that helped refine client targeting metrics."
    ],
    skills: ["Python", "Pandas", "EDA", "Data Cleaning", "Tableau", "Business Intelligence"]
  },
  {
    company: "NitroWare",
    role: "Machine Learning Intern",
    period: "Jan 2026 – Feb 2026",
    location: "Tamil Nadu, India",
    type: "Internship",
    responsibilities: [
      "Collaborated in developing, training, and benchmarking machine learning classifiers using Scikit-Learn and Python.",
      "Engineered data preprocessing pipelines and advanced feature extraction techniques to boost precision and recall.",
      "Documented model metrics, confusion matrices, and ROC-AUC curves to communicate algorithmic performance to stakeholders."
    ],
    achievements: [
      "Engineered feature selection pipeline improving model accuracy by 12%.",
      "Constructed reusable ML evaluation utilities adopted across internal intern teams."
    ],
    skills: ["Machine Learning", "Scikit-Learn", "Feature Engineering", "Python", "Matplotlib", "Model Testing"]
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "Nandha Engineering College",
    degree: "Bachelor of Technology - Artificial Intelligence and Data Science",
    period: "2023 – 2027",
    gpa: "8.01 / 10.0 CGPA",
    highlights: [
      "Specialization in Machine Learning, Deep Learning, Data Structures, and Cloud Computing.",
      "Active participant in technical symposiums, hackathons, and innovation fairs.",
      "Maintained consistent academic distinction throughout semesters."
    ]
  }
];

export const certificationData: CertificationItem[] = [
  {
    title: "Silver Medal Achievement - NPTEL",
    issuer: "NPTEL / IIT",
    date: "Jan – Apr 2026",
    badge: "🥈 Silver Medalist",
  },
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    date: "Jul – Oct 2024",
    badge: "Cloud Specialist",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM Developer Skills Network",
    date: "2024",
    badge: "IBM Verified",
  },
  {
    title: "Introduction to Data Science",
    issuer: "LinkedIn Learning (PMI Authorized)",
    date: "2024",
    badge: "PMI Authorized",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Simplilearn (Powered by Google Cloud)",
    date: "2025",
    badge: "Google Cloud Ecosystem",
  },
  {
    title: "Data Analytics Professional Certificate",
    issuer: "IBM",
    date: "Ongoing",
    badge: "IBM Professional",
  }
];

export const achievementData: AchievementItem[] = [
  {
    title: "3rd Prize Winner - College Project Competition",
    event: "Annual Technical Innovation Expo",
    date: "Feb 2024",
    description: "Awarded 3rd place among 50+ entries for developing the Expense Tracker & Financial Analytics Python system.",
    badge: "🥉 3rd Prize"
  },
  {
    title: "Unique Project Recognition Award",
    event: "Nandha Innovation Day 2026",
    date: "Feb 2026",
    description: "Received top innovation award for engineering the 'Smart Hat for Visually Impaired People' IoT hardware assistive prototype.",
    badge: "🌟 Innovation Award"
  },
  {
    title: "NPTEL Silver Medalist",
    event: "NPTEL National Certification Exam",
    date: "Apr 2026",
    description: "Ranked among top top-tier national candidates in NPTEL examination earning Silver Medal honor.",
    badge: "🥈 Silver Medal"
  }
];
