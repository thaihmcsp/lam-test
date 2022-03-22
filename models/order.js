const mongoose = require('./connectDB')    
const UserModel = require('./user')
const ProductModel = require('./product')


const OrderSchema = mongoose.Schema({
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
}, {collection: 'order'})

const OrderModel = mongoose.model('order', OrderSchema)

module.exports = OrderModel