const express = require('express');
const app = express();
const path = require("path");
const {port, databse} = require('./config');
const router = require("./routes/routes");

// view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname + '/views'))

app.use('/', express.static(path.join(__dirname, 'public')));

//router api
app.use("/api", router);

// check is user logged
app.get('/', (req, res) => {
    if(req.get){
        res.render('home');
    } else {
        res.redirect('/login.html')
    }
    
})

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port,  () => {
    console.log("Server is running on port", port)
})