const express = require('express')
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const listItemsCtrl = require('../../controllers/api/listItems')

router.post('/', ensureLoggedIn, listItemsCtrl.create);
router.get('/', ensureLoggedIn, listItemsCtrl.index);
router.delete('/:id', ensureLoggedIn, listItemsCtrl.remove);
router.put('/edit/:id', ensureLoggedIn, listItemsCtrl.edit);

module.exports = router
