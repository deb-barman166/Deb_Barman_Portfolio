import { SkillCategory, SkillLevel, Project, Article, Experience } from './types';

// Helper to calculate numerical value for charts
export const getLevelValue = (level: SkillLevel): number => {
  switch (level) {
    case SkillLevel.Beginner: return 35;
    case SkillLevel.Advance: return 65;
    case SkillLevel.Expert: return 85;
    case SkillLevel.Legend: return 100;
    default: return 0;
  }
};

export const PROJECTS: Project[] = [
  {
    title: "AI Automation Agent",
    description: "A sophisticated workflow automation system built with N8N and Python. It leverages Gen AI to process unstructured data and trigger complex actions across multiple services.",
    technologies: ["N8N", "Python", "Gen AI", "API Integration"],
    link: "#",
    github: "#"
  },
  {
    title: "Predictive Market Analyzer",
    description: "Financial analysis tool using Python's Pandas and Scikit Learn to identify market trends and visualize data patterns with Matplotlib for informed decision making.",
    technologies: ["Python", "Pandas", "Scikit Learn", "Matplotlib"],
    github: "#"
  },
  {
    title: "Creative Vision Portfolio",
    description: "This high-performance portfolio website featuring a custom 'Google Gamma' dark theme, integrated AI chat agent, and dynamic data visualization.",
    technologies: ["React", "Tailwind CSS", "Gemini API", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Circuit Logic Simulator",
    description: "Educational tool for visualizing electronic circuit behavior. Combines deep technical knowledge of electronics with software simulation.",
    technologies: ["Python", "PyGame", "Electronics", "Physics Engine"],
    github: "#"
  }
];

export const ARTICLES: Article[] = [
  {
    title: "The Future of UI Design with Gen AI",
    excerpt: "Exploring how Generative AI is reshaping the landscape of user interface design and the role of human creativity in a machine-driven era.",
    category: "Design & AI",
    readTime: "5 min read",
    date: "Oct 24, 2023",
    link: "#"
  },
  {
    title: "Mastering Python for Automation",
    excerpt: "A deep dive into using Python scripts and N8N to automate repetitive daily tasks, optimizing workflows for maximum productivity.",
    category: "Engineering",
    readTime: "8 min read",
    date: "Nov 12, 2023",
    link: "#"
  },
  {
    title: "Atomic Habits for Developers",
    excerpt: "Applying the principles of Atomic Habits to coding routines. How small, consistent changes lead to legendary engineering skills.",
    category: "Self Growth",
    readTime: "4 min read",
    date: "Dec 05, 2023",
    link: "#"
  },
  {
    title: "Understanding Neural Networks",
    excerpt: "Breaking down the complexity of neural networks into simple, digestible concepts for beginners in the field of Artificial Intelligence.",
    category: "AI Research",
    readTime: "6 min read",
    date: "Jan 15, 2024",
    link: "#"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Chief AI Architect",
    company: "FutureTech Solutions",
    type: "Full-time",
    period: "2020 - Present",
    highlights: [
      "Spearheaded the integration of Generative AI into legacy enterprise systems.",
      "Architected automated workflows using N8N that reduced operational overhead.",
      "Built custom Python-based AI agents for real-time data analysis."
    ],
    technologies: ["Python", "N8N", "Gen AI", "TensorFlow"],
    impact: "Reduced operational costs by 40% through intelligent automation."
  },
  {
    role: "Senior Product Designer & Dev",
    company: "Creative Studio X",
    type: "Contract",
    period: "2015 - 2020",
    highlights: [
      "Led the UI/UX direction for major fintech products and dashboards.",
      "Bridged the design-engineering gap by implementing complex React frontends.",
      "Established comprehensive design systems used by cross-functional teams."
    ],
    technologies: ["React", "TypeScript", "Figma", "Design Systems"],
    impact: "Accelerated development cycles by 30% via unified design tokens."
  },
  {
    role: "Python Automation Engineer",
    company: "DataFlow Systems",
    type: "Full-time",
    period: "2010 - 2015",
    highlights: [
      "Developed robust backend scripts for big data processing and ETL pipelines.",
      "Pioneered early machine learning implementations for predictive modeling.",
      "Optimized database queries for high-volume financial transactions."
    ],
    technologies: ["Python", "Pandas", "Scikit Learn", "SQL"],
    impact: "Improved data processing speed by 300% for client reporting."
  },
  {
    role: "Visual Design Lead",
    company: "Digital Arts Inc.",
    type: "Self-Employed",
    period: "1990 - 2010",
    highlights: [
      "Two decades of mastery in graphic design, branding, and visual storytelling.",
      "Evolved from print media to digital interfaces, setting industry standards.",
      "Managed client relationships and delivered high-stakes creative projects."
    ],
    technologies: ["Adobe Suite", "Branding", "Print", "Digital Art"],
    impact: "Delivered award-winning campaigns for Fortune 500 clients."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'coding',
    title: 'Coding Skills',
    icon: 'Code',
    description: 'Polyglot engineering expertise focused on scalable architecture and data-driven applications.',
    keyHighlights: [
      'Advanced Python development for data analysis and backend logic',
      'Building responsive, high-performance web interfaces',
      'Complex algorithmic problem solving and optimization',
      'Seamless API integration and database architecture'
    ],
    skills: [
      {
        name: 'Python',
        level: SkillLevel.Advance,
        subSkills: [
          { name: 'Pandas', level: SkillLevel.Advance },
          { name: 'Matplotlib', level: SkillLevel.Advance },
          { name: 'Seaborn', level: SkillLevel.Advance },
          { name: 'Numpy', level: SkillLevel.Beginner },
          { name: 'Scikit Learn', level: SkillLevel.Beginner },
          { name: 'Pygame', level: SkillLevel.Beginner },
          { name: 'PyTorch', level: SkillLevel.Beginner },
        ]
      },
      { name: 'Code Error Solving with AI', level: SkillLevel.Advance },
      { name: 'HTML', level: SkillLevel.Beginner },
      { name: 'CSS', level: SkillLevel.Beginner },
      { name: 'JavaScript', level: SkillLevel.Beginner },
      { name: 'Java', level: SkillLevel.Beginner },
      { name: 'C', level: SkillLevel.Beginner },
      { name: 'C++', level: SkillLevel.Beginner },
      { name: 'C#', level: SkillLevel.Beginner },
      { name: 'PHP', level: SkillLevel.Beginner },
      { name: 'MySQL', level: SkillLevel.Beginner },
      { name: 'JSON', level: SkillLevel.Beginner },
    ]
  },
  {
    id: 'technical',
    title: 'Technical & AI',
    icon: 'Cpu',
    description: 'Leveraging cutting-edge Artificial Intelligence to accelerate workflows and pioneer new solutions.',
    keyHighlights: [
      'Expert-level prompt engineering for advanced LLMs',
      'Designing and deploying autonomous AI agents',
      'Automating complex research and content pipelines',
      'Seamless integration of AI tools into daily development'
    ],
    skills: [
      { name: 'AI Tools (Expert)', level: SkillLevel.Expert },
      { name: 'ChatGPT', level: SkillLevel.Expert },
      { name: 'Google AI Studio & Gemini', level: SkillLevel.Advance },
      { name: 'Prompt Engineering', level: SkillLevel.Advance },
      { name: 'Perplexity & Microsoft Copilot', level: SkillLevel.Advance },
      { name: 'Nano Banana 🍌', level: SkillLevel.Advance },
      { name: 'AI Image Generation', level: SkillLevel.Advance },
      { name: 'AI Research', level: SkillLevel.Advance },
      { name: 'AI Excel & PowerPoint', level: SkillLevel.Advance },
      { name: 'Video/Photo Editing', level: SkillLevel.Advance },
      { name: 'Photo/Video Shooting', level: SkillLevel.Advance },
      { name: 'V.O-3', level: SkillLevel.Beginner },
      { name: 'AI Content Creation', level: SkillLevel.Beginner },
      { name: 'AI Video Generation', level: SkillLevel.Beginner },
    ]
  },
  {
    id: 'high-skills',
    title: 'High-Level Tech',
    icon: 'Zap',
    description: 'Advanced technical capabilities focusing on automation, data science, and machine learning infrastructure.',
    keyHighlights: [
      'Building sophisticated N8N automation workflows',
      'Foundational knowledge in Machine Learning paradigms',
      'Data-driven decision making through analytics',
      'Conceptualizing AI-driven system architectures'
    ],
    skills: [
      { name: 'N8N AI Automation', level: SkillLevel.Advance },
      { name: 'Machine Learning', level: SkillLevel.Beginner },
      { name: 'Deep Learning', level: SkillLevel.Beginner },
      { name: 'AI Agent Building', level: SkillLevel.Beginner },
      { name: 'Gen AI', level: SkillLevel.Beginner },
      { name: 'Data Analysis', level: SkillLevel.Beginner },
      { name: 'Data Science', level: SkillLevel.Beginner },
    ]
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: 'Brain',
    description: 'Cognitive attributes and interpersonal skills that drive leadership, innovation, and resilience.',
    keyHighlights: [
      'Legendary capability in creative problem solving',
      'High-level critical thinking and strategic planning',
      'Exceptional self-control and disciplined execution',
      'Adaptability in fast-paced, evolving environments'
    ],
    skills: [
      { name: 'Creativity', level: SkillLevel.Legend },
      { name: 'Observation', level: SkillLevel.Legend },
      { name: 'Imagination', level: SkillLevel.Legend },
      { name: 'Critical Thinking', level: SkillLevel.Expert },
      { name: 'Self Control', level: SkillLevel.Expert },
      { name: 'Discipline', level: SkillLevel.Advance },
      { name: 'Problem Solving', level: SkillLevel.Advance },
      { name: 'Decision Making', level: SkillLevel.Advance },
      { name: 'Self-Care', level: SkillLevel.Advance },
      { name: 'Communication', level: SkillLevel.Beginner },
      { name: 'Leadership', level: SkillLevel.Beginner },
      { name: 'Time Management', level: SkillLevel.Beginner },
      { name: 'Stress Management', level: SkillLevel.Beginner },
      { name: 'Storytelling', level: SkillLevel.Beginner },
    ]
  },
  {
    id: 'habits',
    title: 'Habits & Routine',
    icon: 'BookOpen',
    description: 'The disciplined systems and daily practices that ensure continuous growth and peak performance.',
    keyHighlights: [
      'Relentless pursuit of new knowledge daily',
      'Strategic mental exercise via Chess and puzzles',
      'Consistent task completion and goal tracking',
      'Mindfulness practices for mental clarity'
    ],
    skills: [
      { name: 'Learn Something New', level: SkillLevel.Legend },
      { name: 'Play Chess', level: SkillLevel.Expert },
      { name: 'Complete Daily Tasks', level: SkillLevel.Expert },
      { name: 'Creative Action Daily', level: SkillLevel.Expert },
      { name: 'Meditation', level: SkillLevel.Advance },
      { name: 'Read New Books (Atomic Habits)', level: SkillLevel.Advance },
    ]
  },
  {
    id: 'study',
    title: 'Study & Knowledge',
    icon: 'BookOpen',
    description: 'A diverse academic foundation spanning sciences, humanities, and electronics.',
    keyHighlights: [
      'Deep understanding of human psychology',
      'Technical knowledge in electronics and physics',
      'Broad geographical and historical awareness',
      'Philosophical inquiry and logical reasoning'
    ],
    skills: [
      { name: 'Human Brain Power', level: SkillLevel.Expert },
      { name: 'Geography', level: SkillLevel.Advance },
      { name: 'Psychology', level: SkillLevel.Advance },
      { name: 'Science & Electronics', level: SkillLevel.Advance },
      { name: 'Mathematics', level: SkillLevel.Advance },
      { name: 'Philosophy', level: SkillLevel.Beginner },
      { name: 'History', level: SkillLevel.Beginner },
      { name: 'Sanskrit', level: SkillLevel.Beginner },
    ]
  },
  {
    id: 'other',
    title: 'Creative & Other',
    icon: 'Palette',
    description: 'Multifaceted creative talents ranging from circuit design to visual storytelling.',
    keyHighlights: [
      'Expert idea generation and conceptualization',
      'Hands-on electronic circuit building and prototyping',
      'Strategic gaming and pattern recognition',
      'Visual diagramming with AI assistance'
    ],
    skills: [
      { name: 'Idea Generation', level: SkillLevel.Expert },
      { name: 'Deep Thinking', level: SkillLevel.Expert },
      { name: 'Electric Circuits Building', level: SkillLevel.Expert },
      { name: 'Book Study with AI', level: SkillLevel.Expert },
      { name: 'Gaming (Minecraft/FreeFire)', level: SkillLevel.Expert },
      { name: 'Creative Ideas', level: SkillLevel.Expert },
      { name: 'Visual Diagram with AI', level: SkillLevel.Advance },
      { name: 'Teaching Friends', level: SkillLevel.Advance },
      { name: 'YouTube Videos & PDF Summary with AI', level: SkillLevel.Advance },
      { name: 'Easy to Explain', level: SkillLevel.Advance },
      { name: 'Computer (CITA/DITA)', level: SkillLevel.Advance },
      { name: 'Drawing', level: SkillLevel.Advance },
      { name: 'House Design', level: SkillLevel.Beginner },
      { name: 'Trading', level: SkillLevel.Beginner },
      { name: 'Writing Books/Life Story', level: SkillLevel.Beginner },
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Palette',
    description: 'Communication proficiency across multiple languages for global interaction.',
    keyHighlights: [
      'Native proficiency in Bangla',
      'Professional working proficiency in English',
      'Conversational fluency in Hindi'
    ],
    skills: [
      { name: 'Bangla', level: SkillLevel.Legend },
      { name: 'English', level: SkillLevel.Advance },
      { name: 'Hindi', level: SkillLevel.Advance },
    ]
  }
];