const express = require('express');
const path = require("path");
const {port, databse} = require('./config');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

// check is user logged
app.get('/', (req, res) => {
    if(req.get){
        res.send("Witaj w mojej aplikacji i działa odczytywanie portu z pliku env")
    } else {
        res.redirect('/login.html')
    }
    
})

app.listen(port,  () => {
    console.log("Server is running on port", port)
})