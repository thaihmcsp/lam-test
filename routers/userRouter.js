const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get('/test1', function(req,res){
  setTimeout(function(){
    res.json('test1')
  },
  2000)
})

router.get('/test2', function(req,res){
  setTimeout(function(){
    res.json('test2')
  },
  3000)
})

router.post('/create', async function(req,res){
  try {
    const password = await bcrypt.hash(req.body.password, 10)
    const newUser = await UserModel.create({
      username: req.body.username,
      password: password
    })
    res.json(newUser)
  } catch (error) {
    console.log(error);
    res.json({mess:'loi server'})
  }
})

router.get('/list', function(req,res){
  UserModel.find()
  .skip((req.query.page - 1) * req.query.view)
  .limit(req.query.view)
  .then(function(data){
    res.cookie('test','123', )

    res.json(data);
  })
  .catch(function(err){
    res.json(err)
  })
})

router.post('/signin', function(req,res){
  console.log(48, req.body);
  UserModel.findOne({
    username: req.body.username,
  })
  .then(async function(data){
    if(data){
      const checkPass = await bcrypt.compare(req.body.password, data.password)
      if(checkPass){
        const token = jwt.sign({ id: data._id}, 'thai', {expiresIn: '7d' })
        await UserModel.updateOne({_id: data._id}, {token: token})
        res.json({status: 200, token: token})  
      }else{
        res.json({status: 400 , mess: 'sai password'})
      }
    }else{
      res.json({status: 400 , mess: 'sai username'})
    }
  })
  .catch(function(err){
    res.json(err)
  })
})

router.put('/:id', function(req,res){
  res.json('user ROuter /user/:id')
})

router.post('/logout', async function(req,res){
  try {
    console.log(req.cookies.login);
    if(req.cookies.login){
      const id = jwt.verify(req.cookies.login, 'thai').id
      console.log(76, id);
      await UserModel.updateOne({_id: id}, {token: ''})
      res.redirect('/signin')
    }else{
      res.redirect('/signin')
    }
  } catch (error) {
    res.json(error)
  }
})
module.exports = router