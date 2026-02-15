const { Task } = require('../db/models/task');

class TaskService {
    static async getAllTasks() {
        return await Task.findAll()
    }

    static async getTaskById(id) {
        return await Task.findByPk(id);
    }

    static async createNewTask(taskData) {
        return await Task.create(taskData);
    }

    static async deleteTaskById(id) {
        const taskToDelete = await Task.findByPk(id);
        if (!taskToDelete) return null;
        return await taskToDelete.destroy();
    }

    static async updateTaskById(id, taskData) {
        const taskToUpdate = await Task.findByPk(id);
        const { title, text } = taskData;
        if (!taskToUpdate) return null;
        if (title) { taskToUpdate.title = title }
        if (text) { taskToUpdate.text = text }

        await taskToUpdate.save();
        return taskToUpdate;
    }
}

module.exports = TaskService;