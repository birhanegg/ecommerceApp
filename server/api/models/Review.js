const mongoose = require('mongoose');

const dateNow = new Date();

const reviewSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    orderProductId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: false},
    status: { type: String , required : false},
    buyerId: { type: Number, required : false},
    createdDate: { type: Date, default: dateNow, required : false},
    stars: { type: Number, required : true},
    comment: { type: String, required : true},
    decisionDate: { type: Date, required : false}
});

module.exports = mongoose.model('review', reviewSchema);
