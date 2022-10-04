// Importar mongoose
const mongoose = require('mongoose');
// Crear el modelo de usuario con la funcion Schema de mongoose
// Importar modulo para encriptar la contraseña
// const bcrypt = require('bcrypt-nodejs');


const userSchema = mongoose.Schema({
    name:
    {
        nombres: { type: String, required: true },
        apellidos: { type: String, required: true },
    },

    username: { type: String, required: true, unique: true },

    email: { type: String, required: true },

    password: { type: String, required: true, select: false }
});

// userSchema.pre('save', (next) => {
//     let user = this;
//     // if (!user.isModified('password')) return next()

//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) return next(err);

//         bcrypt.hash(user.password, salt, null, (err, hash) => {
//             if (err) return next(err);

//             user.password = hash;
//             next();
//         });
//     });
// });

// Exportar modelo de usuario
module.exports = mongoose.model('User', userSchema);