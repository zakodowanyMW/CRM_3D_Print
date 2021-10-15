const express = require('express');
const {getOrders} = require("./actions/actions")
const {homepage} = require("./actions/actions");
const {addOrder} = require("./actions/actions");
const {checkLogin} = require("./actions/actions");


const router = express.Router();

router.get("/", homepage)
router.get("/showOrders", getOrders)
router.get("/addOrder", addOrder)
router.post("/checkLogin", checkLogin)

//pozostałe adresy niezdefiniowane
router.get('*', (req, res) => {
    res.render('404');
})

module.exports = router;