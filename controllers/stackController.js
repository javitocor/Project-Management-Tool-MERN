const Stack = require('../models/stack');

const { validationResult } = require("express-validator");

exports.stack_list = async (req, res, next) => {
  try {
    const stacks = await Stack.find({}).select("-__v");
    res.json(stacks);
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.stack_detail = async (req, res, next) => {
  try {
    const stack = await Stack.findById(req.params.id).select("-__v");
    res.json(stack);
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.stack_create = async (req, res, next) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };

    try {
      const url = req.protocol + '://' + req.get('host')
      const {name, description, released_year, link} = req.body;
      const stack = new Stack({
        name,
        description,
        released_year,
        link,
        logo: url + '/public/images/' + req.file.filename
      });
      await stack.save();
      res.status(201);
      res.json({message: 'Stack created successfully', stack});
    } catch (error) {
      res.json(error)
      next();
    }
};

exports.stack_update = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };
    try {
      const url = req.protocol + '://' + req.get('host')
      let logo = '';
      if (req.file !== undefined) {
        logo = url + '/public/images/' + req.file.filename;
      } else {
        logo = req.body.logo;
      }
      const stack = await Stack.findByIdAndUpdate(req.params.id, { $set: req.body, updated_at: Date.now(), logo }, {new: true});
      res.status(200);
      res.json({message: 'Stack updated successfully', stack});
    } catch (error) {
      console.log(error)
      next();
    }
};

exports.stack_delete = async (req, res, next) => {
  try {
    await Stack.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message: 'Stack deleted Successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};