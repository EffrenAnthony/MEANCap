const store = require('./store')

function getProducts(sort){
  const products = store.get()
  if (sort) {
    const sortedProducts = products.sort((a,b) => a.price-b.price)
    return sortedProducts
  }
  return products
}

async function createProduct(product){
  try{
    let newProduct = product
    newProduct.date = new Date()
    const productCreated = await store.create(newProduct)
    return productCreated
  } catch(err){
    throw new Error('[Controller erro]',  err)
  }
}
module.exports = {
  get: getProducts,
  create: createProduct
}