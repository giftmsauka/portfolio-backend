const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// =============================================
// ALL PORTFOLIO DATA LIVES HERE IN BACKEND
// =============================================
const portfolioData = {
    name: "GIFT GEORGE MSAUKA",
    role: "data scentist",
    bio: "Passionate about cloud infrastructure, scalable web applications, and modern deployment workflows. Currently studying at the intersection of technology and innovation.",
    skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Cloud Computing",
        "Git & GitHub",
        "Vercel",
        "Render"
    ],
    contact: {
        email: "msaukagift@email.com",
        phone: "+255 749760141",
        github: "github.com/giftmsauka",
        location: "Tanzania"
    },
    projects: [
        {
            name: "Personal Portfolio Website",
            description: "A responsive portfolio hosted on Vercel with a Node.js/Express backend API deployed on Render.",
            tech: ["HTML", "CSS", "JavaScript", "Vercel", "Render"],
            link: "https://myportfolio.vercel.app"
        },
        {
            name: "Student Management System",
            description: "Web-based system for managing student records, course registrations, and academic performance tracking.",
            tech: ["Node.js", "Express", "HTML", "CSS"],
            link: "#"
        },
        {
            name: "Cloud Deployment Project",
            description: "End-to-end cloud deployment exercise demonstrating CI/CD workflows and deployment automation.",
            tech: ["Vercel", "Render", "GitHub", "Node.js"],
            link: "#"
        }
    ]
};

// ---- Routes ----

// Root
app.get('/', (req, res) => {
    res.json({
        message: "Portfolio API is running ✅",
        endpoints: [
            "GET /portfolio       — full portfolio data",
            "GET /portfolio/skills    — skills only",
            "GET /portfolio/projects  — projects only",
            "GET /portfolio/contact   — contact info only"
        ]
    });
});

// Full portfolio
app.get('/portfolio', (req, res) => {
    res.json(portfolioData);
});

// Skills only
app.get('/portfolio/skills', (req, res) => {
    res.json({ skills: portfolioData.skills });
});

// Projects only
app.get('/portfolio/projects', (req, res) => {
    res.json({ projects: portfolioData.projects });
});

// Contact only
app.get('/portfolio/contact', (req, res) => {
    res.json({ contact: portfolioData.contact });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Portfolio API running on port ${PORT}`);
});
