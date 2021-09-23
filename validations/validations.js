const { body, validationResult } = require("express-validator");

exports.projectValidations = [body('name').isLength({ min: 3 }).withMessage('Name must not be empty.').trim().escape(),
  body('description').isLength({ min: 15 }).withMessage('Description must not be empty.').trim().escape(),
  body('year', 'year must be in the range (1980-2100)').custom(value=>{
    if(value < 1980 || value > 2100){
      throw new Error('Years does not match range (1980-2100)');
    }
    return true;
  }).toInt().trim().escape(),
  body('status', 'Wrong data, does not match predefined values').isIn(['Development', 'Standby', 'Production']).trim().escape(),
  body('stack.*').escape(),];

  exports.profileValidations = [body('firstname').isLength({ min: 3 }).withMessage('Firstname must not be empty.').trim().escape(),
  body('lastname').isLength({ min: 3 }).withMessage('Lastname must not be empty.').trim().escape(),
  body('dob').isDate().withMessage('Must be a date'),
  body('email').isEmail().trim().escape(),
  body('gender').not().isIn(['Male', 'Female', 'Other']).trim().escape(),
  body('phone', 'Phone number already in use').custom(value => {
    return Profile.find({phone: value}).then(profile => {
      if (profile) {
        return Promise.reject('Phone number already in use');
      }
    });
  }).trim().escape()]