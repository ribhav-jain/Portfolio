/* Change this file to get your personal porfolio */

// SEO Related settings
const seo = {
  title: "Ribhav's Portfolio",
  description:
    "A passionate software developer who always thrives to work on coding and machine learning related problems and finding sustainable and scalable solution to create impact.",
  og: {
    title: "Ribhav Jain Portfolio",
    type: "website",
    url: "https://ribhav-jain.github.io/portfolio/",
  },
};

// Home Page
const greeting = {
  title: "Ribhav Jain",
  logo_name: "Ribhav Jain",
  subTitle:
    "A passionate software developer who always thrives to work on coding and machine learning related problems and finding sustainable and scalable solution to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/13QFW9lmCy23KNn9vGpkVA7TU4W4UQxf4jjWPVhtyIVE/",
  portfolio_repository: "https://github.com/ribhav-jain/Portfolio",
  githubProfile: "https://github.com/ribhav-jain",
};

// Your Social Media Link
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ribhav-jain",
    icon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    color: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ribhav-jain",
    icon: "fa-linkedin",
    color: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ribhavjain11@gmail.com",
    icon: "fa-google",
    color: "#D14836",
  },
  {
    name: "Medium",
    link: "https://medium.com/@ribhav_jain",
    icon: "fa-medium",
    color: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceLottie",
      skills: [
        "⚡ Developing highly scalable production ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with deep learning and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          icon: "logos:tensorflow",
          style: {
            color: " #FF6F00",
          },
        },
        {
          skillName: "Keras",
          icon: "cib:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit Learn",
          icon: "simple-icons:scikit-learn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          icon: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          icon: "logos:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Power BI",
          icon: "logos:microsoft-power-bi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Python",
          icon: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Front-end Development",
      fileName: "FrontendLottie",
      skills: [
        "⚡ Develop highly interactive Front-end / User Interfaces for web and mobile applications",
        "⚡ Developing web and mobile applications using Ext JS, React, JavaScript, CSS and HTML",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          icon: "vscode-icons:file-type-html",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          icon: "vscode-icons:file-type-css",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          icon: "logos:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Sencha",
          icon: "logos:sencha",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ReactJS",
          icon: "logos:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          icon: "logos:npm-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          icon: "logos:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Back-end Development",
      fileName: "BackendLottie",
      skills: [
        "⚡ Creating highly optimizated and scalable application backend in Spring, Play framework, Flask and Node",
        "⚡ Designed and implemented REST controllers, service layers and data models in Java using Spring framework and Hibernate ORM",
        "⚡ Implemented data pipelines using Python, Java, Spring Boot and Spring Data",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          icon: "logos:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          icon: "logos:python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "Spring",
          icon: "logos:spring-icon",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Flask",
          icon: "logos:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Hibernate",
          icon: "logos:hibernate",
          style: {
            color: "#59666C",
          },
        },
        {
          skillName: "Postgresql",
          icon: "logos:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "SQL Server",
          icon: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "Mongo DB",
          icon: "vscode-icons:file-type-mongo",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      icon: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/ribhavjain1",
    },
    {
      siteName: "Kaggle",
      icon: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/RibhavJain",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Panjab University Chandigarh",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "Panjab_University_logo.png",
      alt_name: "Panjab University Chandigarh",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied software engineering subjects like Data Structure, Algorithms, DBMS, Operating System, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Full Stack Development.",
      ],
      website_link: "https://puchd.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Kirill Eremenko",
      logo_path: "machine_learning.png",
      link: "https://www.udemy.com/course/machinelearning/",
      alt_name: "Machine Learning",
      color_code: "#F9B93E",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      link: "https://www.coursera.org/learn/neural-networks-deep-learning?specialization=deep-learning",
      alt_name: "Neural Networks and Deep Learning",
      color_code: "#808080",
    },
    {
      title: "Data Science",
      subtitle: "- Jose Portilla",
      logo_path: "data_science.png",
      link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
      alt_name: "Data Science",
      color_code: "#F5F5F5",
    },
    {
      title: "Big Data",
      subtitle: "- Ilkay Altintas",
      logo_path: "coursera.svg",
      link: "https://www.coursera.org/specializations/big-data",
      alt_name: "Big Data",
      color_code: "#0056D2",
    },
    {
      title: "Spring & Hibernate",
      subtitle: "- Chad Darby",
      logo_path: "spring.svg",
      link: "https://www.udemy.com/course/spring-hibernate-tutorial/",
      alt_name: "Spring & Hibernate",
      color_code: "#BDF5BD",
    },
    {
      title: "Web Development",
      subtitle: "- Angela Yu",
      logo_path: "web_development.svg",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      alt_name: "Web Development",
      color_code: "#00d9c0",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I have worked as ML and DL Developer. I have also worked with some well established companies as Software Architect.",
  sections: [
    {
      title: "Work",
      experiences: [],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Scientist",
          company: "TCIL-IT",
          company_url: "https://www.linkedin.com/company/tcil-it-chandigarh",
          logo_path: "tcil_it.png",
          duration: "May 2019 - Sept 2019",
          location: "Chandigarh, India",
          description:
            "I have worked on project of predicting crop price rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict next month crop rates. (2) To embed feature in the model which can explain the seasonal major changes in crop rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2.",
        },
        {
          title: "Software Developer Intern",
          company: "Infowiz",
          company_url: "https://www.infowiz.co.in/",
          logo_path: "infowiz_logo.png",
          duration: "May 2018 - Aug 2018",
          location: "Chandigarh, India",
          description:
            "I have worked on designing reporting module for Identity access management (IAM) that generate reports after most actions taken on the platform like login time, systems accessed, and type of authentication to ensure compliance and assess security risks.",
        },
      ],
    },
  ],
};

