export const profile = {
  name: 'Naomi Collins',
  initials: 'NC',
  title: 'Data Analyst & Business Intelligence Specialist',
  tagline: 'Transforming complex business data into actionable insights through analytics, visualisation and machine learning.',
  location: 'Bangalore, India',
  email: 'naomicollins.career@gmail.com',
  phone: '+91 9538488153',
  github: 'https://github.com/NaomiCollins',
  linkedin: 'https://www.linkedin.com/in/naomianncollins/',
  resumeUrl: '/Naomi-Collins-Resume.pdf',
  summary:
    'Data Analyst with 5+ years of experience delivering data-driven solutions across operations, finance, CRM and business intelligence. Skilled in SQL, Python, Power BI, Tableau, Excel and predictive analytics, with an MSc in Big Data & Business Intelligence.',
  stats: [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects', value: '12+' },
    { label: 'Certificates', value: '35+' },
    { label: 'Core Technologies', value: '10+' },
  ],
};

export type SkillGroup = {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 95 },
      { name: 'R', level: 75 },
    ],
  },
  {
    category: 'Business Intelligence',
    icon: 'BarChart3',
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'Tableau', level: 90 },
      { name: 'Excel', level: 95 },
      { name: 'DAX', level: 85 },
    ],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'BigQuery', level: 85 },
      { name: 'Oracle', level: 80 },
    ],
  },
  {
    category: 'Data Analysis & Machine Learning',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 85 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Statistics', level: 85 },
    ],
  },
  {
    category: 'Business & Enterprise Tools',
    icon: 'Briefcase',
    skills: [
      { name: 'Salesforce', level: 90 },
      { name: 'NetSuite', level: 85 },
      { name: 'Alteryx', level: 80 },
      { name: 'Documentum', level: 85 },
    ],
  },
  {
    category: 'Professional Skills',
    icon: 'Users',
    skills: [
      { name: 'Data Storytelling', level: 90 },
      { name: 'Stakeholder Management', level: 90 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Business Analysis', level: 90 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  category: string;
};

export const projects: Project[] = [
  {
    title: 'Customer Churn Prediction using Machine Learning',
    description:
      'Developed a predictive machine learning model using Python and Scikit-learn to identify customers at risk of churn from over 10,000 banking records. Performed data cleaning, feature engineering, model evaluation and performance optimisation to support customer retention strategies.',
    image: '/images/customer-churn-python.png',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    github: 'YOUR_GITHUB_REPOSITORY',
    category: 'Machine Learning',
  },

  {
    title: 'Customer Churn Analysis Dashboard',
    description:
      'Designed an interactive Tableau dashboard analysing customer demographics, contract types, payment methods and service usage to identify the primary drivers of customer churn. Delivered business recommendations to improve customer retention.',
    image: '/images/customer-churn-tableau.png',
    tags: ['Tableau', 'Dashboard', 'Data Visualisation'],
    github: 'YOUR_GITHUB_REPOSITORY',
    category: 'Tableau',
  },

  {
    title: 'Data Analytics Job Market Dashboard',
    description:
      'Built an interactive Tableau dashboard using real-world recruitment data to analyse salary trends, hiring demand and the most sought-after technical skills across Data Analyst, Data Scientist and Data Engineer roles.',
    image: '/images/job-market-tableau.png',
    tags: ['Tableau', 'Analytics', 'Visualisation'],
    github: 'YOUR_GITHUB_REPOSITORY',
    category: 'Tableau',
  },

  {
    title: 'Motorcycle Parts Sales Analysis',
    description:
      'Analysed wholesale motorcycle parts sales using PostgreSQL to identify revenue trends across product lines and warehouses. Applied SQL aggregations and business calculations to determine net revenue after payment processing fees and support data-driven sales decisions.',
    image: '/images/motorcycle-sales.png',
    tags: ['SQL', 'PostgreSQL', 'Data Analysis'],
    github: 'YOUR_GITHUB_REPOSITORY',
    category: 'SQL',
  },

  {
    title: 'International Student Mental Health Analysis',
    description:
      'Investigated the relationship between study abroad, depression, social connectedness and acculturative stress using PostgreSQL. Analysed trends based on students’ length of stay to provide evidence-based insights into international student wellbeing.',
    image: '/images/student-mental-health.png',
    tags: ['SQL', 'PostgreSQL', 'Data Analytics'],
    github: 'YOUR_GITHUB_REPOSITORY',
    category: 'SQL',
  },

  {
    title: 'Chicago Divvy Bike Sharing Analysis',
    description:
      'Created an interactive Tableau dashboard analysing rider behaviour, geographical demand and demographic trends. Used calculated fields, parameters, maps and data visualisations to provide operational insights for capacity planning.',
    image: '/images/bike-sharing.png',
    tags: ['Tableau', 'GIS', 'Dashboard'],
    github: 'YOUR_GITHUB_REPOSITORY',
    category: 'Tableau',
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Freelance Operations & Data Analyst',
    company: 'Clifton Group',
    period: 'Jun 2023 – Present',
    location: 'London, UK',
    description:
      'Delivering operational analytics, financial reporting and demand forecasting solutions to improve business performance across retail operations.',
    highlights: [
      'Analysed over 10,000 Deliveroo transactions to reduce stock waste by 22%.',
      'Built forecasting models improving inventory accuracy by 30%.',
      'Managed financial reporting, VAT reconciliation and supplier analysis across three business entities.',
    ],
  },

  {
    role: 'Documentation Controller',
    company: 'Tecnicas Reunidas',
    period: 'Jun 2022 – Jun 2023',
    location: 'Bangalore, India',
    description:
      'Managed engineering documentation, compliance reporting and structured data workflows for large international projects.',
    highlights: [
      'Managed more than 1,500 engineering documents with zero compliance errors.',
      'Improved document retrieval efficiency by 30% through metadata optimisation.',
      'Performed structured data cleaning and transformation for compliance reporting.',
    ],
  },

  {
    role: 'Finance & Operations Assistant / Sales Development & CRM Analyst',
    company: 'Azuga (Bridgestone Company)',
    period: 'Jan 2021 – Dec 2022',
    location: 'Bangalore, India',
    description:
      'Supported finance, operations and sales teams through reporting, KPI dashboards and CRM analytics.',
    highlights: [
      'Built Excel dashboards used by senior management for KPI monitoring.',
      'Improved billing accuracy to 98% and reduced invoice errors by 20%.',
      'Analysed Salesforce CRM data to improve lead conversion by 25%.',
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
  grade: string;
};

export const education: Education[] = [
  {
    degree: 'MSc Big Data & Business Intelligence',
    institution: 'University of Greenwich',
    period: '2023 – 2024',
    location: 'London, UK',
    details:
      'Specialised in Big Data, Business Intelligence, Machine Learning, Data Warehousing and Advanced Analytics.',
    grade: 'Merit',
  },
  {
    degree: 'BSc Physics, Mathematics & Computer Science',
    institution: "St. Joseph's University",
    period: '2017 – 2020',
    location: 'Bangalore, India',
    details:
      'Built a strong foundation in mathematics, statistics, programming and analytical problem solving.',
    grade: 'First Class',
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialId: string;
};

export const certifications: Certification[] = [
  {
    name: 'Data Analyst in Power BI',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Intermediate Data Modeling in Power BI',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Intermediate DAX in Power BI',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Case Study: HR Analytics in Power BI',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Case Study: Analyzing Customer Churn in Tableau',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Case Study: Analyzing Job Market Data in Tableau',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Functions for Manipulating Data in PostgreSQL',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
  {
    name: 'Data Manipulation with pandas',
    issuer: 'DataCamp',
    year: '2026',
    credentialId: '',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
