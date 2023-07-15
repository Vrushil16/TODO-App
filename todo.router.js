const router = require("express").Router();
const ToDoController = require('../controller/todo.controller')

router.post("/storeToDo",ToDoController.createToDo);

router.get('/getUserTodoList',ToDoController.getUserToDo)

router.post("/deleteTodo",ToDoController.deleteToDo)

module.exports = router;