// Mock data for the portfolio
export const mockData = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer & Cybersecurity Specialist",
    email: "antaresmugisho@gmail.com",
    bio: "Passionate full-stack developer with expertise spanning web, mobile, and desktop applications. I specialize in building scalable solutions using modern technologies like Python, JavaScript, and PHP. With a strong background in cybersecurity, I ensure that security is built into every application I develop. I love creating user-friendly interfaces and robust backend systems that solve real-world problems.",
    location: "Available Worldwide",
    avatar: `https://www.gravatar.com/avatar/5d5b2e3b6d8e0b3c4a7b8c9d2e3f4a5b?s=400&d=identicon`,
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      email: "mailto:antaresmugisho@gmail.com"
    }
  },
  
  skills: {
    web: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "TailwindCSS", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 82 }
    ],
    backend: [
      { name: "Python", level: 92 },
      { name: "Django", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 80 }
    ],
    mobile: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 80 },
      { name: "Flutter", level: 75 }
    ],
    desktop: [
      { name: "PyQt", level: 88 },
      { name: "Electron", level: 82 },
      { name: "Tkinter", level: 85 }
    ],
    database: [
      { name: "MySQL", level: 90 },
      { name: "SQLite", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 }
    ],
    cybersecurity: [
      { name: "Penetration Testing", level: 85 },
      { name: "Vulnerability Assessment", level: 82 },
      { name: "Security Auditing", level: 80 },
      { name: "Secure Coding", level: 88 }
    ]
  },
  
  projects: [
    // Web Projects
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      technologies: ["Laravel", "MySQL", "TailwindCSS", "JavaScript"],
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      links: {
        live: "https://demo-ecommerce.com",
        github: "https://github.com/yourusername/ecommerce-platform"
      },
      features: ["Payment Gateway", "Inventory Management", "User Authentication", "Admin Dashboard"]
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative task management system with real-time updates and team collaboration features.",
      technologies: ["Django", "PostgreSQL", "React", "WebSocket"],
      category: "web",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      links: {
        live: "https://taskmaster-demo.com",
        github: "https://github.com/yourusername/task-management"
      },
      features: ["Real-time Collaboration", "Project Tracking", "Team Management", "Analytics"]
    },
    {
      id: 3,
      title: "Portfolio Website Builder",
      description: "SaaS platform that allows users to create professional portfolios with customizable templates.",
      technologies: ["PHP", "Laravel", "MySQL", "TailwindCSS"],
      category: "web",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      links: {
        live: "https://portfolio-builder.com",
        github: "https://github.com/yourusername/portfolio-builder"
      },
      features: ["Drag & Drop Builder", "Template Library", "Custom Domains", "SEO Optimization"]
    },
    
    // Mobile Projects
    {
      id: 4,
      title: "Fitness Tracker App",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with social features.",
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.fitnesstrack",
        appstore: "https://apps.apple.com/app/fitness-tracker/id123456789"
      },
      features: ["Workout Tracking", "Nutrition Logging", "Social Sharing", "Progress Analytics"]
    },
    {
      id: 5,
      title: "Expense Manager",
      description: "Personal finance management app with budgeting, expense tracking, and financial insights.",
      technologies: ["React Native", "Expo", "SQLite", "Chart.js"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.expensemanager",
        expo: "https://expo.dev/@yourusername/expense-manager"
      },
      features: ["Budget Planning", "Expense Categorization", "Financial Reports", "Bill Reminders"]
    },
    
    // Desktop Projects
    {
      id: 6,
      title: "System Monitor Pro",
      description: "Advanced system monitoring tool with real-time performance metrics and alerts.",
      technologies: ["PyQt", "Python", "SQLite", "Matplotlib"],
      category: "desktop",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      links: {
        windows: "https://releases.github.com/system-monitor-pro/v1.0.0/SystemMonitorPro-1.0.0.exe",
        mac: "https://releases.github.com/system-monitor-pro/v1.0.0/SystemMonitorPro-1.0.0.dmg",
        linux: "https://releases.github.com/system-monitor-pro/v1.0.0/SystemMonitorPro-1.0.0.deb"
      },
      features: ["Real-time Monitoring", "Performance Alerts", "Historical Data", "Custom Widgets"]
    },
    {
      id: 7,
      title: "Database Manager",
      description: "Cross-platform database management tool with support for multiple database engines.",
      technologies: ["PyQt", "Python", "SQLAlchemy", "Pandas"],
      category: "desktop",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      links: {
        windows: "https://releases.github.com/db-manager/v2.1.0/DatabaseManager-2.1.0.exe",
        mac: "https://releases.github.com/db-manager/v2.1.0/DatabaseManager-2.1.0.dmg",
        linux: "https://releases.github.com/db-manager/v2.1.0/DatabaseManager-2.1.0.deb"
      },
      features: ["Multi-DB Support", "Query Builder", "Data Visualization", "Export Tools"]
    },
    
    // Cybersecurity Projects
    {
      id: 8,
      title: "Vulnerability Scanner",
      description: "Network vulnerability assessment tool with automated scanning and detailed reporting.",
      technologies: ["Python", "Nmap", "SQLite", "Flask"],
      category: "cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      links: {
        github: "https://github.com/yourusername/vulnerability-scanner",
        demo: "https://vuln-scanner-demo.com"
      },
      features: ["Automated Scanning", "Detailed Reports", "Risk Assessment", "Custom Rules"]
    },
    {
      id: 9,
      title: "Password Security Auditor",
      description: "Tool for auditing password policies and testing password strength across organizations.",
      technologies: ["Python", "Tkinter", "Cryptography", "SQLite"],
      category: "cybersecurity",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop",
      links: {
        windows: "https://releases.github.com/password-auditor/v1.2.0/PasswordAuditor-1.2.0.exe",
        github: "https://github.com/yourusername/password-auditor"
      },
      features: ["Policy Auditing", "Strength Testing", "Compliance Checking", "Security Reports"]
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "Remote",
      description: "Leading development of enterprise web applications using Laravel, React, and Python. Implemented security best practices and conducted code reviews.",
      achievements: [
        "Improved application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines"
      ]
    },
    {
      id: 2,
      company: "CyberGuard Solutions",
      position: "Cybersecurity Specialist",
      duration: "2020 - 2022",
      location: "Hybrid",
      description: "Conducted penetration testing and vulnerability assessments for client applications. Developed secure coding guidelines and security training programs.",
      achievements: [
        "Identified and resolved 200+ security vulnerabilities",
        "Developed security training curriculum",
        "Achieved 99.9% security compliance"
      ]
    },
    {
      id: 3,
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2018 - 2020",
      location: "On-site",
      description: "Built and maintained web applications using PHP, JavaScript, and MySQL. Developed mobile apps using React Native and desktop applications with PyQt.",
      achievements: [
        "Launched 3 successful mobile apps",
        "Reduced server costs by 30%",
        "Mentored junior developers"
      ]
    }
  ]
};