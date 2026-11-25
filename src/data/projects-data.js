export const projectsData = [
  {
    id: "agri-pulse",
    title: "Agri Pulse AI — Mandi Supply Chain Analytics",
    subtitle: "Agricultural Market Intelligence & Price Trend Analytics",
    category: "AI / ML",
    categoryLabel: "AI / ML & Data Science",
    featured: true,
    rank: 1,
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Data Analytics", "Data Visualization"],
    githubUrl: "https://github.com/Devpratapsingh204/Supply-Chain-Analysis-Mandi-Data",
    liveDemoUrl: null, // No live deployment URL
    accentColor: "#10b981", // Emerald Green
    secondaryColor: "#f59e0b", // Amber/Gold
    summary: "Comprehensive supply chain data analysis using official Indian Government Mandi datasets to track market arrivals, price fluctuations, and seasonal commodity patterns.",
    caseStudy: {
      whyIBuiltIt: "Indian agricultural markets produce massive daily price and arrival datasets across hundreds of regional Mandis. However, farmers and supply chain buyers lack accessible visual analytics to anticipate price crashes or supply shortages.",
      problem: "High market volatility and fragmented price reporting make it difficult to optimize crop selling times and agricultural logistics, leading to financial uncertainty for growers.",
      approach: "Extracted and structured government Mandi records using Python and Pandas. Computed rolling price moving averages, seasonal variance, and district-level arrival correlations. Built custom trend plots and commodity distribution charts in Jupyter Notebooks.",
      results: [
        "Analyzed multi-district mandi records for major commodities (wheat, rice, pulses).",
        "Identified key seasonal price anomaly patterns and peak arrival windows.",
        "Structured modular data analysis workflows for scalable commodity trend tracking."
      ],
      learnings: "Mastered data cleaning for noisy real-world public datasets, time-series data aggregation in Pandas, and translating raw agricultural metrics into clear visual insights."
    }
  },
  {
    id: "ai-interview-simulator",
    title: "AI Interview Simulator",
    subtitle: "Real-Time AI Mock Interview & Candidate Feedback Engine",
    category: "AI / ML",
    categoryLabel: "AI / ML & NLP",
    featured: true,
    rank: 2,
    technologies: ["Python", "Machine Learning", "Natural Language Processing", "Web UI"],
    githubUrl: "https://github.com/Devpratapsingh204/AI_interview_simulator",
    liveDemoUrl: null,
    accentColor: "#06b6d4", // Electric Cyan
    secondaryColor: "#6366f1", // Indigo
    summary: "Interactive AI interview practice platform providing candidate evaluation, response scoring, technical question scenarios, and structured feedback.",
    caseStudy: {
      whyIBuiltIt: "Students preparing for technical roles often lack access to instant, objective interview feedback and realistic mock scenario practice.",
      problem: "Traditional mock interview practice relies heavily on human interviewer availability and lacks standardized metrics to measure answer technical depth, clarity, and keyword relevance.",
      approach: "Engineered an AI-driven interview simulator in Python. The system delivers domain-specific technical questions, records text/verbal candidate answers, and processes responses against evaluation heuristics to calculate instant score breakdowns.",
      results: [
        "Delivered automated candidate evaluation feedback with score cards across technical accuracy and clarity.",
        "Created an interactive mock interview interface for domain-specific question practice.",
        "Integrated instant performance metrics to help job seekers identify preparation gaps."
      ],
      learnings: "Gained hands-on experience in NLP text scoring models, structuring candidate feedback UI matrices, and building user evaluation workflows in Python."
    }
  },
  {
    id: "pathlight-dijkstra",
    title: "Pathlight — Dijkstra Shortest Path Visualizer",
    subtitle: "Interactive Graph Routing Algorithm & Pathfinding Visualizer",
    category: "DSA",
    categoryLabel: "Algorithms & DSA",
    featured: true,
    rank: 3,
    technologies: ["C++", "HTML5", "CSS3", "JavaScript", "Graph Algorithms"],
    githubUrl: "https://github.com/Devpratapsingh204/DSA_Shortest_Pathlight_Dijkstra_Visualizer_DEV_PRATAP",
    liveDemoUrl: null,
    accentColor: "#f59e0b", // Warm Amber
    secondaryColor: "#14b8a6", // Teal
    summary: "Interactive navigation system implementing Dijkstra's shortest path algorithm in C++ paired with an animated graph traversal web interface.",
    caseStudy: {
      whyIBuiltIt: "Graph algorithms like Dijkstra's are core to computer science and navigation systems (e.g. GPS, network routing), but text implementations obscure how the algorithm explores candidate paths.",
      problem: "Static code explanations make it difficult to visualize edge relaxation, min-priority queue updates, and node visited state transitions during execution.",
      approach: "Engineered a robust C++ graph routing engine implementing weighted adjacency lists and priority queues. Paired it with an animated HTML/CSS/JS visualizer where users can see nodes glow as paths are discovered step-by-step.",
      results: [
        "Implemented clean C++ Dijkstra shortest path algorithm with weighted graph support.",
        "Built an interactive step-by-step visual graph traversal animation showing active nodes and edge weights.",
        "Generated real-time shortest distance tables and optimal path highlight paths."
      ],
      learnings: "Deepened graph theory mastery (Adjacency Lists, Priority Queues, Time Complexity O((V+E)logV)) and bridging low-level C++ algorithm logic with dynamic web visualizations."
    }
  },

  {
  id: "saas-analytics-dashboard",

  title: "SaaS Analytics Dashboard",

  subtitle: "Business Revenue, Profit & Sales Performance Analytics",

  category: "DATA",

  categoryLabel: "Data & BI Analytics",

  featured: false,

  rank: 4,

  technologies: ["Power BI", "Excel", "DAX", "Power Query", "Data Analytics"],

  githubUrl: null,

  liveDemoUrl: "https://app.powerbi.com/groups/me/reports/9929e733-c996-469d-a174-2e78605e15da/ba6087528c45d9dac692?experience=power-bi",

  accentColor: "#f59e0b",

  secondaryColor: "#06b6d4",

  summary: "Interactive SaaS business analytics dashboard built to track revenue, profit, orders, discounts, and overall business performance through executive-focused BI reporting.",

  caseStudy: {

    whyIBuiltIt: "Businesses generate large volumes of sales and customer data, but raw tables make it difficult for decision-makers to quickly understand revenue performance, profitability, and operational trends.",

    problem: "Without a centralized analytical dashboard, business stakeholders may struggle to identify profitable segments, monitor sales performance, and compare key business KPIs efficiently.",

    approach: "Built an interactive Power BI dashboard using Excel data preparation, Power Query transformations, and DAX measures. Designed KPI cards, analytical visuals, and business performance views to convert raw SaaS sales data into actionable insights.",

    results: [
      "Analyzed $2.30M in total revenue across 5K orders.",
      "Tracked $286.40K total profit and a 12% profit margin.",
      "Created interactive KPI-driven business reporting for revenue, profit, orders, and discount analysis."
    ],

    learnings: "Strengthened practical skills in Power BI dashboard development, DAX calculations, Power Query transformations, KPI design, and communicating business insights through data visualization."

  }

},

  {
    id: "hotel-intelligence",
    title: "Hotel Market Intelligence Dashboard",
    subtitle: "Real-Time Hotel Performance & Occupancy Analytics BI",
    category: "DATA",
    categoryLabel: "Data & BI Analytics",
    featured: false,
    rank: 5,
    technologies: ["React", "TypeScript", "Vite", "Apache ECharts"],
    githubUrl: "https://github.com/Devpratapsingh204/hotel-intelligence-dashboard",
    liveDemoUrl: null,
    accentColor: "#3b82f6", // Royal Blue
    secondaryColor: "#8b5cf6", // Purple
    summary: "Interactive BI analytics dashboard built with React, TypeScript, and Apache ECharts to visualize hotel occupancy trends, revenue per available room (RevPAR), and market filters.",
    caseStudy: null
  },
  {
    id: "cpu-scheduler",
    title: "CPU Scheduling Algorithm Simulator",
    subtitle: "OS Scheduling Visualizer & Gantt Chart Comparison Engine",
    category: "DSA",
    categoryLabel: "Systems & Algorithms",
    featured: false,
    rank: 6,
    technologies: ["Python", "Tkinter", "Operating Systems", "Data Visualization"],
    githubUrl: "https://github.com/Devpratapsingh204/cpu-scheduler-simulator",
    liveDemoUrl: null,
    accentColor: "#8b5cf6", // Amethyst Purple
    secondaryColor: "#ec4899", // Pink
    summary: "Interactive OS CPU scheduler simulator featuring Gantt chart visualizers, algorithm comparison (FCFS, SJF, Priority, Round Robin), process queue management, and turnaround statistics.",
    caseStudy: null
  },


  {
    id: "ott-platform",
    title: "OTT Streaming Experience Platform",
    subtitle: "Cinematic Media Portal & Content Discovery Interface",
    category: "WEB",
    categoryLabel: "Web & Software",
    featured: false,
    rank: 7,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Devpratapsingh204/OTT-Platform",
    liveDemoUrl: null,
    accentColor: "#ef4444", // Crimson Red
    secondaryColor: "#f59e0b", // Gold
    summary: "Modern web streaming interface featuring catalog browsing, genre filter tags, movie trailer cards, and video player UI layout.",
    caseStudy: null
  }
];
