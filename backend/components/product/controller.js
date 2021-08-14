const store = require('./store')

function getProducts(sort){
  const products = store.get()
  if (sort) {
    const sortedProducts = products.sort((a,b) => a.price-b.price)
    return sortedProducts
  }
  return products
}

function createProduct(product){
  try{
    const productCreated = store.create(product)
    return productCreated
  } catch(err){
    console.log(err);
  }
}
module.exports = {
  get: getProducts,
  create: createProduct
}