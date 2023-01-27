/**
 * Archivo de Capa de Red para configurar
 * todas las respuestas
 */

/**
 * @param {object} req Request
 * @param {object} res Response
 * @param {string} message Respuesta personalizada
 * @param {number} status Código del estado
 */
exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        'error': '',
        'body': message
    });
}

exports.error = (req, res, message, status, errorDetails) => {
    console.log(`[Response Error]: ${errorDetails}`);

    res.status(status || 500).send({
        'error': message,
        'body': ''
    });
}
