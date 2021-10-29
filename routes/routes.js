const express = require('express');
const {orders} = require("./actions/actions")
const {homepage} = require("./actions/actions");
const {addOrder} = require("./actions/actions");
const {createOrder} = require("./actions/actions");
const {editOrder} = require("./actions/actions");
const UserActions = require("./actions/actionsUser");


const router = express.Router();

router.get("/", homepage)
router.get("/showOrders", orders)
router.post("/addOrder", addOrder)
// router.get("/createOrder", createOrder)
router.get("/editOrder", editOrder)
router.post("/register", UserActions.register)
router.post("/login", UserActions.login)
router.get("/logout", UserActions.logout)

// 404 site
router.get('*', (req, res) => {
    res.render('pages/404');
})

module.exports = router;