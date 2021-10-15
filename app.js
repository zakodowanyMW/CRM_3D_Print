const express = require('express');
const app = express();
const path = require("path");
const {port, databse} = require('./config');
const router = require("./routes/routes");

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname + '/views'))

app.use('/', express.static(path.join(__dirname, 'public')));

//router api
app.use("/", router);


app.listen(port,  () => {
    console.log("Server is running on port", port)
})