const Seller = require('../models/Seller');
const Product = require('../models/Product');
const Order = require('../models/Order');
// const User = require('../models/User');

// exports.registerAsSeller = (req, res, next) => {
//     User.create(req.body)
//     .then(result => {
//         res.status(201).send({id: result._id});
//     })
//     .catch(err => {
//         res.status(500).send({errMsg: err});
//     });
// };

const dateNow = new Date();

exports.insert = (req, res, next) => {
    Seller.create(req.body)
    .then(result => {
        res.status(201).send({id: result._id});
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.list = (req, res, next) => {
    Seller.find()
    .then(sellers => {
        res.status(200).send(sellers);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.getById = (req, res, next) => {
    Seller.findById(req.params.sellerId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.patchById = (req, res, next) => {
    Seller.findById(req.params.sellerId)
    .then(seller => {
        for(let i in req.body){
            seller[i] = req.body[i];
        }
        return seller.save();
    })
    .then(result => {
        res.status(204).send({})
    });
};

exports.removeById = (req, res, next) => {
    Seller.findByIdAndDelete(req.params.sellerId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.findProductsBySellerId = (req, res, next) => {
    Product.find({sellerId: req.params.sellerId})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.findOrderBySellerId = (req, res, next) => {
    Order.find({sellerId: req.params.sellerId})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};


exports.getById = (req, res, next) => {
    Product.findById(req.params.productId)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({errMsg: err});
        });
};

exports.getOrderById = (req, res, next) => {
    Order.findById(req.params.orderId)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({errMsg: err});
        });
};

exports.patchById = (req, res, next) => {
    Product.findById(req.params.productId)
    .then(review => {
        for(let i in req.body){
            review[i] = req.body[i];
        }
        return review.save();
    })
    .then(result => {
        res.status(204).send({})
    });
};

exports.patchOrderById = (req, res, next) => {
    Order.findById(req.params.orderId)
    .then(review => {
        for(let i in req.body){
            review[i] = req.body[i];
        }
        return review.save();
    })
    .then(result => {
        res.status(204).send({})
    });
};

exports.removeById = (req, res, next) => {
    Product.findByIdAndDelete(req.params.productId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.cancelOrder = (req, res, next) => {
    Order.findByIdAndUpdate(req.params.orderId, {status: "Canceled"})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
}

exports.addProductsBySellerId = (req, res, next) => {
    console.log('*****************' + req.body);
    // Product.create(req.body)
    // .then(result => {
    //     res.status(201).send({id: result._id});
    // })
    // .catch(err => {
    //     res.status(500).send({errMsg: err});
    // });
    const prod = new Product({
        
        //_id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        catagoryId: req.body.catagory,
        price: req.body.price,
        imageName: req.body.imageName,
        descreption: req.body.description,
        sellerId: req.body.sellerId
    });

    prod.save()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    message: 'Product inserted Successfully',
                    createdProduct: {
                        title: result.title,
                        catagoryId: result.catagoryId,
                        price: result.price,
                        status: result.status,
                        imageName: result.imageName,
                        descreption: result.descreption,
                        sellerId: result.sellerId
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            });  
};

exports.changeOrderStatusShipped = (req, res, next) => {
    Order.findByIdAndUpdate(req.params.orderId, {status: "Shipped", shippedDate: dateNow})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.changeOrderStatusDelivered = (req, res, next) => {
    Order.findByIdAndUpdate(req.params.orderId, {status: "Delivered", deliveredDate: dateNow})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.changeOrderStatusOnTheWay = (req, res, next) => {
    Order.findByIdAndUpdate(req.params.orderId, {status: "On The Way"})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};