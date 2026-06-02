const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const portfolioData = {
    name: "GIFT GEORGE MSAUKA",
    role: "Data Science Student & Aspiring Data Analyst",
    bio: "Third-year Bachelor of Data Science student at the Eastern Africa Statistical Training Centre (EASTC), Dar es Salaam. Passionate about machine learning, statistical analysis, time series, spatial analysis, and transforming raw data into meaningful insights.",
    skills: [
        "Python",
        "R Programming",
        "Machine Learning",
        "Time Series Analysis",
        "Spatial Analysis",
        "Statistical Analysis",
        "Data Visualization",
        "SQL & MySQL",
        "JavaScript",
        "Node.js",
        "HTML5 & CSS3",
        "Git & GitHub",
        "Scikit-learn",
        "Pandas & NumPy",
        "QGIS"
    ],
    contact: {
        email: "msaukagift@email.com",
        phone: "+255 695 984 497",
        github: "github.com/giftmsauka",
        location: "Dar es Salaam, Tanzania"
    },
    projects: [
        {
            name: "Personal Portfolio Website",
            description: "A responsive personal portfolio with a Node.js/Express backend API deployed on Render and frontend hosted on Vercel. All content is fetched dynamically from the backend API on page load.",
            tech: ["HTML", "CSS", "JavaScript", "Node.js", "Vercel", "Render"],
            link: "https://portfolio-frontend-rose-psi.vercel.app"
        },
        {
            name: "Web-Based Expense Analysis System",
            description: "A data science capstone applying K-Means Clustering to segment student spending behaviour at EASTC. Features a Python Flask backend, MySQL database, and an interactive analytics dashboard.",
            tech: ["Python", "Flask", "K-Means Clustering", "MySQL", "JavaScript", "HTML/CSS"],
            link: "#"
        },
        {
            name: "Student Management System",
            description: "A web-based system for managing student records, course registrations, and academic performance tracking with a clean administrative dashboard interface.",
            tech: ["Node.js", "Express", "HTML", "CSS"],
            link: "#"
        }
    ]
};

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