var express = require('express');
var router = express.Router();

var profile_controller = require('../controllers/profileController');

router.get('/', profile_controller.profile_list);
router.get('/:id', profile_controller.profile_detail);
router.post('/', profile_controller.profile_create);
router.put('/:id', profile_controller.profile_update);
router.delete('/:id', profile_controller.profile_delete);

module.exports = router;