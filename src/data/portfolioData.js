import profileImg from '../assets/profile.jpg';

const portfolioData = {
  personal: {
    name: "Amit Singh",
    firstName: "Amit",
    lastName: "Singh",
    title: "IT Engineer | AI/ML · Cybersecurity · Web Development",
    shortTitle: "Software Developer & AI/ML Engineer",
    email: "amitttsingh56@gmail.com",
    phone: "+91 8303899741",
    location: "Sant Ravidas Nagar, Bhadohi, Uttar Pradesh - 221314",
    linkedin: "http://www.linkedin.com/in/amit-singh-a7417826b",
    github: "https://github.com/amitttsingh56",
    profileImage: profileImg,
    resumeFile: `${import.meta.env.BASE_URL}Amit_Singh_Resume.pdf`,
  },

  hero: {
    greeting: "Hi, I'm",
    tagline: "Building intelligent systems at the intersection of AI, cybersecurity, and modern web technologies.",
    description:
      "Final-year B.Tech IT student with hands-on experience in machine learning, cybersecurity, and full-stack web development through real-world internships and projects.",
  },

  about: {
    paragraphs: [
      "I'm a final-year Information Technology student at Rajkiya Engineering College, Bijnor, with a strong passion for building technology that solves real-world problems. My journey spans across AI/ML, cybersecurity, and web development — giving me a well-rounded perspective on modern software engineering.",
      "Through internships at CDAC Noida and the AICTE-Lenovo LEAP Program, I've gained hands-on experience in ethical hacking, penetration testing, and AI-driven web application development. I thrive in collaborative environments and enjoy tackling complex challenges under pressure — as demonstrated by my participation in national-level hackathons.",
    ],
    highlights: [
      {
        icon: "🎓",
        title: "B.Tech in IT",
        description: "Rajkiya Engineering College, Bijnor — CGPA: 7.93",
      },
      {
        icon: "🤖",
        title: "AI/ML & Cybersecurity",
        description:
          "Hands-on experience through internships in AI-driven development and ethical hacking",
      },
      {
        icon: "🛠️",
        title: "Project-Driven Learner",
        description:
          "From deep learning image enhancement to deployed web applications",
      },
    ],
  },

  skills: [
    {
      category: "Machine Learning & Data",
      icon: "🧠",
      items: [
        "Machine Learning",
        "Data Analysis",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
    },
    {
      category: "Cybersecurity",
      icon: "🔐",
      items: ["Network Security", "Kali Linux", "Wireshark", "Nmap"],
    },
    {
      category: "Programming & Tools",
      icon: "💻",
      items: [
        "Python",
        "SQL",
        "Data Structures & Algorithms",
        "Git/GitHub",
      ],
    },
    {
      category: "Web Technologies",
      icon: "🌐",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TensorFlow",
        "OpenCV",
      ],
    },
    {
      category: "Soft Skills",
      icon: "🤝",
      items: [
        "Teamwork",
        "Problem Solving",
        "Communication",
        "Time Management",
        "Adaptability",
        "Critical Thinking",
        "Analytical Thinking",
      ],
    },
  ],

  experience: [
    {
      id: 1,
      role: "AICTE Intern",
      organization: "Lenovo LEAP NextGen Scholar Program",
      type: "Remote",
      duration: "Jun – Jul 2026",
      certificateUrl:
        "https://drive.google.com/file/d/13q_uSN8VEVYW4swwkklPcBzXN8WsRKzr/view",
      description: [
        'Completed a 6-week AICTE internship on "AI-Driven Web Application & Product Development," a CSR initiative of Lenovo implemented by BharatCares in association with AICTE.',
        "Integrated AI capabilities into web applications and product development workflows through hands-on development.",
        "Recognized for dedication, commitment, and strong learning ability upon successful completion (Certificate ID: 6388789).",
      ],
      tags: ["AI", "Web Development", "Product Development", "AICTE"],
    },
    {
      id: 2,
      role: "Cyber Security Intern",
      organization: "CDAC Noida",
      type: "Remote",
      duration: "Jul – Aug 2025",
      certificateUrl:
        "https://drive.google.com/file/d/1LzYESpdZEFhfCBOI-DwUVXtqqXGh2EPu/view?usp=drivesdk",
      description: [
        "Completed training in Ethical Hacking and Penetration Testing.",
        "Performed vulnerability scanning, reconnaissance, and basic penetration testing tasks.",
        "Applied cybersecurity best practices for system analysis and report preparation.",
      ],
      tags: [
        "Ethical Hacking",
        "Penetration Testing",
        "Cybersecurity",
        "Vulnerability Scanning",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Low Light Image Enhancement using MIRNet",
      category: "AI / Deep Learning",
      date: "Jan 2026",
      featured: true,
      description:
        "Implemented a deep learning-based MIRNet model to enhance low-light images. Performed image preprocessing, model training, and inference on low-light datasets. Improved image brightness, contrast, and color while preserving texture details.",
      features: [
        "Deep learning-based image enhancement",
        "MIRNet architecture implementation",
        "Image preprocessing pipeline",
        "Model training and inference",
        "Brightness, contrast, and color improvement",
        "Texture detail preservation",
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "NumPy"],
      github: "https://github.com/amitttsingh56/low-light-image-enhancement",
      live: null,
    },
    {
      id: 2,
      title: "Bus Wali Playlist",
      category: "Web Development",
      date: "Aug 2025",
      featured: false,
      description:
        "Built a responsive music playlist web app featuring categorized travel modes and YouTube integration. Implemented dynamic playlist switching and interactive controls for seamless music playback. Deployed on GitHub Pages with a responsive, user-friendly UI optimized for mobile and desktop.",
      features: [
        "Categorized travel mode playlists",
        "YouTube integration",
        "Dynamic playlist switching",
        "Interactive playback controls",
        "Responsive UI for mobile and desktop",
        "Deployed on GitHub Pages",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/amitttsingh56/music-",
      live: "https://amitttsingh56.github.io/music-/",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Rajkiya Engineering College, Bijnor",
      duration: "2023 – 2027",
      cgpa: "7.93",
      coursework: [
        "Programming in C",
        "Java",
        "Python",
        "Operating Systems",
        "DBMS",
        "Data Structures & Algorithms",
        "Computer Architecture",
        "Computer Networks",
      ],
    },
  ],

  hackathons: [
    {
      name: "RIFT '26",
      type: "Pan-India 24-Hour Open Innovation Hackathon",
      organizer: "PW Institute of Innovation",
      description:
        "Participated in RIFT '26, a 24-hour open innovation hackathon held concurrently across Bengaluru, Pune, Noida, and Lucknow, competing alongside 2,000+ developers nationwide. Collaborated in a team setting under time constraints to design and build a working solution within the hackathon timeframe.",
      certificateUrl:
        "https://rift2026.vercel.app/verify/38907b3f-a17c-43d5-b922-1f6bc4ab49df",
      highlights: [
        "24-hour open innovation hackathon",
        "2,000+ developers nationwide",
        "Multi-city event: Bengaluru, Pune, Noida, Lucknow",
        "Team-based solution design and development",
      ],
    },
  ],

  extracurricular: [
    {
      title: "Student Educator",
      organization: "Koshis Foundation",
      description:
        "Volunteered as a Student Educator, teaching academic subjects to local school children to improve their learning outcomes.",
      icon: "📚",
    },
  ],
};

export default portfolioData;
