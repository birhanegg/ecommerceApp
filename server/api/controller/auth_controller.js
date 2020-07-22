const User = require('../models/User');
const ApiResponse = require('../models/api.response');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/key');

exports.signin = async(req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const isValid = await bcrypt.compare(req.body.password, user.password);
            if (isValid) {
                const token = jwt.sign({ data: req.body.email }, config.jwtKey, {
                    expiresIn: config.jwtExpirySeconds
                });
                res.status(200).json({
                    token: token,
                    expiresIn: config.jwtExpirySeconds,
                    user : user
                });
            } else {
                res.status(401).send(new ApiResponse(401, 'error', { err: 'email or password not exist' }));
            }

        } else {
            res.status(401).send(new ApiResponse(401, 'error', { err: 'email or password not exist' }));
        }
    } catch (err) {
        res.status(500).send(new ApiResponse(500, 'error', err));
    }
}