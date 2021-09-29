var express = require('express');
var router = express.Router();
var upload = require('../uploadImages/uploads');
const validations = require('../validations/validations');

var profile_controller = require('../controllers/profileController');

router.get('/', profile_controller.profile_list);
router.get('/:id', profile_controller.profile_detail);
router.post('/create', [upload.fileUpload('avatar'), validations.profileValidations], profile_controller.profile_create);
router.put('/:id', [upload.fileUpload('avatar'), validations.profileValidations], profile_controller.profile_update);
router.delete('/:id', profile_controller.profile_delete);

module.exports = router;