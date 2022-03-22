const mongoose = require('./connectDB')    
const UserModel = require('./user')
const ProductModel = require('./product')


const CartSchema = mongoose.Schema({
  listProduct: [
    { 
      productID : {
        type: String,
        ref: 'product'
      },
      quantity: Number
    }
  ],
  userID: {
    type: String,
    ref: 'user'
  }
}, {collection: 'cart'})


const CartModel = mongoose.model('cart', CartSchema)

module.exports = CartModel