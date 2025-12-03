import express from "express";

const app = express();
const port = 8080;

const uptimeRoutes = require("./api/uptimeInfo");

app.use("/api/uptime", uptimeRoutes)

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});