const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');


// page to view all users posts/lists
router.get('/lists', listsCtrl.index);
// route to form to create a new list
router.get('/lists/new', listsCtrl.newList);
// route to create/post new list
router.post('/lists', listsCtrl.create);
// route to view particular list
router.get('lists/:id', listsCtrl.show);


module.exports = router;