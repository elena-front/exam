const taskRouter = require('express').Router();
const TaskController = require('../controllers/Task.controller');


taskRouter
    .get('/', TaskController.getAllTasks)
    .get('/:id', TaskController.getOneTask)
    .post('/', TaskController.createTask)
    .put('/:id', TaskController.updateTask)
    .delete('/:id', TaskController.deleteTask);
    
    module.exports = taskRouter;