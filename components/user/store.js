/**
 * Almacena toda la lógica de base de datos
 */

const Model = require('./model');

/**
 * Agrega un usuario en la colección Users
 * @param {object} user Datos del usuario
 * @returns {promise}
 */
const addUser = (user) => {
    const myUser = new Model(user);
    return myUser.save();
}

/**
 * Lista todos los mensajes
 * @returns {array} Listado de mensajes
 */
const getUsers = async () => {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addUser,
    list: getUsers,
}
