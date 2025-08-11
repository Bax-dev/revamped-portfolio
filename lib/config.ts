import { Github, Linkedin, Twitter, Mail, } from "lucide-react";

export const siteConfig = {
  name: "Bassey Inyang",
  title: "Backend Developer & Mechatronics Engineer",
  tagline:
    "",

  whatsapp: {
    number: "+2349059412565",
    defaultMessage: `Hi Bassey! 👋

I found your portfolio and I'm interested in discussing a project with you.

I'm looking for help with:
- Backend Development
- Mechatronics Engineering  
- API Development
- IoT Solutions

Could we schedule a time to chat about my requirements?

Best regards!`,
    availability: "Mon-Fri, 9 AM - 6 PM",
    responseTime: "Usually within 2-4 hours",
  },

  seo: {
    title:
      "Bassey Inyang - Backend Developer & Mechatronics Engineer | Node.js Python Expert",
    description:
      "Experienced Backend Developer and Mechatronics Engineer specializing in Node.js, Python, API development, embedded systems, robotics, and industrial automation. Available for freelance projects and consulting.",
    keywords: [
      "backend developer",
      "mechatronics engineer",
      "nodejs developer",
      "python developer",
      "api development",
      "database design",
      "microservices",
      "cloud architecture",
      "embedded systems",
      "robotics engineer",
      "iot developer",
      "industrial automation",
      "full stack developer",
      "software engineer",
      "freelance developer",
      "remote developer",
      "system integration",
      "automation engineer",
      "control systems",
      "sensor integration",
    ],
    author: "Bassey Inyang",
    canonical: "https://alexjohnson.dev",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://alexjohnson.dev",
      siteName: "Bassey Inyang - Backend Developer & Mechatronics Engineer",
      title: "Bassey Inyang - Backend Developer & Mechatronics Engineer",
      description:
        "Experienced Backend Developer and Mechatronics Engineer specializing in Node.js, Python, API development, embedded systems, robotics, and industrial automation.",
      images: [
        {
          url: "https://alexjohnson.dev/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Bassey Inyang - Backend Developer & Mechatronics Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@BaxX08",
      creator: "@BaxX08",
      title: "Bassey Inyang - Backend Developer & Mechatronics Engineer",
      description:
        "Building robust backend systems and innovative mechatronic solutions. Expert in Node.js, Python, embedded systems, and robotics.",
      images: ["https://alexjohnson.dev/twitter-image.jpg"],
    },
  },

  navigation: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ],

  about: {
    bio: [
      "I am a passionate Backend Developer and Mechatronics Engineer with over 3 years of experience creating robust server-side applications.",
      "My backend development expertise spans Node.js, Python, API architecture, database design, and cloud infrastructure. In mechatronics, I specialize in embedded systems, robotics, sensor integration, and industrial automation. This dual expertise enables me to create end-to-end solutions from hardware control to cloud-based data processing.",
      
    ],
    highlights: [
      "Backend API Architecture",
      "Node.js & Python Expert",
      "Embedded Systems Design",
      "Robotics & Automation",
      "Database Optimization",
      "IoT Solutions",
    ],
  },

  skills: {
    "Backend Development": [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Express.js", icon: "⚡" },
      { name: "FastAPI", icon: "🚀" },
    ],
    "Databases & Cloud": [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Redis", icon: "🔴" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
    ],
    "Mechatronics & Hardware": [
      { name: "Arduino", icon: "🤖" },
      { name: "PLC Programming", icon: "⚙️" },
      { name: "Sensor Integration", icon: "📡" },
      { name: "Motor Control", icon: "🔧" },
    ],
    "Tools & Technologies": [
      { name: "Git", icon: "📝" },
      { name: "Linux", icon: "🐧" },
      { name: "MQTT", icon: "📨" },
      { name: "CAD Design", icon: "📐" },
    ],
  },

  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online store with advanced search, user authentication, and payment processing features.",
      image: "https://codejo.vercel.app/assets/images/service6.png",
      tech: [ "XHTML", "JAVA", "mySQL", "Spring Boot", "Docker"],
      demo: "https://rms.uptitek.com/rmssaas/shop/index?id=1",
      github: "",
    },
    {
      title: "Health Managing App",
      description:
        "RESTful API system for health management with patient tracking, appointment scheduling, and real-time health monitoring capabilities.",
      image: "https://codejo.vercel.app/assets/images/service4.png",
      tech: ["Python", "Django", "mySQL", "Redis", "Docker"],
      demo: "https://www.fundusai.com/",
      github: "",
    },
    {
      title: "Finance Management System",
      description:
        "Centralized finance management system with budgeting, expense tracking, and financial reporting features.",
      image: "https://codejo.vercel.app/assets/images/service5.png",
      tech: ["Node.js", "React", "MongoDB"],
      demo: "https://finpesa.com/",
      github: "",
    },
    {
      title: "Company Website",
      description:
        " Responsive company website with portfolio showcase, service descriptions, and contact form.",
      image: "https://codejo.vercel.app/assets/images/service1.png",
      tech: ["XHTML", "JAVA", "mySQL", "CSS", "Javascript", "Docker"],
      demo: "https://uptitek.com/",
      github: "",
    },
    {
      title: "Flight Booking System",
      description:
        "A web-based booking system for managing flights and accommodations",
      image: "https://codejo.vercel.app/assets/images/service3.png",
      tech: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Kubernetes",
      ],
      demo: "",
      github: "",
    },
    {
      title: "CRM Dashboard",
      description:
        "Customer relationship management system with lead tracking, sales analytics, and customer support features.",
      image: "https://codejo.vercel.app/assets/images/service2.png",
      tech: ["Nextjs", "Typescript", "Tailwind"],
      demo: "",
      github: "",
    },
  ],

  blog: {
    mediumProfile: "https://medium.com/@basseyeyo991",
    featured: {
      title: "Role-Based Access Control (RBAC) in Next.js Using JWT",
      excerpt:
        "Learn how to design and implement scalable backend role based access controls using JWT tokens",
      url: "https://medium.com/@basseyeyo991/role-based-access-control-rbac-in-next-js-using-jwt-10b7fe5035d1",
      image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*wxXf4kRptTFEhQmiGAHUrw.jpeg",
      date: "Jun 8, 2025",
      readTime: "2 min read",
      tags: ["Node.js", "Backend", "Microservices", "API Design"],
    },

    articles: [
      {
        title: "Building Your First Web3 Project : Donating on the Blockchain (and Saving Christmas!)",
        excerpt:
          "Learn how to build your first web3 project by donating on the blockchain and saving christmas",
        url: "https://medium.com/@basseyeyo991/building-your-first-web3-project-donating-on-the-blockchain-and-saving-christmas-10b7fe5035d1",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*wPFWvIaKRtBMwjejwWg-sQ.jpeg",
        date: "Dec 15, 2024",
        readTime: "3 min read",
        tags: ["IoT", "Backend", "Blockchain","Avalanche", "Web3"],
      },

      {
        title:
          "Securing Your Django Authentication System: Best Practices You Can’t Ignore",
        excerpt:
          "Learn how to secure your Django authentication system using best practices for password hashing, token management, and session security.",
        url: "https://medium.com/@basseyeyo991/securing-your-django-authentication-system-best-practices-you-cant-ignore-f6122d21fe58",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*H_RazGKKh05S9PmbmGNCjg.jpeg",
        date: "Aug 20, 2024",
        readTime: "2 min read",
        tags: ["Django", "Authentication", "Security", "Backend"],
      },
      {
        title: "Is Your Website Locking People Out? Here’s How to Fix It with WCAG ",
        excerpt:
          "Learn how to fix your website's accessibility issues using WCAG guidelines and best practices.",
        url: "https://medium.com/@basseyeyo991/is-your-website-locking-people-out-heres-how-to-fix-it-with-wcag-10b7fe5035d1",
        image: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*OFS16pnbIBJASpXqMxJ8OQ.png",
        readTime: "2 min read",
        tags: ["Accessibility", "Web Development", "WCAG", "UX/UI"],
      },
    ],
  },

  achievements: [
    { metric: "20+", description: "Backend Projects" },
    { metric: "15+", description: "Frontend Projects" },
    { metric: "3+", description: "Years Experience" },
  ],

  experience: [
    {
      position: "Mid Level Backend Developer",
      company: "Uptitek Technologies",
      period: "2023 - Present",
      location: "Imo, Nigeria",
      description:
        "Lead backend development for IoT platforms serving 100k+ connected devices. Design and implement mechatronic systems for industrial automation. Architect microservices and manage cloud infrastructure.",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "AWS",
        "Docker",
      ],
    },
    {
      position: "Mid Level Backend Developer",
      company: "Finpesa",
      period: "Contract",
      location: "Rivers, Nigeria",
      description:
        "Developed backend APIs for manufacturing execution systems. Implemented PLC programming and sensor integration for automated production lines. Built real-time monitoring dashboards.",
      technologies: [
        "Nodejs",
        "Express",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
    },
    {
      position: "Electrical Engineer Intern",
      company: "Nitowens Integrated Services",
      period: "2020 - 2021",
      location: "Rivers, Nigeria",
      description:
        "Designed and implemented electrical systems for industrial automation. Integrated PLC programming and sensor systems for automated production lines.",
      technologies: ["C++", "Arduino", "Raspberry Pi", "ROS", "OpenCV", "CAD"],
    },
  ],

  testimonials: [
    {
      name: "Ifeanyi Nneji",
      position: "Backend Developer",
      company: "TechCorp",
      quote:
        "Bassey's unique combination of backend development and frontend expertise is invaluable. He consistently delivers robust solutions that seamlessly integrate software and hardware components.",
      avatar: "/professional-woman-headshot.png",
    },
    {
      name: "Betrand Ugorji",
      position: "Chief Executive Officer",
      company: "Uptitek Integrated Services",
      quote:
        "Working with Bassey transformed our automation capabilities. His backend APIs and mechatronic systems significantly improved our production efficiency and monitoring capabilities.",
      avatar: "/professional-man-headshot.png",
    },
    {
      name: "Emily Johnson",
      position: "Product Manager",
      company: "Finpesa",
      quote:
        "Bassey has an exceptional ability to translate complex requirements into elegant backend architectures and innovative mechatronic solutions. A true problem solver.",
      avatar: "/professional-woman-designer.png",
    },
  ],

  contact: {
    email: "basseyeyo991@gmail.com",
    phone: "+2349059412565",
    location: "Nigeria",
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/Bax-dev",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bassey-inyang-1835a0235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: Linkedin,
    },
    {
      name: "X",
      url: "https://x.com/BaxX08",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:basseyeyo991@gmail.com",
      icon: Mail,
    },
  ],
};
