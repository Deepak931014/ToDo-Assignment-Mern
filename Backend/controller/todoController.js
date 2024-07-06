const Todo = require('../models/todoModel');

// 1.*GET /todo *:To get all todo list.
module.exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.getallTodo();
        res.status(200).json(todo);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
}

// 2.*POST /todo/new *:Allows user to add new task.
module.exports.addTask = async (req, res) => {
    try {
        const task = req.body;
        if (!(task))
            res.status(400).json({ message: "Please enter the task" });
        const newtask = await Todo.addnewTask(task);
        if (newtask)
            res.status(201).json({ message: "Task added succesfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }

}

// 3.*PUT /todo/update *:Allows user to update existing task.
module.exports.updateTask = async (req, res) => {
    try {
        const  task  = req.body;
        const updateTask = await Todo.updateTask(task);
        if (updateTask)
            res.status(200).json({ message: "Task updated successfully." });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
}

// 4.*DELETE /todo/delete *:Allows user to delete task.
module.exports.deleteTask = async (req, res) => {
    try {
        const id = req.body.id;
        const deleteTask=  await Todo.deleteTask(id);
        if(deleteTask)
             res.status(200).json({ message: "Task deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
}