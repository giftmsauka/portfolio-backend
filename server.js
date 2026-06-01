const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const portfolioData = {
    name: "GIFT GEORGE MSAUKA",
    role: "Data Science Student & Aspiring Data Analyst",
    bio: "Third-year Bachelor of Data Science student at the Eastern Africa Statistical Training Centre (EASTC), Dar es Salaam. Passionate about transforming raw data into meaningful insights through statistical analysis, machine learning, and modern cloud deployment. Experienced in building end-to-end data pipelines and web-based analytical systems.",
    skills: [
        "Python",
        "R Programming",
        "Machine Learning",
        "Statistical Analysis",
        "Data Visualization",
        "SQL & MySQL",
        "JavaScript",
        "Node.js",
        "Express.js",
        "HTML5 & CSS3",
        "Cloud Computing",
        "Git & GitHub",
        "Vercel",
        "Render",
        "Scikit-learn",
        "Pandas & NumPy"
    ],
    contact: {
        email: "msaukagift@email.com",
        phone: "+255 749760141",
        github: "github.com/giftmsauka",
        location: "Dar es Salaam, Tanzania"
    },
    projects: [
        {
            name: "Personal Portfolio Website",
            description: "A responsive personal portfolio website with a Node.js/Express backend API deployed on Render and frontend hosted on Vercel, demonstrating full-stack cloud deployment skills.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel", "Render"],
            link: "https://portfolio-frontend-rose-psi.vercel.app"
        },
        {
            name: "Web-Based Expense Analysis System",
            description: "A data science capstone project that applies K-Means Clustering to segment student spending behaviour at EASTC. Features a Python Flask backend, MySQL database, and interactive dashboard for expense visualization.",
            tech: ["Python", "Flask", "K-Means Clustering", "MySQL", "JavaScript", "HTML/CSS"],
            link: "#"
        },
        {
            name: "Student Management System",
            description: "Web-based system for managing student records, course registrations, and academic performance tracking with a clean administrative dashboard.",
            tech: ["Node.js", "Express", "HTML", "CSS"],
            link: "#"
        }
    ]
};

// ---- Routes ----

app.get('/', (req, res) => {
    res.json({
        message: "Portfolio API is running ✅",
        endpoints: [
            "GET /portfolio          — full portfolio data",
            "GET /portfolio/skills   — skills only",
            "GET /portfolio/projects — projects only",
            "GET /portfolio/contact  — contact info only"
        ]
    });
});

app.get('/portfolio', (req, res) => {
    res.json(portfolioData);
});

app.get('/portfolio/skills', (req, res) => {
    res.json({ skills: portfolioData.skills });
});

app.get('/portfolio/projects', (req, res) => {
    res.json({ projects: portfolioData.projects });
});

app.get('/portfolio/contact', (req, res) => {
    res.json({ contact: portfolioData.contact });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Portfolio API running on port ${PORT}`);
});