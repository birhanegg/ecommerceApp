const Admin = require('../models/Admin');
const Review = require('../models/Review');
const Seller = require('../models/Seller');
const User = require('../models/User');

const dateNow = new Date();

exports.viewPendingReviews = (req, res, next) => {
    Review.find({status: "Created"})
    .then(result => {   
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });

};

exports.postReview = (req, res, next) => {
    Review.findByIdAndUpdate(req.params.reviewId, {status: "Posted", decisionDate: dateNow})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.declineReview = (req, res, next) => {
    Review.findByIdAndUpdate(req.params.reviewId, {status: "Declined"})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.viewPendingSellers = (req, res, next) => {
    Seller.find({status: "Pending"})
    .then(result => {   
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.viewSellerByUserId = (req, res, next) => {
    User.findById(req.params.userId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
}; 

exports.aceptSeller = (req, res, next) => {
    Seller.findByIdAndUpdate(req.params.sellerId, {status: "Active"})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.denySeller = (req, res, next) => {
    Seller.findByIdAndUpdate(req.params.sellerId, {status: "Denied"})
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};