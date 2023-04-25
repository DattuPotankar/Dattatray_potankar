const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adSchema = Schema({
    _id:Schema.Types.ObjectId,
    companyId: {type:Number,require:true},
    primaryText: {type:String,require:true},
    headline: {type:String,require:true},
    description: {type:String,require:true},
    CTA: {type:String,require:true},
    imageURL: {type:String,require:true},
})

module.exports = mongoose.model("ads",adSchema)