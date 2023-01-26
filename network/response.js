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

exports.error = (req, res, message, status, details) => {
    console.log(`[Response Error]: ${details}`);

    res.status(status || 500).send({
        'error': message,
        'body': ''
    });
}
