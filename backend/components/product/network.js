const express = require('express');
const router = express.Router()
const controller = require('./controller.js')
const response = require('../../network/response')

router.get('/', async function(req, res){
  try{
    let query = req.query.sort || false
    const products = await controller.get(query)
    const resMessage = {
      message: 'GET All products',
      body: products
    }
    response.success(req, res, resMessage, 200)
  } catch (err){
    response.error(req, res, '[Network] Internal server Error', 500, err)
  }
})

router.post('/', async function(req, res){
  try{
    let body = {...req.body};
    const newProduct = await controller.create(body)
    const resMessage = {
      message: 'product created',
      body: newProduct
    }
    response.success(req, res, resMessage, 200)
  } catch (err){
    response.error(req, res, '[Network] Internal server Error', 500, err)
  }
})

router.get('/:id', async function(req, res){ 
  try{
    const id = req.params.id
    const product = await controller.getOne(id)
    const resMessage = {
      message: 'GET product: ' + product.id,
      body: product
    }
    response.success(req, res, resMessage, 200)
  }catch(err){
    response.error(req, res, '[Network] Internal server Error', 500, err)
  }
})

router.patch('/', function(req, res){
  // res.send('Esto es un patch de la raiz')
  response.success(req, res, 'Esto es un patch de la raiz', 201)
})

router.delete('/', function(req, res){
  res.send('Esto es un delete de la raiz')
})

module.exports = router