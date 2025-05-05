import { Project, Testimonial, FAQ } from '@/lib/types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A complete e-commerce solution with product management, cart system, and payment integration.",
    fullDescription: "A comprehensive e-commerce platform built with Next.js and Node.js. The system includes product catalog management, user authentication, shopping cart functionality, and Stripe payment integration. The admin dashboard allows for complete product and order management.",
    image: "https://images.pexels.com/photos/7731560/pexels-photo-7731560.jpeg?auto=compress&cs=tinysrgb&w=1600",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redux"],
    category: "web",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management"
    ],
    role: "Full-stack developer responsible for architecture, frontend implementation, and backend API development",
    date: "January 2023"
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts, nutrition, and fitness goals with progress visualization.",
    fullDescription: "A React Native application that helps users track their fitness journey. The app allows users to log workouts, track nutrition intake, set goals, and visualize progress over time through interactive charts.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1600",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Expo"],
    category: "mobile",
    liveUrl: "https://play.google.com/store/apps/fitnesstracker",
    githubUrl: "https://github.com/johndoe/fitness-app",
    features: [
      "Workout tracking with custom exercise creation",
      "Nutrition logging and calorie tracking",
      "Goal setting and progress monitoring",
      "Interactive charts and statistics",
      "Social sharing and community features",
      "Personalized workout recommendations"
    ],
    role: "Lead mobile developer responsible for app architecture, state management, and feature implementation",
    date: "June 2022"
  },
  {
    id: 3,
    title: "Corporate Dashboard UI",
    description: "Modern UI/UX design for a corporate analytics dashboard with data visualization.",
    fullDescription: "A sophisticated dashboard UI design for a corporate analytics tool. The design focuses on data visualization, clear information hierarchy, and intuitive navigation to help users quickly understand complex data and make informed decisions.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1600",
    technologies: ["Figma", "Adobe XD", "Illustrator", "UI/UX", "Prototyping"],
    category: "design",
    liveUrl: "https://www.behance.net/gallery/dashboard-design",
    features: [
      "Intuitive information architecture",
      "Data visualization components",
      "Responsive layouts for all device sizes",
      "Dark and light theme options",
      "User flow optimization",
      "Accessibility considerations"
    ],
    role: "UI/UX Designer responsible for wireframing, visual design, and interactive prototyping",
    date: "November 2022"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task management platform for teams with real-time updates and notifications.",
    fullDescription: "A comprehensive task management system that helps teams collaborate effectively. Features include task creation, assignment, progress tracking, comment threads, file attachments, and real-time notifications.",
    image: "https://images.pexels.com/photos/6956927/pexels-photo-6956927.jpeg?auto=compress&cs=tinysrgb&w=1600",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "web",
    liveUrl: "https://task-manager-demo.com",
    githubUrl: "https://github.com/johndoe/task-management",
    features: [
      "Real-time collaboration and updates",
      "Drag-and-drop task management",
      "Project and team organization",
      "File sharing and attachment capabilities",
      "Comment threads and discussions",
      "Email and in-app notifications"
    ],
    role: "Full-stack developer focusing on real-time features and database architecture",
    date: "August 2022"
  },
  {
    id: 5,
    title: "Travel Companion App",
    description: "Mobile application for travelers with itinerary management, maps integration, and recommendations.",
    fullDescription: "A comprehensive travel companion application built with React Native. The app helps travelers plan their trips, manage itineraries, discover points of interest, and navigate unfamiliar locations with offline map support.",
    image: "https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    technologies: ["React Native", "Google Maps API", "Firebase", "GraphQL", "Expo"],
    category: "mobile",
    liveUrl: "https://travel-companion.app",
    githubUrl: "https://github.com/johndoe/travel-app",
    features: [
      "Trip planning and itinerary management",
      "Interactive maps with offline support",
      "Points of interest discovery",
      "Weather forecasts for destinations",
      "Travel document storage",
      "Expense tracking and currency conversion"
    ],
    role: "Mobile developer responsible for location services, maps integration, and offline functionality",
    date: "March 2023"
  },
  {
    id: 6,
    title: "Finance App Interface",
    description: "Clean and intuitive UI design for a personal finance management application.",
    fullDescription: "A sleek and intuitive user interface design for a personal finance management application. The design prioritizes data visualization, ease of use, and a clean aesthetic to help users manage their finances effectively.",
    image: "https://images.pexels.com/photos/938971/pexels-photo-938971.jpeg?auto=compress&cs=tinysrgb&w=1600",
    technologies: ["Figma", "UI/UX", "Prototyping", "Illustrator"],
    category: "design",
    liveUrl: "https://www.behance.net/gallery/finance-app-design",
    features: [
      "Dashboard with financial overview",
      "Budget planning and tracking interfaces",
      "Transaction history visualization",
      "Goal setting and progress screens",
      "Investment portfolio management",
      "Reports and analytics views"
    ],
    role: "UI/UX Designer responsible for the entire design process from wireframing to final visuals",
    date: "February 2023"
  }
];

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Inc.",
    avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "John transformed our product vision into reality. His technical expertise and attention to detail resulted in an application that exceeded our expectations. He's not just a developer but a true problem solver and collaborator."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO",
    company: "StartupLaunch",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "Working with John was a game-changer for our startup. He quickly understood our needs and delivered a scalable solution that has been crucial to our growth. His code is clean, well-documented, and incredibly maintainable."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Creative Director",
    company: "DesignHub",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "As a designer, I've worked with many developers, but John stands out for his ability to bring designs to life with perfect precision. He has a keen eye for detail and always finds ways to enhance the user experience through his code."
  },
  {
    id: 4,
    name: "David Thompson",
    position: "CEO",
    company: "WebSolutions",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: "We hired John for a complex web application project, and he delivered exceptional results. His technical knowledge, combined with his ability to communicate complex concepts in simple terms, made the development process smooth and efficient."
  }
];

export const faqData: FAQ[] = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, mobile app development, and UI/UX design. My services include building responsive websites, creating cross-platform mobile applications, developing custom web applications, API development, and creating modern user interfaces."
  },
  {
    id: 2,
    question: "What is your development process?",
    answer: "My development process typically includes the following phases: requirement gathering, planning, design, development, testing, deployment, and maintenance. I believe in an iterative approach with regular client feedback to ensure the final product aligns perfectly with your vision."
  },
  {
    id: 3,
    question: "What is your availability for new projects?",
    answer: "I'm currently accepting new projects starting from next month. The timeline for project completion depends on the scope and complexity of the work. Feel free to reach out through the contact form, and I'll get back to you with my availability and a rough estimate for your project."
  },
  {
    id: 4,
    question: "Do you offer maintenance for completed projects?",
    answer: "Yes, I offer ongoing maintenance and support packages for all completed projects. This includes regular updates, security patches, performance optimization, and feature additions as needed. We can discuss maintenance plans that fit your specific requirements."
  },
  {
    id: 5,
    question: "What technologies do you work with?",
    answer: "My core technology stack includes React, Next.js, Node.js, React Native, MongoDB, and Firebase. I'm also experienced with TypeScript, GraphQL, Redux, Express, and various CSS frameworks like Tailwind CSS. I continuously learn new technologies to stay current with industry trends."
  }
];