const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/lam');

module.exports = mongoose // export ra mongoose đã connect