const taskRouter = require('express').Router();
const TaskController = require('../controllers/Task.controller');
const verifyAccessToken = require('../middleware/verifyAccessToken');


taskRouter
    .get('/', TaskController.getAllTasks)
    .get('/:id', TaskController.getOneTask)
    .post('/', verifyAccessToken, TaskController.createTask)
    .put('/:id', verifyAccessToken, TaskController.updateTask)
    .delete('/:id', verifyAccessToken, TaskController.deleteTask);
    
    module.exports = taskRouter;