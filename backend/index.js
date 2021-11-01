const express = require('express');
const path = require('path');

const projectsRouter = require('./routes/projects');

const app = express();
const mongoose = require('mongoose');
const keys = require ("./config/keys");
const PORT = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/projects', projectsRouter);

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;