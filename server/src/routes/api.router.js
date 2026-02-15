const apiRouter = require('express').Router();
const taskRouter = require('./task.router');

apiRouter.use('/tasks', taskRouter);

module.exports = apiRouter;