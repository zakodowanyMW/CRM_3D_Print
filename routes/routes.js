const express = require('express');
const {getOrders} = require("./actions/actions")
const {homepage} = require("./actions/actions");
const {addOrder} = require("./actions/actions");
const {checkLogin} = require("./actions/actions");
const {createOrder} = require("./actions/actions");
const {editOrder} = require("./actions/actions");
const {register} = require("./actions/actions");
const {login} = require("./actions/actions");
const {logout} = require("./actions/actions");


const router = express.Router();

router.get("/", homepage)
router.get("/showOrders", getOrders)
router.post("/addOrder", addOrder)
router.get("/createOrder", createOrder)
router.get("/editOrder", editOrder)
router.post("/register", register)
router.post("/login", login)
router.get("/logout", logout)

//pozostałe adresy niezdefiniowane
router.get('*', (req, res) => {
    res.render('404');
})

module.exports = router;