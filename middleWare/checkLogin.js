const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')

function checKLogin ( req, res, next){
  if(req.cookies.login){
    const id = jwt.verify(req.cookies.login, 'thai').id
    UserModel.findOne({_id: id, token: req.cookies.login})
    .then(function(data){
      if(data){
        next()
      }else{
        res.redirect('/signin')
      }
    })
    .catch(function(err){
      res.redirect('/signin')
    })
  }else{
    res.redirect('/signin')
  }
}

async function checkAdmin (req, res, next){
  try {
    const cookie = req.cookies.login
    console.log(22, cookie);
    if(cookie){
      const id = jwt.verify(cookie, 'thai').id
      const user = await UserModel.findOne({_id: id })
      if(user){
        if(user.role === 'admin'){
          next()
        }else{
          res.redirect('/signin')
        }
      }else{
        res.json({mess: 'token k hop le'})
      }
    }else{
      res.redirect('/signin')
    }
  } catch (error) {
    res.json(error)
  }
} 

module.exports = {checKLogin,checkAdmin}