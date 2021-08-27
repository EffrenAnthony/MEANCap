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

router.patch('/:id', async function(req, res){
  try{
    let id = req.params.id
    let body = {...req.body}
    const productUpdated = await controller.patch(id, body)
    const resMessage = {
      message: 'PATCH product updated: ' + productUpdated.id,
      body: productUpdated
    }
    response.success(req, res, resMessage, 201)
  } catch (err){
  }
})

router.delete('/:id', async function(req, res){
  try{
    let id = req.params.id
    await controller.delete(id)
    const resMessage = {
      message: 'DELETE product: ' + id,
      body: ''
    }
    response.success(req, res, resMessage, 201)
  } catch (err){
  }
})

module.exports = router