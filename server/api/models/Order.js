
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    productId: { type: mongoose.Schema.Types.ObjectId, required: true},
    buyerId: { type: mongoose.Schema.Types.ObjectId, required: true},
    sellerId: { type: mongoose.Schema.Types.ObjectId, required: true},
    status: { type: String, required: true},
    orderDate: {type: Date, required: true},
    shippedDate: {type: Date, required: false},
    deliveredDate: {type: Date, required: false},
    shippingAddress: {
        zipCode: {type: Number, required: false},
        street: { type: String, required : false},
        city: { type: String, required : false},
        state: { type: String, required : false},
        phoneNo: { type: Number, required : false},
        country: { type: String, required : false}
    }
});


module.exports = mongoose.model('order', orderSchema)
