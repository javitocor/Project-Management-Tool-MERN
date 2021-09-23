var express = require('express');
var router = express.Router();

var stack_controller = require('../controllers/stackController');

router.get('/', stack_controller.stack_list);
router.get('/:id', stack_controller.stack_detail);
router.post('/create', stack_controller.stack_create);
router.put('/:id', stack_controller.stack_update);
router.delete('/:id', stack_controller.stack_delete);

module.exports = router;
