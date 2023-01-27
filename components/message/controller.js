
const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay un usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const userCreated = {
            user: user,
            message: message,
            date: new Date()
        }
        console.log(userCreated);
        resolve(userCreated);
    });

}

module.exports = {
    addMessage,
}