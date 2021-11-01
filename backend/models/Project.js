const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;

const projectSchema = new Schema({
    _id: Number,
    name: String,
    description: String,
    img: Array,
    githubURL: String,
    status: String
});

projectSchema.plugin(AutoIncrement, {inc_field: "_id"})

mongoose.model('projects', projectSchema); // load into mongoose