const mongoose = require('mongoose');
const Product = require('../models/Product');

var Schema = mongoose.Schema;

const buyerSchema = mongoose.Schema({
    // _id: { type : Number , required : true},
    // Name : { type: String, required : true},
    // Email : { type : String, required : true },
    // PWD : { type : String, required : true },
    // Role : { type : String , default: "Buyer", required : true },
    _id: {type: Schema.Types.ObjectId, required: true},
    //gainedPoints :{type: Number, required: false},

    follows : [{
        type : Schema.Types.ObjectId,
        ref : 'Follow',
        required : false
    }],

    cart:{
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: false
            },
            qty: {
                type: Number,
                required: false
            },
            title: {
                type: String,
                required: false
            },
            sellerId: {
                type: mongoose.Schema.Types.ObjectId, 
                required: true
            },
            price: {
                type: Number,
                required: false
            }
        }],
        totalQty: Number,
        totalPrice: Number
    },
    orders : [{
        type : Schema.Types.ObjectId,
        ref : 'Order',
        required : false
    }],
    // gainedPoints : [{
    //     type : Schema.Types.ObjectId,
    //     ref : 'GainPoints',
    //     required : false
    // }],

    //gainedPoints :{type: Number, required: false},

    billingInfo: {
        nameOnCard: {type: String, required: false},
        cardNumber: {type: Number, required: false},
        cvv: {type: Number, required: false},
        expiryDate: {type: String, required: false},
        zipCode: {type: Number, required: false},
        street: { type: String, required : false},
        city: { type: String, required : false},
        state: { type: String, required : false},
        phoneNo: { type: Number, required : false},
        country: { type: String, required : false},
        buyerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Buyer', required: false},
        status: {type: String}
    },
    shippingAddress: {
        zipCode: {type: Number, required: false},
        street: { type: String, required : false},
        city: { type: String, required : false},
        state: { type: String, required : false},
        phoneNo: { type: Number, required : false},
        country: { type: String, required : false},
        buyerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Buyer', required: false},
        status: {type: String}
    }

});

buyerSchema.methods.addToCart = async function(productId) {
 
    const product = await Product.findById(productId);
    console.log("seller ID: ", product.sellerId);
    if (product) {
        const cart = this.cart;
        const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(product._id).trim());
        if (isExisting >= 0) {
            cart.items[isExisting].qty += 1;
            cart.items[isExisting].price = cart.items[isExisting].price + product.price;
        } else {
            cart.items.push({ productId: product._id, qty: 1, sellerId: product.sellerId, price: product.price, title: product.title});
        }
        if (!cart.totalPrice) {
            cart.totalPrice = 0;
            
        }
        if (!cart.totalQty) {
            cart.totalQty = 0;
        }
        cart.totalPrice += product.price;
        cart.totalQty += 1;
        
        console.log("Total quantity", cart.totalQty);
        return this.save();
    }

};

buyerSchema.methods.removeFromCart = function(productId) {
    const cart = this.cart;
   
    const isExisting = cart.items.findIndex(objInItems => new String(objInItems.productId).trim() === new String(productId).trim());
    if (isExisting >= 0) {
        cart.items.splice(isExisting, 1);
        return this.save();
    }
}


module.exports = mongoose.model('Buyer', buyerSchema);

