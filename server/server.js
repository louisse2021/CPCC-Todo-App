const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const port = 3000

const todos = [
  {
    id: "1",
    task: "Learn the backend",
  },
]

// Create
app.post("/api/todo", (req, res) => {
  const { task } = req.query

  if (!task) return res.send({ error: "Missing data" })

  const newTodo = {
    id: `${Number(todos.at(-1).id) + 1}`,
    task,
  }

  todos.push(newTodo)

  res.send(newTodo)
})

// Read
app.get("/api/todos", (req, res) => {
  return res.send(todos)
})

// Update
app.put("/api/todo/:id", (req, res) => {
  // 1. Get task from req.query
  // 2. Get id from req.params.id
  // 3. Check if we have necessary data, if not, send back an error
  // 4. Find the todo index in the array
  // 5. Handle if the index is -1, if so send back an error
  // 6. Update todos array at the found todo index with the new data
  // 7. Send back the updated todo
})

// Delete
app.delete("/api/todo/:id", (req, res) => {
  const todoId = req.params.id

  const todoIndex = todos.findIndex((todo) => todo.id === todoId)

  if (todoIndex < 0) {
    return res.send("todo not found")
  }

  todos.splice(todoIndex, 1)

  return res.send({ status: "success" })
})

app.listen(port, () => {
  console.log(`API example app listening on port ${port}`)
})
