const createError = require('http-errors');
const path = require('path');
const express = require('express');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport')
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const connectDB = require('./config/db');

const User = require('./models/user')
// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())
app.use(passport.session())


passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// app.use((req, res, next) => {
//     res.locals.message = req.flash('error')
//     res.locals.message_in = req.flash('success')
//     next()
// })
app.set('view engine', 'ejs');

app.use(flash())
app.use(require('express-session')({
    secret: "what is this???",
    resave: false,
    saveUninitialized: false
}))

// Routes
app.use('/', require('./routes/stores'));
app.use('/', require('./routes/register'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/addnew'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error ocuured');
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
