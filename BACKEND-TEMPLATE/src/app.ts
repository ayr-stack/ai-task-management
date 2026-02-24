import express from "express";
import taskRoutes from "./taskRoutes.js";

const app = express();

app.get("/health", (_req, res) => {
    try {
    } catch (error) {
        res.status(500).send("Server is not healthy")
    }
    res.status(200).send("OK");
})

app.get("/", (req, res) => {
    try {
        res.status(200).send("Welcome to the Task Management API");
    } catch (error) {
        res.status(500).send("Server is not healthy")
    }
})

app.use("/api/tasks", taskRoutes);


export default app;
