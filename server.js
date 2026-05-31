const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Portfolio Data
const portfolioData = {
    name: "GIFT GEORGE MSAUKA",
    role: "Cloud Computing Student",
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
        github: "github.com/giftmsauka"
    },
    projects: [
        "Personal Portfolio Website",
        "Student Management System",
        "Cloud Deployment Project"
    ]
};

// Root route
app.get('/', (req, res) => {
    res.json({
        message: "Portfolio API is running",
        status: "online",
        endpoints: ["/portfolio", "/portfolio/skills", "/portfolio/projects"]
    });
});

// Full portfolio data
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

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Portfolio API server running on port ${PORT}`);
});
