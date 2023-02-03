/**
 * Crea el modelo de los mensajes en mongo
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chats',
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        ref: 'Users',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});

const model = mongoose.model('Messages', messageSchema);
module.exports = model;
