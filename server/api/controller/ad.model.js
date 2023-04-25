const mongoose = require('mongoose')
const Ad = require('../model/ad')

// R from CRUD [GET All]
exports.getAds = async (req,res) =>{
    try {
        const ads = await Ad.find().maxTimeMS(30000);; // Get all the documents from the collection 
        res.status(200).json({
            msg: "All documents fetch succesfully",
           data : ads
        })
    } catch (err) {
        console.log(err);
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err: err
        })
    }
}

