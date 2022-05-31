const express = require('express');
const router = express.Router();
const brandController = require('../controllers/BrandController');



router.get('/brand', brandController.brandlist);
router.post('/addbrand', brandController.addbrand);
router.delete('/brand/delete/:id', brandController.deletebrand);
router.get('/brand/details/:id', brandController.BrandDetails);
router.post('/brand/update/:id', brandController.UpdateBrand)



module.exports = router;