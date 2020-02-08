var mongoose = require('mongoose')

var Schema = mongoose.Schema

var todoSchema = new Schema({
  name: String,
  description: String,
  flag: String,
  status: Boolean,
  subTodo: [
    {
      name: String,
      status: Boolean
    }
  ]
})

module.exports = mongoose.model('todo', todoSchema)
