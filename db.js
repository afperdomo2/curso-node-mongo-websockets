/**
 * Contiene toda la información para gestionar
 * la conexión de la base de datos
 */

const db = require('mongoose');

db.Promise = global.Promise;

/**
 * Establece la conexión con la base de datos
 * @param {string} url Url de la conexión
 */
const connect = async (url) => {
    await db.connect(url, { useNewUrlParser: true, })
        .then(() => console.log('[db] Conectada con éxito'))
        .catch(err => console.error('[db]', err));
}

module.exports = connect;
