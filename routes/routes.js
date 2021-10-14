const express = require('express');
const {showOrder} = require("./actions/actions")


const router = express.Router();

router.get("/showOrder", showOrder)

module.exports = router;