const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    //status: String,
});

module.exports = mongoose.model('User', userSchema);