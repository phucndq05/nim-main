type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SQL Injection Detector',
    description: 'ML models using Naive Bayes, Random Forest, and XGBoost for SQLi detection + Flask web demo.',
    link: 'https://github.com/phucndq05/SQL_INJECTION_DETECTOR',
    id: 'project1',
  },
  {
    name: 'Bank Churn Prediction',
    description: 'E2E pipeline (EDA → preprocessing → model compare → Flask demo), optimized Recall for business goals.',
    link: 'https://github.com/phucndq05/Bank-Churn-Prediction',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [] // Có thể để trống nếu chưa có kinh nghiệm

export const BLOG_POSTS: BlogPost[] = [] // Có thể để trống nếu chưa có blog

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/phucndq05',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/phucndq05/',
  },
  {
    label: 'Facebook',
    link: 'https://facebook.com/phucquang.3107',
  },
]

export const EMAIL = '23521204@gm.uit.edu.vn'

export const name = 'Nguyễn Đặng Quang Phúc'
export const about = () => {
  return 'Data Scientist | AI Engineer'
}
export const bio = () => {
  return "Transforming Data into Intelligence, One Algorithm at a Time"
}

export const education = [
  {
    school: 'University of Information Technology – VNUHCM',
    degree: "Bachelor's Degree",
    year: 'Expected 2027'
  }
]

export const certifications = [
  {
    name: 'JLPT N3',
    date: 'July 2025'
  },
  {
    name: 'Google AI Essentials - Coursera',
    date: 'July 2025'
  },
  {
    name: 'Google Prompting Essentials - Coursera',
    date: 'August 2025'
  },
  {
    name: 'Japrise A2 High',
    date: 'July 2025'
  }
]

export const skills = {
  programming: ['Python', 'C++'],
  dataScience: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly'],
  web: ['Flask', 'HTML5', 'CSS3'],
  database: ['Microsoft SQL Server'],
  tools: ['Git']
}
