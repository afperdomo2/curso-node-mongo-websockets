/**
 * Almacena toda la lógica de almacenamiento
 */

const list = [];

/**
 * Agrega un mensaje
 * @param {string} message 
 */
const addMessage = (message) => {
    list.push(message);
}

/**
 * Lista todos los mensajes
 * @returns {array}
 */
const getMessages = () => {
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}
