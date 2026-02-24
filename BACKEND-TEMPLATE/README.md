# Task Management API

A RESTful API for managing tasks with full CRUD operations.

## Base URL
```
http://localhost:3001/api/tasks
```

## Task Model

```typescript
{
  id: number;
  title: string;
  description?: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate?: Date;
  createdAt: Date;
  blockingTasks?: number[];
}
```

## API Endpoints

### 1. Get All Tasks
Get a list of all tasks.

**Endpoint:** `GET /api/tasks`

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "title": "Setup project repository",
    "description": "Initialize Git repo and configure project structure",
    "status": "DONE",
    "priority": "HIGH",
    "dueDate": "2026-02-20T00:00:00.000Z",
    "createdAt": "2026-02-15T00:00:00.000Z"
  }
]
```

---

### 2. Get Task by ID
Get a specific task by its ID.

**Endpoint:** `GET /api/tasks/:id`

**Parameters:**
- `id` (path parameter) - Task ID

**Response:** `200 OK`
```json
{
  "id": 1,
  "title": "Setup project repository",
  "status": "DONE",
  "priority": "HIGH",
  "createdAt": "2026-02-15T00:00:00.000Z"
}
```

**Error Response:** `404 Not Found`
```
Task not found
```

---

### 3. Create New Task
Create a new task.

**Endpoint:** `POST /api/tasks`

**Request Body:**
```json
{
  "title": "Implement user authentication",
  "description": "Add JWT-based authentication",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2026-02-28"
}
```

**Required Fields:**
- `title`
- `status`
- `priority`

**Response:** `201 Created`
```json
{
  "id": 6,
  "title": "Implement user authentication",
  "description": "Add JWT-based authentication",
  "status": "TODO",
  "priority": "HIGH",
  "dueDate": "2026-02-28T00:00:00.000Z",
  "createdAt": "2026-02-24T10:30:00.000Z"
}
```

---

### 4. Update Task
Update an existing task (full or partial update).

**Endpoint:** `PUT /api/tasks/:id`

**Parameters:**
- `id` (path parameter) - Task ID

**Request Body:** (send only fields you want to update)
```json
{
  "status": "IN_PROGRESS",
  "priority": "HIGH"
}
```

**Response:** `200 OK`
```json
{
  "id": 2,
  "title": "Implement user authentication",
  "description": "Add JWT-based authentication",
  "status": "IN_PROGRESS",
  "priority": "HIGH",
  "dueDate": "2026-02-28T00:00:00.000Z",
  "createdAt": "2026-02-18T00:00:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Task not found"
}
```

---

### 5. Delete Task
Delete a task by ID.

**Endpoint:** `DELETE /api/tasks/:id`

**Parameters:**
- `id` (path parameter) - Task ID

**Response:** `200 OK`
```json
{
  "id": 3,
  "title": "Write API documentation",
  "status": "TODO",
  "priority": "MEDIUM",
  "createdAt": "2026-02-20T00:00:00.000Z"
}
```

**Error Response:** `404 Not Found`
```json
{
  "error": "Task not found"
}
```

---

## Example Usage

### Using cURL

**Get all tasks:**
```bash
curl http://localhost:3001/api/tasks
```

**Create a task:**
```bash
curl -X POST http://localhost:3001/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Task",
    "status": "TODO",
    "priority": "MEDIUM"
  }'
```

**Update a task:**
```bash
curl -X PUT http://localhost:3001/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "DONE"}'
```

**Delete a task:**
```bash
curl -X DELETE http://localhost:3001/api/tasks/1
```

### Using JavaScript Fetch

**Get all tasks:**
```javascript
fetch('http://localhost:3001/api/tasks')
  .then(res => res.json())
  .then(data => console.log(data));
```

**Create a task:**
```javascript
fetch('http://localhost:3001/api/tasks', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'New Task',
    status: 'TODO',
    priority: 'MEDIUM'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

**Update a task:**
```javascript
fetch('http://localhost:3001/api/tasks/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ status: 'DONE' })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

**Delete a task:**
```javascript
fetch('http://localhost:3001/api/tasks/1', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## Error Handling

All endpoints return appropriate HTTP status codes:

| Status Code | Meaning |
|-------------|---------|
| 200 | Success |
| 201 | Created (POST) |
| 404 | Resource not found |
| 500 | Server error |

---

## Running the Server

```bash
npm install
npm run dev
```

Server runs on: `http://localhost:3001`
