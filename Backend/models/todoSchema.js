const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  task: { type: String, require: true },
    completed: {
      type: Boolean,
      default: false,
    }
  });

  const Todo = mongoose.model('Todo', todoSchema);
  module.exports = Todo;