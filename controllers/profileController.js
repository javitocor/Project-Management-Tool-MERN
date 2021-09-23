const Profile = require('../models/profile');

const { body, validationResult } = require("express-validator");

exports.profile_list = async (req, res, next) => {
  try {
    const profiles = await Profile.find({}).select("-__v");
    res.json(profiles);
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.profile_detail = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id).select("-__v");
    res.json({profile});
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.profile_create = async (req, res, next) => {
  [body('firstname').isLength({ min: 3 }).withMessage('Firstname must not be empty.').trim().escape(),
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
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };
    try {
      const {firstname, lastname, dob, email, gender, phone} = req.body;
      const profile = new Profile({
        firstname,
        lastname,
        dob,
        email,
        gender,
        phone,
        /*avatar: req.file.filename,*/
      });
      await profile.save();
      res.status(201);
      res.json({message: 'Profile created successfully', profile});
    } catch (error) {
      res.json(error)
      next();
    }
};

exports.profile_update = async (req, res, next) => {
  [body('firstname').isLength({ min: 3 }).trim().escape(),
  body('lastname').isLength({ min: 3 }).trim().escape(),
  body('dob').isDate(),
  body('email').isEmail().trim().escape(),
  body('gender').isIn(['Male', 'Female', 'Other']).trim().escape(),
  body('phone').custom(value => {
    return Profile.find({phone: value}).then(profile => {
      if (profile) {
        return Promise.reject('Phone number already in use');
      }
    });
  }).trim().escape()]
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };
    try {
      const profile = await Profile.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});
      res.status(200);
      res.json({message: 'Profile updated successfully', profile});
    } catch (error) {
      res.json(error)
      next();
    }
};

exports.profile_delete = async (req, res, next) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message: 'Profile deleted Successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};