const router = require('express').Router()
const path = require('path')
const middleWare = require('../middleWare/checkLogin')
console.log(middleWare);

router.get('/signup', function(req,res){
  res.sendFile(path.join(__dirname, '../views/signup.html'))
})

router.get('/list', middleWare.checKLogin, function(req, res){
  res.sendFile(path.join(__dirname,'../views/list.html'))
})

router.get('/signin', function(req,res){
  res.sendFile(path.join(__dirname, '../views/signin.html'))
})
router.get('/admin', middleWare.checkAdmin, function(req,res){
  res.sendFile(path.join(__dirname, '../views/admin.html'))
})

router.get('/download', function(req,res){
  res.download(path.join(__dirname,'../package.json'))
})
module.exports = router