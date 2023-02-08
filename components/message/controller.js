/**
 * Almacena toda la lógica de negocio
 */
const store = require('./store');
const { socket } = require('../../socket');
const config = require('../../config');

const addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            console.error('[messageController] No hay un usuario o mensaje');
            return reject('Los datos son incorrectos');
        }

        const fileUrl = (file)
            ? `${config.host}:${config.port}/${config.publicRoute}/${config.filesRoute}/${file.filename}`
            : '';

        const messageData = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        }
        store.add(messageData);
        socket.io.emit('message', messageData);
        resolve(messageData);
    });

}

const getMessages = (filterUser, filterChatId) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser, filterChatId));
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

const deleteMessage = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Id invalido');
        }
        store.delete(id)
            .then(() => resolve())
            .catch(e => reject(e));
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage,
}