const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Cloud Deployment Successful 🚀</h1>
        <p>This application is deployed as part of the ScholarX Internship Project.</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "Running",
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
