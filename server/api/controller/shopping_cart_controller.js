const Product = require('../models/Product');
const Buyer =  require('../models/Buyer');
const Cart = require('../models/ShoppingCart')
const mongoose = require('mongoose');

exports.addToShoppingCart = async (req, res, next) => {
   
    //console.log("Buyer ID:", req.body.buyerId);
 console.log("************")
    const buyer = await Buyer.findById(req.params.buyerId);
    console.log("Buyer", req.params.buyerId);
    const updatedBuyer = await buyer.addToCart(req.params.productId);
    updatedBuyer.save();
    console.log("------------------------------------------------");
    res.status(200).send(updatedBuyer);
    console.log("UPdated Buyer", updatedBuyer);
    //         .then(docs => {
    //             res.status(200).send(docs.cart);
    //     }).catch(err => console.log(err));
}

// exports.getCart = (req, res, next) => {
//     req.buyer
//         .populate()
//         .execPopulate()
//         .then(docs => {
//           res.status(200).send(docs.cart);
            
//         })
//         .catch(err => console.log(err));
// }


exports.getCart = (req, res, next)=>{
    const id = req.params.id;
    Buyer.findById(id)
            .exec()
            .then(doc => {
                
                if(doc){
                    console.log("Data from the database: ", doc.cart);
                    res.status(200).json(doc.cart);
                } else{
                    res.status(404).json({message: 'No items in the cart'});
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err})
            });

};



exports.deleteInCart = async (req, res, next) => {

    console.log("Buyer ID:", req.params.buyerId);
 
    const buyer = await Buyer.findById(req.params.buyerId);
    console.log("Buyer", buyer);

     
    const updatedBuyer = await buyer.removeFromCart(req.params.productId)
    res.status(200).send(updatedBuyer);
    updatedBuyer.save();
        // .then(() => {
        //     res.status(404).json({message: 'The Item is successfully deleted'});
        // }).catch(err => console.log(err));
}


// session start .... not working now
exports.addShoppingCart = (req, res, next)=>{

    let productId = req.params.id;
    let cart = new Cart(req.session.cart? req.session.cart: {});
 
    Product.findById(productId, function(err, Product){
        if(err){
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
       // res.send("beko")
       res.redirect('/');
    });
};

exports.shoppingCart = (req, res, next) => {
    if(!req.session.cart){
        res.status(404).json({message: 'No Items in the Shopping Cart'});
    }
    let cart = new Cart(req.session.cart);
    res.status(200).json(cart);
}
//session end

exports.addSC = (req,res,next) =>{
    let pid = req.params.productId;

    console.log(pid);

    res.status(200).json({message: 'this works'});
}
