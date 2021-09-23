const Project = require('../models/project');
const Stack = require('../models/stack');

const { validationResult } = require("express-validator");


exports.project_list = async (req, res, next) => {
  try {
    const projects = await Project.find({}).select("-__v");
    res.json(projects);
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.project_detail = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id).select("-__v");
    res.json({project});
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.project_create_get = async(req, res, next) => {
  try {
    const stacks = await Stack.find({}).select("-__v -description -released_year");
    res.json(stacks);
  } catch (error) {
    res.json(error);
    next();
  }
};

exports.project_create = async (req, res, next) => {
  if (!(req.body.stack instanceof Array)) {
    if (typeof req.body.stack === 'undefined') {
      req.body.stack = [];
    } else {
      req.body.stack = new Array(req.body.stack);
    }
  }
  
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };

    try {
      const {name, description, year, status, stack, links} = req.body;
      const project = new Project({
        name,
        description,
        year,
        status,
        stack,
        links,
        /*images: req.file.filename,*/
      });
      await project.save();
      res.status(201);
      res.json({message: 'Project created successfully', project});
    } catch (error) {
      res.json(error)
      next();
    }
};

exports.project_update = async (req, res, next) => {
  if (!(req.body.stack instanceof Array)) {
    if (typeof req.body.stack === 'undefined') {
      req.body.stack = [];
    } else {
      req.body.stack = new Array(req.body.stack);
    }
  }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array()
      });
    };

    try {
      const project = await Project.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});
      res.status(200);
      res.json({message: 'Project updated successfully', project});
    } catch (error) {
      res.json(error)
      next();
    }
};

exports.project_delete = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json({message: 'Project deleted Successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};