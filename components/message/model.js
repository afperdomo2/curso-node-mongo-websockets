/**
 * Crea el modelo de los mensajes en mongo
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('Messages', messageSchema);
module.exports = model;
