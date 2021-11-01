const express = require('express');
const {getAllOrders} = require("./actions/actions")
const {homepage} = require("./actions/actions");
const {addOrder} = require("./actions/actions");
const {oneOrder} = require("./actions/actions");
const {updateOrder} = require("./actions/actions");
const {deletOrder} = require("./actions/actions");
const UserActions = require("./actions/actionsUser");


const router = express.Router();

router.get("/", homepage)
router.get("/showOrders", getAllOrders)
router.post("/addOrder", addOrder)
router.get("/oneOrder/:id", oneOrder)
router.put("/updateOrder/:id", updateOrder)
router.delete("/deleteOrder/:id", deletOrder)

router.post("/register", UserActions.register)
router.post("/login", UserActions.login)
router.get("/logout", UserActions.logout)

// 404 site
router.get('*', (req, res) => {
    res.render('pages/404');
})

module.exports = router;