import { Experience, Project, Service, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Keno Renz Bacunawa",
  role: "Full Stack Web & Mobile Developer",
  email: "renzpalonpon@gmail.com",
  location: "Philippines",
  yearsOfExperience: "5+",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web and mobile applications. I specialize in modern web technologies and have a proven track record of delivering high-quality solutions across various industries.",
  github: "https://github.com/kenorenz07",
  linkedin: "https://www.linkedin.com/in/keno-renz-bacunawa-17594323b/",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Material UI", category: "Frontend" },
  { name: "SCSS", category: "Frontend" },

  // Backend
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "REST API", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "Database Design", category: "Backend" },

  // Mobile
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Ionic", category: "Mobile" },

  // Cloud & Tools
  { name: "AWS", category: "Cloud" },
  { name: "DigitalOcean", category: "Cloud" },
  { name: "Cloudflare", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },

  // Tools
  { name: "WordPress", category: "Tools" },
  { name: "Elementor", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Prestashop", category: "Tools" },
];

export const experiences: Experience[] = [
  {
    company: "Outsourcing Talents Inc",
    role: "Full Stack / Mobile Developer",
    period: "2023 - Present",
    description: [
      "Developed cross-platform mobile applications using React Native and Expo",
      "Built scalable backend systems with Laravel and API integrations",
      "Led technical implementations for complex frontend logic",
      "Collaborated with design teams to implement Figma designs into production",
    ],
    technologies: ["React Native", "Laravel", "Expo", "TypeScript", "REST API"],
  },
  {
    company: "Coromar Group",
    role: "Full Stack Developer",
    period: "2022 - 2023",
    description: [
      "Architected and developed full-stack applications using Laravel and Next.js",
      "Implemented complex database designs and optimized query performance",
      "Built responsive admin panels with TypeScript and modern UI frameworks",
      "Integrated third-party APIs and payment gateways",
    ],
    technologies: ["Laravel", "Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
  },
  {
    company: "Sun Asterisk Philippines",
    role: "Laravel + React Developer",
    period: "2021 - 2022",
    description: [
      "Developed feature-rich web applications using Laravel and React",
      "Created RESTful APIs for frontend consumption",
      "Implemented real-time features using WebSockets",
      "Collaborated with international teams using Agile methodologies",
    ],
    technologies: ["Laravel", "React", "MySQL", "Redis", "Docker"],
  },
  {
    company: "Qonvex Technology",
    role: "Laravel/Backend Developer",
    period: "2019 - 2021",
    description: [
      "Built robust backend systems and RESTful APIs",
      "Designed and optimized database schemas for high-performance applications",
      "Implemented authentication and authorization systems",
      "Mentored junior developers on best practices",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Redis", "AWS"],
  },
];

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with admin panel, payment integration, and real-time inventory management.",
    longDescription:
      "A comprehensive e-commerce platform built with Laravel backend and Next.js frontend. Features include product management, cart functionality, secure payment processing via Stripe, order tracking, and an advanced admin dashboard with analytics.",
    technologies: [
      "Next.js",
      "Laravel",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Stripe",
    ],
    category: "Full Stack",
    featured: true,
  },
  {
    id: "affiliate-expo-ticket-app",
    title: "Affiliate Expo Ticket App",
    description:
      "Mobile ticketing application for Italy's premier affiliate marketing conference, featuring digital tickets and event management.",
    longDescription:
      "A React Native mobile app developed for Affiliate Expo, Italy's leading affiliate marketing conference since 2018. The app provides seamless ticket management, event schedules, networking features, and real-time updates for attendees, connecting top professionals, e-commerce experts, and digital entrepreneurs worldwide.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Laravel API",
      "MsSQL",
    ],
    category: "Mobile",
    featured: true,
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization and reporting features.",
    longDescription:
      "A sophisticated dashboard built for SaaS businesses to monitor key metrics, user behavior, and revenue streams. Features include customizable widgets, export functionality, and role-based access control.",
    technologies: [
      "React",
      "Vue.js",
      "Laravel",
      "GraphQL",
      "MySQL",
      "Chart.js",
    ],
    category: "Web",
    featured: true,
  },
  {
    id: "booking-system",
    title: "Appointment Booking System",
    description:
      "Comprehensive booking platform with calendar integration, notifications, and payment processing.",
    technologies: ["Laravel", "Vue.js", "MySQL", "Pusher", "PayPal API"],
    category: "Full Stack",
  },
  {
    id: "hotel-management-system",
    title: "Hotel Management System",
    description:
      "Comprehensive hotel management platform with room booking, inventory management, and guest services.",
    technologies: ["Next.js", "Laravel", "TypeScript", "MySQL", "Stripe"],
    category: "Full Stack",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    description:
      "Enterprise-level inventory tracking with barcode scanning and multi-warehouse support.",
    technologies: ["Laravel", "React", "MySQL", "Redis", "Docker"],
    category: "Web",
  },
];

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and best practices.",
    icon: "Code",
    features: [
      "Responsive website design",
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "CMS integration",
      "Performance optimization",
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps for iOS and Android using React Native.",
    icon: "Smartphone",
    features: [
      "Cross-platform development",
      "Native performance",
      "Push notifications",
      "Offline functionality",
      "App store deployment",
      "Maintenance & updates",
    ],
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Robust backend systems and RESTful/GraphQL APIs for your applications.",
    icon: "Database",
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "Database architecture",
      "Authentication & security",
      "Third-party integrations",
      "API documentation",
    ],
  },
  {
    id: "ui-implementation",
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect conversion of designs into functional, responsive interfaces.",
    icon: "Palette",
    features: [
      "Figma to code conversion",
      "Responsive design",
      "Animation & interactions",
      "Design system implementation",
      "Accessibility compliance",
      "Cross-browser compatibility",
    ],
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description:
      "Expert guidance on architecture, tech stack selection, and best practices.",
    icon: "MessageSquare",
    features: [
      "Technology stack selection",
      "Code review & optimization",
      "Architecture design",
      "Performance audits",
      "Team mentoring",
      "Project planning",
    ],
  },
  {
    id: "cloud-deployment",
    title: "Cloud Deployment",
    description:
      "Deploy and manage your applications on cloud platforms with CI/CD pipelines.",
    icon: "Cloud",
    features: [
      "AWS deployment",
      "DigitalOcean setup",
      "Vercel integration",
      "CI/CD pipelines",
      "Server management",
      "Monitoring & scaling",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/kenorenz07",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/keno-renz-bacunawa-17594323b/",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:renzpalonpon@gmail.com",
    icon: "Mail",
  },
];
