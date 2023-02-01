/**
 * Almacena toda la lógica de base de datos
 */

const Model = require('./model');

/**
 * Agrega un mensaje en la colección Messages
 * @param {object} message Datos del mensaje
 */
const addMessage = (message) => {
    const myMessage = new Model(message);
    myMessage.save();
}

/**
 * Lista todos los mensajes
 * @param {string} filterUser Usuario a filtrar
 * @returns {array} Listado de mensajes
 */
const getMessages = async (filterUser) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            //filter = { user: filterUser };
            filter.user = new RegExp(filterUser, "i");
        }
        Model.find(filter)
            .populate('user')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                }
                resolve(populated);
            });
    });
    
}

/**
 * Actualiza el texto del mensaje
 * @param {string} id Código del mesaje
 * @param {string} message Nuevo texto del mensage
 * @returns {object} Mensaje actualizado
 */
const updateText = async (id, message) => {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

/**
 * Permite borrar un mensaje por id
 * @param {string} id 
 * @returns {promise} Promesa del borrado
 */
const deleteMessage = (id) => {
    return Model.deleteOne({ _id: id });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    delete: deleteMessage,
}
