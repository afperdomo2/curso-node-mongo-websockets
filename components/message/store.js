/**
 * Almacena toda la lógica de base de datos
 */

const db = require('mongoose');
const Model = require('./model');

const urlAtlas = 'mongodb+srv://db_user_curso:rVWPNPD1iqhwseHl@cluster0.ks5tddn.mongodb.net/telegrom';

db.Promise = global.Promise;

db.connect(urlAtlas, {
    useNewUrlParser: true,
})
    .then(() => console.log('[db] Conectada con éxito'))
    .catch(err => console.error('[db]', err));

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
 * @returns {array}
 */
const getMessages = async () => {
    const messages = await Model.find();
    return messages;
}

/**
 * Actualiza el texto del mensaje
 * @param {string} id Código del mesaje
 * @param {string} message Nuevo mensage
 * @returns 
 */
const updateText = async (id, message) => {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    console.log(typeof newMessage)
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    // get
    // update
    // delete
}
