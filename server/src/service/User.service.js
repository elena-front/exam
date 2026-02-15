const { User } = require('../src/db/models/user');

class UserService {
    static async getAllUsers() {
        return await User.findAll()
    }

    static async getUserById(id) {
        return await User.findByPk(id);
    }

    static async createNewUser(userData) {
        return await User.create(userData);
    }

    static async deleteUserById(id) {
        const userToDelete = await User.findByPk(id);
        if (!userToDelete) return null;
        return await userToDelete.destroy();
    }

    static async updateUserById(id, userData) {
        const userToUpdate = await User.findByPk(id);
        const { title, text } = userData;
        if (!userToUpdate) return null;
        if (title) { userToUpdate.title = title }
        if (text) { userToUpdate.text = text }

        await userToUpdate.save();
        return userToUpdate;
    }
}

module.exports = UserService;