/**
 * Almacena toda la lógica de negocio
 */

const store = require('./store');

const addChat = (users) => {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            console.error('[messageController] No hay un listado de usuarios');
            return reject('Invalid user list');
        }
        const chat = {
            users: users,
        }
        resolve(store.add(chat));
    });
}

const getChats = (userId) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(userId));
    });
}

module.exports = {
    addChat,
    getChats,
}
