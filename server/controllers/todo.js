const Todo = require("../models/todo")

/**
 *
 * Mongoose API
 *
 * Create document - returns a promise
 * const document = await <model>.create({task: 'value'})
 * Save document
 * <document>.save()
 *
 */
createTodo = async (req, res) => {
  return res.status(500).json({ success: false })
}

/**
 *
 * Mongoose API
 *
 * Get documents - returns a promise
 * const documents = await <model>.find({})
 *
 */
getTodos = async (req, res) => {
  return res.status(500).json({ success: false })
}

/**
 *
 * Mongoose API
 *
 * Update document - returns a promise
 * const documents = await <model>.findOneAndUpdate({ _id: <id to update>}, {task: 'updated value'})
 *
 */
updateTodo = async (req, res) => {
  return res.status(500).json({ success: false })
}

/**
 *
 * Mongoose API
 *
 * Delete document - returns a promise
 * const documents = await <model>.findOneAndDelete({ _id: <id to update>})
 *
 */
deleteTodo = async (req, res) => {
  return res.status(500).json({ success: false })
}

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
}
