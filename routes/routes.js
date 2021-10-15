const express = require('express');
const {getOrders} = require("./actions/actions")


const router = express.Router();

router.get("/showOrders", getOrders)

module.exports = router;