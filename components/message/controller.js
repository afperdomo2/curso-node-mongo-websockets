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

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addMessage,
    getMessages,
}