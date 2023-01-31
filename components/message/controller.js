/**
 * Almacena toda la lógica de negocio
 */

const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay un usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const userData = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(userData);
        resolve(userData);
    });

}

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid data');
        }
        const result = await store.updateText(id, message);
        resolve(result);
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}