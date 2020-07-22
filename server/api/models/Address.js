const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    zipCode: {type: Number, required: true},
    street: { type: String, required : true},
    city: { type: String, required : true},
    state: { type: String, required : true},
    phoneNo: { type: Number, required : true},
    country: { type: String, required : true},
    buyerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Buyer', required: false},
    status: {type: String}
});

module.exports = mongoose.model('Address', addressSchema);
