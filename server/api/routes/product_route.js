const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const mongoose = require('mongoose');
const productController = require('../controller/product_controller');

router.get('/', productController.listProducts);
router.post('/', productController.insertProduct);
router.get('/:productId', productController.findProduct);
router.patch('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
router.get('/category/:categoryName', productController.getCategorizedList);


module.exports = router;