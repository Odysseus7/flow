const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Course');
const Course = mongoose.model("courses");


router.get('/', async (req, res, next) => {
    const courses = await Project.find();
    res.setHeader("Content-Type", "application/json");
    res.json(courses);
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    const course = await Course.findById(id);
    res.setHeader("Content-Type", "application/json");
    res.json(course);
});

router.post('/', async (req, res, next) => {
    const {name, description, img, githubURL, status} = req.body;
    const course = new Course({name, description, img, githubURL, status});
    course.save((err, course) => {
        if(err) console.log(err);
        res.setHeader("Content-Type", "application/json");
        res.json(course);
    })
    
});

module.exports = router;