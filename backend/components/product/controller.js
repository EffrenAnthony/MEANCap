const store = require('./store')

async function getProducts(sort){
  try{
    const products = await store.get()
    if (sort) {
      const sortedProducts = products.sort((a,b) => a.price-b.price)
      return sortedProducts
    }
    return products
  }catch (err){
    throw new Error('[Controller error]',  err)
  }
}

async function createProduct(product){
  try{
    let newProduct = product
    newProduct.date = new Date()
    const productCreated = await store.create(newProduct)
    return productCreated
  } catch(err){
    throw new Error('[Controller error]',  err)
  }
}

async function getOnePorduct(id){
  try{
    const productFinded = await store.getOne(id)
    const price = 'S/.' + productFinded.price.toString()
    productFinded._doc.price = price
    return productFinded
  } catch (err){
    throw new Error('[Controller error]',  err)
  }
}
module.exports = {
  get: getProducts,
  create: createProduct,
  getOne: getOnePorduct
}