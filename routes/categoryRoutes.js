const express = require('express');
const router = express.Router();
const brandController = require('../controllers/CategoryController');



router.get('/category', brandController.categorylist);
router.post('/addcategory', brandController.addCategory);
router.delete('/category/delete/:id', brandController.deleteCategory);
router.get('/category/details/:id', brandController.categoryDetails);
router.post('/category/update/:id', brandController.updateCategory)



module.exports = router;