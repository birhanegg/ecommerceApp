/**
 * MWA Project  
 * Online-shopping application using MINI stack
 * Since june 2020
 * Team-6 
 */

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);

const productRoutes = require('./api/routes/product_route');
const orderRoutes = require('./api/routes/order_route');
const reviewRoutes = require('./api/routes/review_route');
const adminRoutes = require('./api/routes/admin_route');
const buyerRoutes = require('./api/routes/buyer_route');
const shoppingCartRoutes = require('./api/routes/shopping_cart_route')

//const authRoutes = require('./api/routes/auth_route');
const authRoutes = require('./api/routes/auth_route');
const sellerRoutes = require('./api/routes/seller_route');
const addressRoutes = require('./api/routes/address_route');
const userRoutes = require('./api/routes/user_route');
const authMiddleware = require('./api/middleware/authJwt');

const signupRoutes = require('./api/routes/signUp');
const buyer = require('./api/models/Buyer');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'mysuppersecrte',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),

    cookie: { maxAge: 180 * 60 * 1000 }
}));
//app.use(flash());
// CORS error handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    res.locals.session = req.session;
    next();
});

//public 
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/signup', signupRoutes);

app.use('/products', authMiddleware.verifyToken, productRoutes);
app.use('/buyer', authMiddleware.verifyToken, buyerRoutes);
app.use('/seller', authMiddleware.verifyToken, sellerRoutes);
app.use('/admin', authMiddleware.verifyToken, adminRoutes);
app.use('/order', authMiddleware.verifyToken, orderRoutes);
app.use('/review', authMiddleware.verifyToken, reviewRoutes);
app.use('/cart', authMiddleware.verifyToken, shoppingCartRoutes);
app.use('/shopingCart', authMiddleware.verifyToken, shoppingCartRoutes);
app.use('/address', authMiddleware.verifyToken, addressRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;