const product = require('../components/product/network')

const router = function (server){
  server.use('/products', product)
}

module.exports = router