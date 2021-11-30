const express = require('express');
const cors = require('cors')
const path = require('path');

const projectsRouter = require('./routes/projects');
const coursesRouter = require('./routes/courses');
const booksRouter = require('./routes/books');

const app = express();
const mongoose = require('mongoose');
const keys = require ("./config/keys");
const PORT = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/courses', coursesRouter);
app.use('/api/v1/books', booksRouter);

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

module.exports = app;