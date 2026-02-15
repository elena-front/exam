const apiRouter = require('express').Router();
const authRouter = require('./auth.routes');
const taskRouter = require('./task.router');

apiRouter.use('/tasks', taskRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;