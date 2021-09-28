const Profile = require('../models/profile');

const { validationResult } = require("express-validator");

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
    res.json(profile);
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.profile_create = async (req, res, next) => {  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };
    try {
      const url = req.protocol + '://' + req.get('host')
      const {firstname, lastname, about, dob, email, gender, phone, github, linkedin, angelist, city, country, work_status} = req.body;
      const profile = new Profile({
        firstname,
        lastname,
        about,
        dob,
        email,
        gender,
        phone,
        city,
        country,
        work_status,
        avatar: url + '/public/images/' + req.file.filename,
      });
      if (github) {
        await profile.socialMedia.set('Github', github)
      }
      if (linkedin) {
        await profile.socialMedia.set('Linkedin', linkedin)
      }
      if (angelist) {
        await profile.socialMedia.set('Angelist', angelist)
      }
      await profile.save();
      res.status(201);
      res.json({message: 'Profile created successfully', profile});
    } catch (error) {
      res.json(error)
      next();
    }
};

exports.profile_update = async (req, res, next) => {
  /*const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };*/
    try {
      const url = req.protocol + '://' + req.get('host')
      let avatar = null;
      if (req.file !== undefined) {
        avatar = url + '/public/images/' + req.file.filename ;
      } else {
        avatar = req.body.avatar
      }      
      const {github, linkedin, angelist} = req.body;
      const profile = await Profile.findByIdAndUpdate(req.params.id, { $set: req.body, updated_at: Date.now(), avatar }, {new: true});
      if (github) {
        await profile.socialMedia.set('Github', github)
      }
      if (linkedin) {
        await profile.socialMedia.set('Linkedin', linkedin)
      }
      if (angelist) {
        await profile.socialMedia.set('Angelist', angelist)
      }
      await profile.save();
      res.status(200);
      res.json({message: 'Profile updated successfully', profile});
    } catch (error) {
      console.log(error)
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