// const order = require('../models/Order');



// exports.insert = (req,res,next) =>{
//     order.create(req.body)
//         .then(result =>{
//             res.status(200).send(result._id);
//         })
//         .catch(err=>{
//             res.status(500).send({errMsg: err});
//         })
// };

// exports.list = (req, res , next) =>{
//     order.find()
//         .then(orders =>{
//             res.status(200).send(orders);
//         })
//         .catch(err=>{
//             res.status(500).send({errMsg: err});
//         })
// };

// exports.findOrder = (req,res,next) =>{
//     order.findById(req.params.orderid)
//         .then(result=>{
//             res.status(200).send(result);
//         }).catch(err=>{
//         res.status(500).send({errMsg: err});
//     })
// };

// exports.removeOrder = (req,res, next) =>{
//     order.findByIdAndDelete(req.params.orderid)
//         .then(result=>{
//             res.status(200).send(result);
//         }).catch(err=>{
//         res.status(500).send({ errMsg: err });
//     })
// };

const Product = require('../models/Product');
const Buyer =  require('../models/Buyer');
const Cart = require('../models/ShoppingCart')
const mongoose = require('mongoose');
const order = require('../models/Order')
//const stripe = require('stripe')('sk_test_51GvETDIHPJPrCVEhSOcy7VSHXwOqxKYZX6BieuyabJcs9T2TvnD2TrMpnqkXZJ3RBy9bJep4A0N5x5qhkMJjjUpj00IvbW8rwY');


exports.placeOrder = (req, res, next)=>{
    const id = req.params.id;
   console.log("shipping address: ", id)
    Buyer.findById(id)
            .exec()
            .then(doc => {
                
                if(doc){
                    for(let i=0; i < doc.cart.items.length; i++){
                        const ord = new order({               
                            _id: new mongoose.Types.ObjectId(),
                            buyerId: id,
                            sellerId: doc.cart.items[i].sellerId,
                            productId: doc.cart.items[i].productId,
                            status: "Pending",
                            orderDate: new Date(),
                           
                            shippingAddress: req.body   
                        });
                        ord.save()
                        .then(result => {
                            res.status(200).json({message: 'Product inserted Successfully',});
                        })
                        .catch(err => {
                           
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        }); 
                    }  
                            res.status(200).json(doc.cart.items[0].productId);
                    
                } else{
                    res.status(404).json({message: 'No items in the cart'});
                }
            })
            .catch(err => {
                console.log("Memar #####");
              console.log(err);
                res.status(500).json({error: err})
            });

};

exports.payBill = (req, res, next) =>{
    const stripeToken = req.params.paymentToken;
    console.log("Th etoken is: ", stripeToken);
    stripeToken.customer.create({
        email: "memarez@gmail.com",
        source: stripeToken,
    }, (err, customer) => {
        console.log(err);
        sonsole.log(customer);
        if(err){
            res.send({
                success: false,
                message: "Error"
            });
            
        } else{
            const customer = "cus_HUEqyeah5MGStJ";
            stripe.subscriptions.create({
                customer: id,
                items: [{
                    plan : "basic-monthly",
                },
            ],
            }, (err, subscription) => {
                console.log(err);
                sonsole.log(subscription);
                if(err){
                    res.send({
                        success: true,
                        message: "success"
                    });
                }
            });
        }
    });
}


