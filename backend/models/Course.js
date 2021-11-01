const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence')(mongoose);

const { Schema } = mongoose;

const courseSchema = new Schema({
    _id: Number,
    name: String,
    author: String,
    url: String,
    status: String
});

courseSchema.plugin(AutoIncrement, {inc_field: "_id"})

mongoose.model('courses', courseSchema); // load into mongoose