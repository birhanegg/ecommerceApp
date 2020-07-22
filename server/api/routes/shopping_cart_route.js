const express = require('express');
const router = express.Router();
const Cart = require('../models/ShoppingCart')
const Product = require('../models/Product');
const mongoose = require('mongoose');
const shoppingCartController = require('../controller/shopping_cart_controller');

//router.post('/addToCart/:productId', shoppingCartController.addToShoppingCart);

router.get('/getCart/:id', shoppingCartController.getCart);
router.delete('/deletCart/:productId/:buyerId', shoppingCartController.deleteInCart);
//routes for session ..start
router.get('/add-to-cart/:id', shoppingCartController.addShoppingCart);
router.get('/listShoppingCart', shoppingCartController.shoppingCart);
router.post('/:productId/:buyerId', shoppingCartController.addToShoppingCart);
//rout for session end

module.exports = router;