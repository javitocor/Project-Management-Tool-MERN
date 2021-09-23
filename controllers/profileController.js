const Profile = require('../models/profile');

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
  const {name, date, max_tickets, ongoing} = req.body;
  const profile = new Profile({
    name,
    date,
    max_tickets,
    ongoing,
  });
  try {
    await profile.save();
    res.status(201);
    res.json({message: 'Profile created successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.profile_update = async (req, res, next) => {
  try {
    await Profile.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200);
    res.json({message: 'Profile updated successfully'});
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