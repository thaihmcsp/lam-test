const mongoose = require('./connectDB')     // gọi thư viện mongoose

const UserSchema = mongoose.Schema({          // tạo cấu trúc bảng
  username: {
    type: String,
    require: true
  },
  password: String,
  age: Number,
  friend: [
    {
      type: String,
      ref: 'user'
    }
  ],
  address: {
    city: String,
    street: String,
    number: Number
  },
  mark: Number,
  role: String,
  token: String
},{collection:'user'})                       // đặt tên bảng

const UserModel = mongoose.model('user', UserSchema)  // tạo công cụ để làm việc với bảng data

module.exports = UserModel

// UserModel.findOne({
//   _id:'6204966eccc5b1c9a669b3a4'
// })
// .populate('friend')
// .then(function(data){
//   console.log(data);
// }).catch(function(err){
//   console.log(err);
// })