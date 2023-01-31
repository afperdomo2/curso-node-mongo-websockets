/**
 * Crea el modelo de los usuarios en mongo
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: false,
    }
});

const model = mongoose.model('Users', userSchema);
module.exports = model;
