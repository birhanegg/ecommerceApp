const mongoose = require('mongoose');

const dateNow = new Date();

const productSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true},
    catagoryId: {type: String, required: true},
    price: {type: Number, required: true },
    status: {type: String, default: 'Available', required: false},
    imageName: {type: String, required: true},
    descreption: {type: String, required: true},
    sellerId: {type: mongoose.Schema.Types.ObjectId, required: true},
    createDate: { type: Date, default: dateNow, required: false },
});



module.exports = mongoose.model('product', productSchema);