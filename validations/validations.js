const Profile = require('../models/profile');
const { body } = require("express-validator");

exports.projectValidations = [
  body('name').trim().not().isEmpty().withMessage('Name cannot be empty').isLength({ min: 3 }).withMessage('Name must be at least 3 char long.').isLength({ max: 20 }).withMessage('Name max lenght is 20.').escape(),
  body('description').trim().not().isEmpty().withMessage('Description cannot be empty').isLength({ min: 15 }).withMessage('Description must be at least 15 char long.').isLength({ max: 2000 }).withMessage('Description max length is 2000.').escape(),
  body('year').toInt().custom(value => {
    if(value < 1980 || value > 2100){
      throw new Error('Year does not match range (1980-2100)');
    }
    return true
  }).trim().escape().optional(),
  body('status', 'Wrong data, does not match predefined values. (["Development", "Standby", "Production"])').isIn(['Development', 'Standby', 'Production']).trim().escape(),
  body('stack.*').escape()
];

exports.profileValidations = [
  body('firstname').isLength({ min: 3 }).withMessage('Firstname must contain minimun 3 characters.').trim().escape(),
  body('lastname').isLength({ min: 3 }).withMessage('Lastname must contain minimun 3 characters.').trim().escape(),
  body('about').isLength({ min: 25 }).withMessage('About must have minimun 25 characters.').trim().escape(),
  body('dob').isDate({format: 'DD/MM/YYYY'}).withMessage('Must be a valid date. (DD/MM/YYYY)').optional(),
  body('gender').isIn(['Male', 'Female', 'Other']).trim().escape().optional(),
  body('phone').custom(value => {
    return Profile.findOne({phone: value}).then(user => {
      console.log(user)
      if (user) {
        return Promise.reject('Phone number already in use');
      }
    });
  }).trim().escape().optional(),
  body('country').trim().escape().optional(),
  body('city').trim().escape().optional(),
  body('work_status').isIn(['Working', 'Searching', 'Freelance']).withMessage('Data should match "Working", "Searching", "Freelance"').trim().escape().optional()
];