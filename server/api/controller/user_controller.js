const User = require('../models/User');
const Buyer = require('../models/Buyer');
const Seller = require('../models/Seller');
const bcrypt = require('bcryptjs');

exports.insert = (req, res, next) => {
   // console.log("*******" + );
    // if(req.body.role === "Buyer"){
    //     req.body.status = "Active";
        
    // }else {
    //     req.body.status = "Pending";
    // }

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hashedPassword;

    User.create(req.body)
    .then(result => {
        if(result.role === "buyer"){
            Buyer.create({_id: result._id}).catch(err => {
                res.status(500).send({errMsg: err});
            });
        }else if(result.role === "seller"){
            Seller.create({_id: result._id}).catch(err => {
                res.status(500).send({errMsg: err});
            });
        }
        res.status(201).send({id: result._id});
        
       // console.log("*******" + result.role)
        
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.list = (req, res, next) => {
    User.find()
    .then(users => {
        res.status(200).send(users);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.getById = (req, res, next) => {
    User.findById(req.params.sellerId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.patchById = (req, res, next) => {
    User.findById(req.params.userId)
    .then(user => {
        for(let i in req.body){
            user[i] = req.body[i];
        }
        return seller.save();
    })
    .then(result => {
        res.status(204).send({})
    });
};

exports.removeById = (req, res, next) => {
    User.findByIdAndDelete(req.params.userId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.getstatusById = (req, res, next) => {
    Seller.findById(req.params.userId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};
