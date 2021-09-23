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

exports.profile_create = (req, res, next) => {
  body('firstname', 'Firstname must not be empty.').isLength({ min: 3 }).trim().escape(),
  body('lastname', 'Lastname must not be empty.').isLength({ min: 3 }).trim().escape(),
  body('dob', 'Must be a date').isDate(),
  body('email', 'Description must not be empty.').isEmail().trim().escape(),
  body('gender', 'Firstname must not be empty.').inIn(['Male', 'Female', 'Other']).trim().escape(),
  body('phone', 'Phone number already in use').custom(value => {
    return Profile.find({phone: value}).then(profile => {
      if (profile) {
        return Promise.reject('Phone number already in use');
      }
    });
  }).trim().escape()
  async (req, res, next) => {
    try {
      const {firstname, lastname, dob, email, gender, phone} = req.body;
      const profile = new Profile({
        firstname,
        lastname,
        dob,
        email,
        gender,
        phone,
        avatar: req.file.filename,
      });
      await profile.save();
      res.status(201);
      res.json({message: 'Profile created successfully', profile});
    } catch (error) {
      res.json(error)
      next();
    }
  }
};

exports.profile_update = (req, res, next) => {
  body('firstname', 'Firstname must not be empty.').isLength({ min: 3 }).trim().escape(),
  body('lastname', 'Lastname must not be empty.').isLength({ min: 3 }).trim().escape(),
  body('dob', 'Must be a date').isDate(),
  body('email', 'Description must not be empty.').isEmail().trim().escape(),
  body('gender', 'Firstname must not be empty.').inIn(['Male', 'Female', 'Other']).trim().escape(),
  body('phone', 'Phone number already in use').custom(value => {
    return Profile.find({phone: value}).then(profile => {
      if (profile) {
        return Promise.reject('Phone number already in use');
      }
    });
  }).trim().escape()
  async (req, res, next) => {
    try {
      const profile = await Profile.findByIdAndUpdate(req.params.id, { $set: req.body });
      res.status(200);
      res.json({message: 'Profile updated successfully', profile});
    } catch (error) {
      res.json(error)
      next();
    }
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