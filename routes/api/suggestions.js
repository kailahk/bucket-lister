const express = require('express');
const router = express.Router();
const suggestionsCtrl = require('../../controllers/api/suggestions');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.get('/', suggestionsCtrl.index);

module.exports = router
