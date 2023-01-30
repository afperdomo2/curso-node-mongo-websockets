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

const list = [];

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
