const mongoose = require('./connectDB')    
const CatagorySchema = mongoose.Schema({
  catagoryName: String
}, {collection: 'catagory'})

const CatagoryModel = mongoose.model('catagory', CatagorySchema)

module.exports = CatagoryModel

