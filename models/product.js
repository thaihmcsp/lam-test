const mongoose = require('./connectDB')    // gọi thư viện mongoose
const CatagoryModel = require('./catagory')

const ProductSchema = mongoose.Schema({
  productname: String,
  price: Number,
  catagory: [
    {
      type: String,
      ref:'catagory'
    }
  ]
}, {collection: 'product'})

const ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel

// ProductModel.create({
//   productname:'but',
//   price: 10000
// },{
//   productname:'tay',
//   price: 5000
// }).then(function(data){
//   console.log(data);
// }).catch(function(err){
//   console.log(err);
// })