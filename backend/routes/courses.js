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
    const {name, author, URL, status} = req.body;
    const course = new Course({name, author, URL, status});
    course.save((err, course) => {
        if(err) console.log(err);
        res.setHeader("Content-Type", "application/json");
        res.json(course);
    })
    
});

module.exports = router;