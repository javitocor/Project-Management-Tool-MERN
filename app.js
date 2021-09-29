require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var compression = require('compression');
var helmet = require('helmet');

var stacksRouter = require('./routes/stacks');
var projectsRouter = require('./routes/projects');
var profileRouter = require('./routes/profile');

var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = process.env.MONGODB_URI;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('MongoDB has connected successfully.'));
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", 'https://ka-f.fontawesome.com'], 
        scriptSrc: ["'self'", "'unsafe-inline'", '*.fontawesome.com', 'https://use.fontawesome.com/releases/v5.15.4/js/all.js', 'https://kit.fontawesome.com',  'https://fonts.googleapis.com ', 'https://kit.fontawesome.com/d4de0f4540.js', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js', 'https://code.jquery.com/jquery-3.5.1.slim.min.js'],
        styleSrc: ["'self'", "'unsafe-inline'", '*.fontawesome.com', 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'],
        imgSrc: ["*", 'data:'],
        fontSrc: ["'self'", 'data:', '*.fontawesome.com', 'https://ka-f.fontawesome.com'],
        connectSrc: ["'self'", '*.fontawesome.com', 'https://ka-f.fontawesome.com', 'https://ka-f.fontawesome.com/releases/v5.15.4/js/free-v4-shims.min.jsd', 'https://ka-f.fontawesome.com/releases/v5.15.4/js/free.min.js'],
        frameSrc: ["'self'"],
      },
      reportOnly: false,
    }
  })
);
app.use(compression());
app.use(express.static(path.join(__dirname, './frontend/build/')));
//app.use('/public', express.static('public'));

app.use('/api/stacks', stacksRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/profile', profileRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
