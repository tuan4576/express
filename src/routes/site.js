const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

// router.use('/:slug', newsController.show)
router.get('/', siteController.index)

module.exports = router;