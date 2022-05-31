const express = require('express');
const router = express.Router();
const productsController = require('../controllers/ProductController');



router.get('/products', productsController.productlist);
router.post('/product/add', productsController.addProduct);
router.delete('/product/delete/:id', productsController.deleteProduct);
router.get('/product/details/:id', productsController.productDetails);
router.post('/product/update/:id', productsController.updateProduct)



module.exports = router;