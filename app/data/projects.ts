
export interface Project {
  id: string;
  title: string;
  type?: string;
  category: string[];
  description: string;
  overview?: string;
  problem?: string;
  process?: string;
  features?: string[];
  techStack?: string[];
  tools?: string[];
  image?: string;
  images?: string[];
  video?: string;
  links?: {
    live?: string;
    github?: string;
    video?: string;
  };
  role?: string;
  outcome?: string;
  lessonsLearned?: string;
  designDecisions?: string;
  isFeatured?: boolean;
  date?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

// ============================================================
// PLACEHOLDER DATA — Replace with your real projects
// Each project entry is clearly structured so you can swap
// content without touching any component code.
// ============================================================

export const developmentProjects: Project[] = [
  {
    id: 'hearease',
    title: 'HearEase',
    type: 'Thesis',
    category: ['web app', 'ai'],
    description: 'An AI-driven system employing Deep Neural Networks (DNN) to maximize barangay hearing schedules and forecast case resolution times.',
    overview: 'Built a complete e-commerce platform from the ground up, handling everything from database design to the checkout flow.',
    problem: 'As legal cases within Philippine communities grow in complexity, the need for effective barangay hearing scheduling becomes critical. Traditional scheduling techniques often suffer from flaws that lead to postponed hearings and unresolved cases.',
    features: [
      'AI-Powered Scheduling: Automatically suggests hearing dates based on predicted case resolution times and Lupon availability',
      'Digital Case Management: Complete digitization of complaints, respondents, and case history.',
      'Secure Authentication: Google Sign-In and Role-Based Access Control (Admin/Lupon vs. Constituents).',
      'Automated Notifications: Email and SMS verification/notifications for hearing reminders via Resend and SMS-Gate.',
      'Analytics Dashboard: Visual insights into case volume, resolution rates, and scheduling efficiency.',
      'Document Generation: Auto-generation of standard Barangay forms (Summons, Certificates to File Action, etc.).',
    ],
    techStack: ['AI Integration','React', ' Django REST', 'Supabase', 'PostgreSQL ', 'Firebase Auth', 'Tailwind CSS', 'Resend API', 'Android SMS Gateway'],
    image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786627216/screencapture-hearease-me-2026-08-13-21_15_36.png',
    role: 'Full-Stack Developer',
    outcome: 'Architected and developed the full-stack web application (React/Vite, Django REST Framework, PostgreSQL/Supabase) as the primary contributor (˜91% of commits), delivering digital case management, role-based access control with Firebase Auth, automated document generation, and an analytics dashboard.',
    links: { github: 'https://github.com/Rthuro/HearEase', live: 'https://www.hearease.me/' },
    isFeatured: true,
  },
  {
    id: 'wmsu-sports-portal',
    title: 'WMSU Sports Portal',
    type: 'Internship',
    category: ['web app'],
    description: 'A full-stack web application for managing sports events, tournaments, matches, and real-time scoring at Western Mindanao State University.',
    overview: 'This project was developed as part of the Practicum / Industry Immersion (CS 141) course at Western Mindanao State University (WMSU). It was built to digitize and modernize the sports event management and scoring operations and building the official public portal of the University Sports Development Office (USDO).',
    problem: 'The University Sports Development Office (USDO) lacked a centralized, modern system for managing sports events, tournaments, matches, real-time scoring and providing a public portal for the University sports office.',
    features: [
      'Public Portal',
      'Authentication & Authorization: Google Authentication for admin',
      'Sports Management',
      'Event Management',
      'Tournament Engine',
      'Match & Scoring System',
      'Team Management',
      'Player Management',
      'Department Management',
      'Reporting & Export',
      'Real-Time Scoring',
    ],
    techStack: ['React', 'Node JS', 'Express', 'Socket.IO', 'Docker', 'Cloudinary', 'Neon', 'PostgreSQL ', 'Firebase Auth', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786978752/wmsu-sports-1.png',
    role: 'Full-Stack Developer',
    outcome: 'Delivered a clean, intuitive interface that handles real-time state synchronization across multiple users.',
    links: { github: 'https://github.com/Rthuro/WMSU-Sports-Scoring-System', live: '#' },
    isFeatured: true,
  },
  {
    id: 'portfolio',
    title: 'Pre-Service Teacher Portfolio Website',
    category: ['web app'],
    description: 'A portfolio website curated only for Client aesthetic.',
    overview: 'Client wanted a custom design suited her favorite aesthetic style and make it more responsive and interactive than simple canva and google site.',
    problem: 'Long paragraphs is not interactive enough to read and catches a few eyes.',
    features: [
      'Interactive Images',
      'Custom animations',
      'Circular Gallery',
      'Masonry Gallery',
      'Carousel Image',
      'Responsive Design',
      'Drive Preview Frame',
    ],
    techStack: ['React', 'React Bits', 'TailwindCSS', 'Framer Motion', 'Vercel', 'Undraw Assets'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    role: 'Full-Stack Developer',
    links: { live: 'https://leesha-rane-benito-portfolio.vercel.app/' },
    isFeatured: false,
  },
];

export const designProjects: Project[] = [
  {
    id: 'repay',
    type: 'Software Engineering',
    title: 'Repay',
    category: ['ux/ui', 'web app', 'mobile dev'],
    description: 'RePay offers a digital platform where borrowers can connect with and apply for loans from various licensed lenders. The platform simplifies the loan application process and provides borrowers with a centralized location to compare loan offers from different Cooperatives. RePay acts as a marketing and customer acquisition channel, enabling them to reach a wider pool of potential borrowers and manage their loan portfolios efficiently.',
    overview: 'As the lead designer and developer, my role was to conceptualize, design, and develop a unified digital solution that seamlessly integrated both the lender and borrower experiences. The project involved a comprehensive design overhaul, transforming RePay into a modern, user-friendly platform, and a full-stack development process to build the robust backend and intuitive frontend that powers the application.',
    problem: 'The lending industry in the Philippines faces a significant challenge: many potential borrowers find it difficult to access loans from formal financial institutions. This challenge stems from several factors, including stringent collateral requirements, complex application processes, and limited accessibility for individuals in remote or underserved communities. These barriers often force individuals to turn to informal lenders, who may charge exorbitant interest rates and exploit borrowers’ financial vulnerabilities.',
    process: 'I conducted a thorough analysis of existing lending platforms, identifying common pain points for both lenders and borrowers. This research formed the foundation of my design strategy, guiding me in creating a solution that addressed these critical needs.',
    features: [
      'Mobile App: Borrowers apply for loans and compare offers from various licensed lenders',
      'Borrower Experience: User-friendly interface for loan applications and loan offer comparison',
      'Lender Acquisition: Streamlined process for lenders to onboard and manage loan applications',
      'Document Management: Digital handling of loan applications and supporting documents',
      'Compliance: Incorporation of regulatory requirements for lending platforms',
      'Notifications: Automated updates for application status and lender communications',
      'Admin Dashboard: For monitoring and managing the platform',
      'Website: Public-facing website for RePay',
    ],
    tools: ['Figma'],
    image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786979264/repay-1.png',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    ],
    role: 'UI/UX Designer',
    outcome: 'Proposed UI/UX design was approved by the panelist on initial project defense of Software Engineering Course Final Project and can proceed to the actual development',
    lessonsLearned: 'Learned the importance of progressive disclosure — showing users only what they need at each step rather than overwhelming them.',
    isFeatured: true,
  },
  {
    id: 'kindiverse',
    type: 'Freelance',
    title: 'Kindiverse',
    category: ['ux/ui', 'game dev'],
    description: 'Kindiverse is a storytelling-based educational app for young children ages 3–8 that encourages play-based learning by allowing them to explore fictional worlds influenced by realworld cultures. This helps them to improve their emotional intelligence, global awareness, and basic skills.',
    overview: 'Through interactive storytelling and captivating activities like puzzles, counting, songs, words, colors, and activities, the platform leverages digital technologies, including computers and mobile devices, to deliver engaging and developmentally appropriate content. It also promotes cultural awareness and global citizenship by exposing children to stories and activities rooted in global traditions, folklore, and festivals, which gives them a broad understanding of various cultures and teaches them to respect and value diversity.',
    problem: 'Young children need developmentally appropriate digital learning tools that make literacy and numeracy skills fun and easy to learn. Parents and educators struggle to find engaging, screen-based resources that go beyond rote memorization, incorporating storytelling, interactive play, and cultural exposure in a safe, age-appropriate environment. Existing apps often lack high-quality visuals, varied activities, or cultural depth, making it difficult for children to stay engaged while learning foundational concepts. Additionally, many tools fail to balance educational content with entertaining elements, resulting in passive screen time rather than active, joyful learning that supports holistic child development.',
    process: 'Conducted user research and competitive analysis and created a comprehensive design system for the entire app.',
    features: [
      'Interactive Cultural World / Map: Interactive map containing multiple imaginary islands or “cultural lands.” Each island represents a different region or cultural theme.', 'Interactive Storytelling: Each island has its own story connected to the traditions, folklore, and customs of its represented culture.', 
      'Educational Games and Mini-Games: After completing or reading a storyline, children can participate in educational activities related to the island\'s story and culture.', 
      'Language Learning: Each island includes language-learning activities where children interact with characters and complete language challenges.', 
      'Voice Input: Children can provide spoken answers for the activities.'],
    tools: ['Figma'],
    image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787430286/Desktop_-_227.png',
    images: [
      'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787429811/Desktop_-_221.png',
      'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787429812/Desktop_-_222.png',
      'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787429812/Desktop_-_223.png',
      'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787429811/Desktop_-_224.png',
      'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787429811/Desktop_-_225.png',
      'https://res.cloudinary.com/rdnkuxzj/image/upload/v1787429811/Desktop_-_226.png',
    ],
    role: 'UI/UX Designer',
    outcome: 'Client achieved a top 1.25 final presentation grade, by developing 216 developmentally appropriate, high-fidelity screens featuring interactive storytelling and play-based learning modules',
    designDecisions: 'Took inspiration from different storytelling games.',
    lessonsLearned: 'Visual hierarchy plays a massive role in conversion — the booking button placement increased tap-through by 60% in A/B testing.',
    isFeatured: true,
  },
  {
    id: 'signspeak',
    title: 'SignSpeak',
    category: ['ux/ui', 'web app'],
    description: 'SignSpeak is an AI-powered translation tool designed to bridge communication gaps between deaf, hard-of-hearing, mute individuals, and non-signers.',
    overview: 'The tool uses computer vision and machine learning to capture American Sign Language (ASL) gestures via a webcam and translate them into real-time English subtitles. Additionally, it features a voice-to-text function, allowing deaf users to understand spoken dialogue. By supporting both ASL-to-text and voice-to-text translation, SignSpeak ensures seamless communication between deaf and non-deaf individuals during online interactions, making virtual meetings, classes, and interviews more inclusive.',
    problem: 'Despite significant advances in communication technology, deaf and hard-of-hearing individuals continue to face substantial barriers in everyday interactions. In professional settings like virtual meetings and interviews, the absence of sign language interpretation often excludes deaf employees from fully participating in discussions. Similarly, students who rely on sign language may struggle to keep up with lectures and spoken-language content in online classes. These communication gaps limit accessibility, create feelings of isolation, and hinder equal opportunities for deaf and hard-of-hearing individuals to engage, express themselves, and contribute fully in both academic and professional environments.',
    process: 'To address these communication barriers, I developed SignSpeak, a dual-function translation tool that supports both ASL-to-English and voice-to-text translation. The project involved extensive research into real-time machine learning models and computer vision techniques for gesture recognition. I designed a user-centric interface that allows for seamless switching between translation modes, ensuring that deaf or hard-of-hearing users can engage naturally in conversations.',
    features: [
      "Real-Time ASL Recognition : Recognizes American Sign Language (ASL) gestures in real time, with inference running locally in the browser.",
      "Speech-to-Text Captioning : Uses the Web Speech API to transcribe spoken audio into real-time text captions.",
      "Adaptive Caption Display : Determines which type of subtitles to display based on the user’s profile or preferences, such as ASL-to-text for hearing users and voice-to-text for deaf or hard-of-hearing users.",
      "Real-Time Caption Overlay : Displays recognized and transcribed text as captions over the video meeting interface.",
      "Chat-Like Caption Format : Groups captions into timestamped chat-style messages with labels indicating whether they originated from voice or sign language.",
      "Caption Mode Selection : Allows users to choose the communication support mode they prefer during meetings.",
      "Sign-to-Text Only : Translates ASL gestures captured through the webcam into on-screen captions.",
      "Voice-to-Text Only : Transcribes audio captured from the microphone and displays it as text captions.",
      "Both Sign + Voice to Text : Processes both ASL and voice inputs simultaneously and displays them as real-time captions."
    ],
    tools: ['Figma'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    ],
    role: 'UI/UX Designer',
    outcome: 'Client achieved a top 1.5 final presentation grade',
    isFeatured: false,
  },
];

// export const motionProjects: Project[] = [
//   {
//     id: 'motion-project-1',
//     title: 'HearEase',
//     category: 'motion',
//     description: 'A short presentation of our thesis \'HearEase\' an AI-driven system employing Deep Neural Networks (DNN) to maximize barangay hearing schedules and forecast case resolution times.',
//     tools: ['CapCut'],
//     image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786562478/12b56ebe-3d1c-47d1-b746-1b0e459b4e9b.png',
//     video: 'https://res.cloudinary.com/rdnkuxzj/video/upload/v1786561327/hearease.mp4',
//     role: 'Motion Designer',
//     isFeatured: false,
//   }, {
//     id: 'motion-project-1',
//     title: 'Curriculum Vitae Video',
//     category: 'motion',
//     description: 'A short presentation for my brother\'s CV video for his requirement.',
//     tools: ['CapCut'],
//     image: 'https://res.cloudinary.com/rdnkuxzj/image/upload/v1786562478/12b56ebe-3d1c-47d1-b746-1b0e459b4e9b.png',
//     video: 'https://res.cloudinary.com/rdnkuxzj/video/upload/v1786561327/hearease.mp4',
//     role: 'Motion Designer',
//     isFeatured: false,
//   }
// ];

export const allProjects: Project[] = [
  ...developmentProjects,
  ...designProjects,
];

export const featuredProjects: Project[] = allProjects.filter((p) => p.isFeatured);

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5 / CSS3', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Firebase', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  // Design
  { name: 'Figma', category: 'design' },
  { name: 'UI/UX Design', category: 'design' },
  { name: 'Wireframing', category: 'design' },
  { name: 'Prototyping', category: 'design' },
  { name: 'Responsive Design', category: 'design' },
  // Tools
  { name: 'Git / GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'CapCut', category: 'tools' },
  { name: 'Vite', category: 'tools' },
];