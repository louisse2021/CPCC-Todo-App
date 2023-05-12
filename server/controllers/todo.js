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
 *  * 
 */
createTodo = async (req, res) => {
  const documents = await Todo.create({task: 'value'})
  console.log(documents)

  if (documents.length > 0) {

    return res.status(200).send({ data: documents, success: true })
  }
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
  const documents = await Todo.find({})
  console.log(documents)

  if (documents.length > 0) {

    return res.status(200).send({data:documents, success: true})
  }
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
  const updatedTodo = await Todo.findOneAndDelete({ _id: req.params.id })
  
  if (!!updatedTodo)
    return res.status(200).json({ success: true, data: updatedTodo })
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
  const foundTodo = await Todo.findOneAndDelete({_id: req.params.id})
    
  if (!!foundTodo)
    return res.status(200).json({ success: true, data: foundTodo })
 
  return res.status(500).json({ success: false })
  }
  

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
}
