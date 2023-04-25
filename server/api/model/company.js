const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CompanySchema = Schema({
    _id:Schema.Types.ObjectId,
    companyName: {type:String,require:true},
    websiteURL: {type:String,require:true},
})

module.exports = mongoose.model("ads",CompanySchema)