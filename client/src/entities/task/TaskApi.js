import { axiosInstance } from '../../shared/lib/axiosInstance';

export default class TaskApi {

    static async getAllTasks() {
        try {
            const response = await axiosInstance.get('/tasks');
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOneTask(id) {
        try {
            const response = await axiosInstance.get(`/tasks/${id}`);
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async createTask({ title, text }) {
        try {
            const response = await axiosInstance.post('/tasks', { title, text });
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateTask(id, { title, text }) {
        try {
            const response = await axiosInstance.put(`/tasks/${id}`, { title, text });
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteTask() {
        try {
            const response = await axiosInstance.delete(`/tasks/${id}`);
            return response.data.data;
        } catch (error) {
            console.log(error);
        }
    }

}