import { Router } from "express";
import tasks from "./data/tasks.js";
import Task from "./models/task.js";
const taskRouter = Router();

let nextId = 1;

// CRUD Endpoints for Tasks
// GET /api/tasks - Get all tasks
taskRouter.get("/", (_req, res) => {
    try {
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).send("Server is not healthy");
    }
})

// GET /api/tasks/:id - Get task by ID
taskRouter.get("/:id", (req, res) => {
    try {
        const taskId = parseInt(req.params.id);
        const task = tasks.find(t => t.id === taskId);

        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send("Server error");
    }
})

// POST /api/tasks - Create a new task
taskRouter.post("/", (req, res) => {
    try {
        // Initialize nextId based on highest existing ID
        let nextId = tasks.length > 0
            ? Math.max(...tasks.map(t => t.id)) + 1
            : 1;
        const newTask: Task = {
            id: nextId,  // Server generates the ID
            ...req.body,
            createdAt: new Date()
        };
        tasks.push(newTask);
        res.status(201).json(newTask);  // 201 = Created
    } catch (error) {
        res.status(500).send("Server error");
    }
})

// PUT /api/tasks/:id - Update an existing task by ID
taskRouter.put("/:id", (req, res) => {
    try {
        const taskId = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(t => t.id === taskId);

        if (taskIndex === -1) {
            return res.status(404).json({ error: "Task not found" });
        }

        const updatedTask: Task = {
            ...tasks[taskIndex],
            ...req.body,
            id: taskId,  // Ensure ID doesn't change
            createdAt: tasks[taskIndex].createdAt  // Preserve creation date
        };

        tasks[taskIndex] = updatedTask;
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
})

// PUT /api/tasks/:id - Delete an existing task by ID
taskRouter.delete("/:id", (req, res) => {
    try {
        const taskId = parseInt(req.params.id);
        const taskIndex = tasks.findIndex(t => t.id === taskId);

        if (taskIndex === -1) {
            return res.status(404).json({ error: "Task not found" });
        }

        const deletedTask = tasks[taskIndex];
        tasks.splice(taskIndex, 1);

        res.status(200).json(deletedTask);  // Return what was deleted
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
})






export default taskRouter;
