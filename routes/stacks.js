var express = require('express');
var router = express.Router();
var stack_controller = require('../controllers/stackController');
let multer = require('multer');

const DIR = './public/';

const storage = multer.diskStorage({
    destination: './public/images',
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
}).single('logo');

router.get('/', stack_controller.stack_list);
router.get('/:id', stack_controller.stack_detail);
router.post('/create', upload, stack_controller.stack_create);
router.put('/:id', stack_controller.stack_update);
router.delete('/:id', stack_controller.stack_delete);

module.exports = router;
