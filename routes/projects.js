var express = require('express');
var router = express.Router();

var project_controller = require('../controllers/projectController');

router.get('/', project_controller.project_list);
router.get('/:id', project_controller.project_detail);
router.get('/create', project_controller.project_create_get);
router.post('/create', project_controller.project_create);
router.put('/:id', project_controller.project_update);
router.delete('/:id', project_controller.project_delete);

module.exports = router;