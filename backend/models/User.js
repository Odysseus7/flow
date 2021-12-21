const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
	username: String,
	password: String,
	token: String,
});

mongoose.model("users", userSchema);
