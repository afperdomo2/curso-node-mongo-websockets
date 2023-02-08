/**
 * Archivo de Capa de Red para configurar
 * todas las respuestas
 */
const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error',
};

/**
 * @param {object} req Request
 * @param {object} res Response
 * @param {string} message Respuesta personalizada
 * @param {number} status Código del estado
 */
exports.success = (req, res, message, status) => {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 200;
    }
    if (!message) {
        statusMessage = statusMessages[status];
    }
    res.status(statusCode).send({ 
        error: '',
        body: statusMessage
    });
}

exports.error = (req, res, message, status, errorDetails) => {
    console.log(`[Response Error]: ${errorDetails}`);

    res.status(status || 500).send({
        'error': message,
        'body': ''
    });
}
