/**
 * Almacena toda la lógica de negocio
 */

const store = require('./store');

const addUser = (name, lastName) => {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    const user = {
        name: name,
        last_name: lastName
    };
    return store.add(user);
}

const getUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = {
    addUser,
    getUsers,
}
