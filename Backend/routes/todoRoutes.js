const express=require('express');
const router=express.Router();

const TodoController=require('../controller/todoController');

// 1.*GET /todo *:To get all todo list.
router.get('/',TodoController.getTodo)

// 2.*POST /todo/new *:Allows user to add new task.
router.post('/new',TodoController.addTask)

// 3.*PUT /todo/update/:id *:Allows user to update existing task.
router.put('/update',TodoController.updateTask)

// 4.*DELETE /todo/delete/:id *:Allows user to delete task.
router.delete('/delete',TodoController.deleteTask)

module.exports=router;