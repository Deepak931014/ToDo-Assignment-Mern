const db = require('./db');
const Todo = require('./todoSchema');


//Send all task
module.exports.getallTodo = async () => {
    const todo = await Todo.find();
    return todo;
}

//Add new task
module.exports.addnewTask = async (task) => {
    try {
        const newtask = new Todo(task);
        await newtask.save();
        return true;
    } catch (err) {
        throw err;
    }
}

//Update Task
module.exports.updateTask = async (t) => {
    try {
        console.log(t.id,t.task);
        const updateTask = await Todo.findByIdAndUpdate(t.id,{ task: t.task }, ({ runValidators: true }));
        return true;
    } catch (err) {
        throw err;
    }
}

//Delete Task
module.exports.deleteTask = async (id) => {
    try {
        console.log(id)
        const deletetask = await Todo.findByIdAndDelete(id); 
        return true;
    } catch (err) {
        throw err;
    }
}