const Profile = require('../models/profile');
const { body } = require("express-validator");

exports.projectValidations = [
  body('name').trim().not().isEmpty().withMessage('Name cannot be empty').isLength({ min: 3 }).withMessage('Name must be at least 3 char long.').isLength({ max: 20 }).withMessage('Name max lenght is 20.').escape(),
  body('description').trim().not().isEmpty().withMessage('Description cannot be empty').isLength({ min: 15 }).withMessage('Description must be at least 15 char long.').isLength({ max: 2000 }).withMessage('Description max length is 2000.').escape(),
  body('year', 'year must be in the range (1980-2100)').trim().toInt().custom(value=>{
    if(value < 1980 || value > 2100){
      throw new Error('Years does not match range (1980-2100)');
    }
  }).escape(),
  body('status', 'Wrong data, does not match predefined values. (["Development", "Standby", "Production"])').isIn(['Development', 'Standby', 'Production']).trim().escape(),
  body('stack.*').escape()
];

exports.profileValidations = [
  body('firstname').isLength({ min: 3 }).withMessage('Firstname must not be empty.').trim().escape(),
  body('lastname').isLength({ min: 3 }).withMessage('Lastname must not be empty.').trim().escape(),
  body('dob').isDate().withMessage('Must be a date').optional(),
  body('email', 'Your email is not valid').trim().not().isEmpty().isEmail().normalizeEmail().escape(),
  body('gender').not().isIn(['Male', 'Female', 'Other']).trim().escape().optional(),
  body('phone', 'Phone number already in use').custom(value => {
    return Profile.find({phone: value}).then(profile => {
      if (profile) {
        return Promise.reject('Phone number already in use');
      }
    });
  }).trim().escape().optional()
];