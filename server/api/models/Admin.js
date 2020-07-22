




const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('admin', adminSchema);
