const express = require('express');
const app = express();
const path = require("path");
const {port, sessionKeySecret} = require('./config');
var ejsLayouts = require('express-ejs-layouts');
const router = require("./routes/routes");
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser');

//session
app.use(session({
    secret: sessionKeySecret,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    resave: false
}))

//parsers
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.set('views',path.join(__dirname + '/views'))
app.set('layout', './layouts/main')

app.use('/', express.static(path.join(__dirname, 'public')));

//router api
app.use("/", router);


app.listen(port,  () => {
    console.log("Server is running on port", port)
})