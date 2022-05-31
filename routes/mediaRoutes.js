
const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/MediaController');


router.post('/addmedia', mediaController.addmedia);
router.get('/media', mediaController.medialist);
router.post('/media/delete/:id', mediaController.deleteMedia);
router.get('/media/details/:id', mediaController.mediaDetails);


// router.get('/uploads');
module.exports = router;