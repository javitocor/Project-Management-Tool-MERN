const Project = require('../models/project');

const { body, validationResult } = require("express-validator");


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

exports.project_create = async (req, res, next) => {
  const {name, date, max_tickets, ongoing} = req.body;
  const project = new Project({
    name,
    date,
    max_tickets,
    ongoing,
  });
  try {
    await project.save();
    res.status(201);
    res.json({message: 'Project created successfully'});
  } catch (error) {
    res.json(error)
    next();
  }
};

exports.project_update = async (req, res, next) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200);
    res.json({message: 'Project updated successfully'});
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