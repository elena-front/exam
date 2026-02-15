const TaskService = require('../service/Task.service');
const formatResponse = require('../utils/formatResponse');

class TaskController {
    static async getAllTasks(req, res) {
        try {
            const tasks = await TaskService.getAllTasks();

            if (tasks.length === 0) {
                return res.status(200).json(formatResponse(200, 'you have no tasks yet', [], null));
            }

            res.status(200).json(formatResponse(200, 'got all tasks', tasks, null));

        }
        catch (error) {
            console.log(error);
            res.status(500).json(formatResponse(500, 'server inner error', [], error))
        }
    }

    static async getOneTask(req, res) {
        const { id } = req.params;

        if (isNaN(Number(id))) {
            return res.status(400).json(formatResponse(400, 'uncorrect ID format', null, 'uncorrect ID format'))
        }
        try {
            const task = await TaskService.getTaskById(Number(id));

            if (!task) {
                return res.status(404).json(formatResponse(404, 'not found', null, 'not found'));
            }

            res.status(200).json(formatResponse(200, 'task received', task, null));

        }
        catch (error) {
            console.log(error);
            res.status(500).json(formatResponse(500, 'server inner error', [], error))
        }
    }

    static async createTask(req, res) {
        const { title, text } = req.body;

        if (!title || typeof title !== 'string' || title.trim().length === 0) {
            return res.status(400).json(formatResponse(400, 'title should not be empty', null, 'title should not be empty'))
        }

        if (!text || typeof text !== 'string' || text.trim().length === 0) {
            return res.status(400).json(formatResponse(400, 'text should not be empty', null, 'text should not be empty'))
        }

        if (isNaN(Number(id))) {
            return res.status(400).json(formatResponse(400, 'uncorrect ID format', null, 'uncorrect ID format'))
        }
        try {
            const newTask = await TaskService.createNewTask({ title, text });

            res.status(201).json(formatResponse(201, 'task created', newTask, null));

        }
        catch (error) {
            console.log(error);
            res.status(500).json(formatResponse(500, 'server inner error', [], error))
        }
    }

    static async deleteTask(req, res) {
       const { id } = req.params;

        if (isNaN(Number(id))) {
            return res.status(400).json(formatResponse(400, 'uncorrect ID format', null, 'uncorrect ID format'))
        }

        try {
            const deletedTask = await TaskService.deleteTaskById({ id });

            if(!deletedTask) {return res.status(404).json(formatResponse(404, 'not found', null, 'not found'));}
      

            res.status(200).json(formatResponse(200, 'task deleted'));

        }
        catch (error) {
            console.log(error);
            res.status(500).json(formatResponse(500, 'server inner error', [], error))
        }
    }

        static async updateTask(req, res) {
       const { id } = req.params;
       const {title, text} = req.body;

        if (isNaN(Number(id))) {
            return res.status(400).json(formatResponse(400, 'uncorrect ID format', null, 'uncorrect ID format'))
        }

        try {
            const updatedTask = await TaskService.updateTaskById(Number(id), {title, text});

            if(!updatedTask) {return res.status(404).json(formatResponse(404, 'not found', null, 'not found'));}
      

            res.status(200).json(formatResponse(200, 'task updated'));

        }
        catch (error) {
            console.log(error);
            res.status(500).json(formatResponse(500, 'server inner error', [], error))
        }
    }
} 
module.exports = TaskController;