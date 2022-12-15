const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const listItemsCtrl = require('../../controllers/api/listItems')

router.post('/', listItemsCtrl.create);
router.get('/', listItemsCtrl.index);
router.delete('/:id', listItemsCtrl.remove);

module.exports = router