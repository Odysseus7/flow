const mongoose = require('mongoose');
const uuid = require("uuid");
const { Schema } = mongoose;

const projectSchema = new Schema({
    _id: {type: String, default: uuid.v4() },
    name: String,
    description: String,
    img: Array,
    githubURL: String,
    status: String
});

mongoose.model('projects', projectSchema); // load into mongoose