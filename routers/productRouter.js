const express = require('express')
const router = express.Router()
const ProductModel = require('../models/product')

router.post('/create', function(req,res){
  ProductModel.create({
    productname: req.body.productname,
    price:req.body.price
  })
  .then(function(data){
    res.json(data);
  })
  .catch(function(err){
    res.json(err);
  })
})

router.get('/', async function(req,res){

  try{
    const data = await ProductModel.find()
    .skip( (req.query.page - 1) * req.query.view )
    .limit( req.query.view )

    res.json(data)

  } catch (error) {
    res.json(error)
  }
})

module.exports = router