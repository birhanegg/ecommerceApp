








const Address = require('../models/Address');

// const Product = require('../models/Product');
// const Cart = require('../models/ShoppingCart')
// const mongoose = require('mongoose');

// exports.addToShoppingCart = (req, res, next) => {
  
//     req.buyer.addToCart(req.params.id)
//             .then(docs => {
//                 res.status(200).send(docs.cart);
//         }).catch(err => console.log(err));
// }

// exports.getCart = (req, res, next) => {
//     req.buyer
//         .populate()
//         .execPopulate()
//         .then(docs => {
//           res.status(200).send(docs.cart);
            
//         })
//         .catch(err => console.log(err));
// }
exports.insert = (req, res, next) => {
    Address.create(req.body)
    .then(result => {
        res.status(201).send({id: result._id});
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.list = (req, res, next) => {
    Address.find()
    .then(address => {
        res.status(200).send(address);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

// exports.getById = (req, res, next) => {
//     Review.findById(req.params.reviewId)
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(err => {
//         res.status(500).send({errMsg: err});
//     });
// };

// exports.patchById = (req, res, next) => {
//     Review.findById(req.params.reviewId)
//     .then(review => {
//         for(let i in req.body){
//             review[i] = req.body[i];
//         }
//         return review.save();
//     })
//     .then(result => {
//         res.status(204).send({})
//     });
// };

// exports.removeById = (req, res, next) => {
//     Review.findByIdAndDelete(req.params.reviewId)
//     .then(result => {
//         res.status(200).send(result);
//     })
//     .catch(err => {
//         res.status(500).send({ errMsg: err });
//     });
// };
