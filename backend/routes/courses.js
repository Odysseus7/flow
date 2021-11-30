const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Course');
const Course = mongoose.model("courses");


router.get('/', async (req, res, next) => {
    const courses = await Course.find({status: "active"});
    res.setHeader("Content-Type", "application/json");
    res.json(courses);
});

router.post('/', async (req, res, next) => {
    const {name, description, author, URL} = req.body;
    const status = "active";
    const course = new Course({name, description, author, URL, status});
    course.save((err, course) => {
        if(err) console.log(err);
        res.setHeader("Content-Type", "application/json");
        res.json(course);
    })
    
});

module.exports = router;