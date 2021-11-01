const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Project');
const Project = mongoose.model("projects");


router.get('/', async (req, res, next) => {
    const projects = await Project.find();
    res.setHeader("Content-Type", "application/json");
    res.json(projects);
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const project = await Project.findById(id);
    res.setHeader("Content-Type", "application/json");
    res.json(project);
});

router.post('/', async (req, res, next) => {
    const {name, description, img, githubURL, status} = req.body;
    const project = new Project({name, description, img, githubURL, status});
    project.save((err, project) => {
        if(err) console.log(err);
        res.setHeader("Content-Type", "application/json");
        res.json(project);
    })
    
});

module.exports = router;