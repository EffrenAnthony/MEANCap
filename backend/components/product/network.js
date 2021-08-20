const express = require('express');
const router = express.Router()
const controller = require('./controller.js')
const response = require('../../network/response')

router.get('/', function(req, res){
  let query = req.query.sort || false
  const products = controller.get(query)
  response.success(req, res, products, 200)
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





router.get('/:parametro', function(req, res){ 
  console.log(req.params)
  // res.send({prod:"producto"})
  const data = ({prod:"producto"})
  response.success(req, res, data, 200)
})
router.patch('/', function(req, res){
  // res.send('Esto es un patch de la raiz')
  response.success(req, res, 'Esto es un patch de la raiz', 201)
})
// router.post('/', function(req, res){
//   // res.send('Esto es un post de la raiz')
//   response.success(req, res, 'Esto es post desde response', 201)
// })

router.delete('/', function(req, res){
  res.send('Esto es un delete de la raiz')
})

module.exports = router