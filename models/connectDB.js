const mongoose = require('mongoose')
require('dotenv').config()
const link = process.env.mongodb
mongoose.connect(link);

module.exports = mongoose // export ra mongoose đã connect