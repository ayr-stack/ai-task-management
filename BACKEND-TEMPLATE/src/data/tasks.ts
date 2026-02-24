import Task from "../models/task.js";

const tasks: Task[] = [
    {
        id: 1,
        title: "Setup project repository",
        description: "Initialize Git repo and configure project structure",
        status: "DONE",
        priority: "HIGH",
        dueDate: new Date("2026-02-20"),
        createdAt: new Date("2026-02-15")
    },
    {
        id: 2,
        title: "Implement user authentication",
        description: "Add JWT-based authentication with login and signup",
        status: "IN_PROGRESS",
        priority: "HIGH",
        dueDate: new Date("2026-02-28"),
        createdAt: new Date("2026-02-18")
    },
    {
        id: 3,
        title: "Write API documentation",
        status: "TODO",
        priority: "MEDIUM",
        dueDate: new Date("2026-03-05"),
        createdAt: new Date("2026-02-20")
    },
    {
        id: 4,
        title: "Add task filtering feature",
        description: "Allow users to filter tasks by status and priority",
        status: "TODO",
        priority: "LOW",
        createdAt: new Date("2026-02-22")
    },
    {
        id: 5,
        title: "Fix responsive layout issues",
        description: "Mobile view has alignment problems on smaller screens",
        status: "IN_PROGRESS",
        priority: "MEDIUM",
        dueDate: new Date("2026-02-26"),
        createdAt: new Date("2026-02-21")
    }
];

export default tasks;