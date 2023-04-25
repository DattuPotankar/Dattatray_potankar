const express = require('express')
const Ad = require('../model/ad')
const router = express.Router()
const mongoose = require('mongoose')
const adController = require("../controller/ad.model")

//Handle GET request for ads
router.get('/', adController.getAds)
//  (req, res) => {
//     res.status(200).json({
//         msg: "This is a GET request for ads"
//     })
// })
module.exports = router