const express = require('express')
const app = express();
const adsRouter = require('./api/routes/ad')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json({extended: true}))

app.use(morgan("dev"))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
mongoose.connect(process.env.mongoConnection)

app.use('/ads', adsRouter)


module.exports = app