// Projects Page
const projects = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and integrate with Frontend to provide end to end solutions.",
  projectDetails: {
    data: [
      {
        id: "1",
        name: "Portfolio",
        createdAt: "2021-06-12",
        url: "https://github.com/ribhav-jain/Portfolio",
        description:
          "The complete customizable software developer portfolio template which lets you showcase your work and provides each and every detail about you as software developer.",
        languages: [
          { name: "HTML", icon: "vscode-icons:file-type-html" },
          { name: "CSS", icon: "vscode-icons:file-type-css" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "React", icon: "logos:react" },
        ],
      },
      {
        id: "2",
        name: "Stock Price Prediction",
        createdAt: "2020-06-18",
        url: "https://github.com/ribhav-jain/Stock-Price-Prediction",
        description:
          "Predicting stock price using historical data of a company, using Recurrent neural networks(LSTM).",
        languages: [
          { name: "Tensorflow", icon: "logos:tensorflow" },
          { name: "Keras", icon: "simple-icons:keras" },
          { name: "Python", icon: "logos:python" },
        ],
      },
      {
        id: "3",
        name: "Spam Classifier",
        createdAt: "2019-06-20",
        url: "https://github.com/ribhav-jain/Spam-Classifier",
        description:
          "ML-powered Flask app to perform spam classification of SMS messages using TF-IDF vectorization.",
        languages: [
          { name: "Python", icon: "logos:python" },
          { name: "HTML", icon: "vscode-icons:file-type-html" },
          { name: "CSS", icon: "vscode-icons:file-type-css" },
        ],
      },
      {
        id: "4",
        name: "Real Estate Price Prediction",
        createdAt: "2018-07-11",
        url: "https://github.com/ribhav-jain/Real-Estate-Price-Prediction",
        description:
          "Predict the real estate price using Machine Learning, perform data visualization to understand the insight of the data.",
        languages: [
          { name: "Python", icon: "logos-python" },
          { name: "Jupyter Notebook", icon: "logos:jupyter" },
        ],
      },
    ],
  },
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "Feel free to get in touch. I can help you with ML, AI, Data Science and Full Stack development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chandigarh, India",
    location_map_link: "https://goo.gl/maps/oxjdacsf84zp9CAR8",
  },
  phoneSection: {
    hidden: true,
    title: "Phone Number",
    subtitle: "1234567890",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projects,
  contactPageData,
};
