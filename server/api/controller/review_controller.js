const Review = require('../models/Review');

exports.insert = (req, res, next) => {
    Review.create(req.body)
    .then(result => {
        res.status(201).send({id: result._id});
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.list = (req, res, next) => {
    Review.find()
    .then(reviews => {
        res.status(200).send(reviews);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.getById = (req, res, next) => {
    Review.findById(req.params.reviewId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({errMsg: err});
    });
};

exports.patchById = (req, res, next) => {
    Review.findById(req.params.reviewId)
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
    Review.findByIdAndDelete(req.params.reviewId)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};

exports.findReviewByProductId = (req, res, next) => {
    Review.find({orderProductId: req.params.productId, status: 'Posted'})  //add status posted to prevent unpost reetrival
    .then(result => {   
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(500).send({ errMsg: err });
    });
};