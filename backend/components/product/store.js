const Model = require('./model')
const listaProductos = [
  {
    title: 'Product1',
    description: 'Product description asd dasfsd',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1gFmxRhXLRB8XXqSg5rDfOk6JYOSBlFwYa-Q4yTTVJiFBREpGJTn5m5uVyBtZOHCtrg&usqp=CAU',
    id: 1,
    price: 10
  },
  {
    title: 'Product2',
    description: 'Product 123 123 12',
    image: 'https://images.samsung.com/is/image/samsung/assets/pe/smartphones/galaxy-s20/buy/S20_New_buying_page_KV_MO_720x720.jpg.png?imwidth=720',
    id: 2,
    price: 92
  },
  {
    title: 'Product3',
    description: 'Product asdf  dfdf asd',
    image: 'https://i.blogs.es/39ec47/samsung-galaxy-z-fold-2-01/1366_2000.jpg',
    id: 3,
    price: 84
  },
  {
    title: 'Product4',
    description: 'Product description 54165123185',
    image: 'https://i.blogs.es/45df36/huawei-mate-x-plegable-12/450_1000.jpg',
    id: 4,
    price: 85
  },
]
async function getProducts(){
  try{
    let products = await Model.find()
    return products
  }catch (err){
    throw new Error('[Store Error]',err)
  }
}

async function createProduct(product){
  try{
    const newProduct = new Model(product)
    return await newProduct.save()
  } catch (err){
    throw new Error('[Store Error]',err)
  }
}

async function getOneProduct(id){
  try {
    const findedProduct = await Model.findById(id)
    return findedProduct 
  } catch (err){
    throw new Error('[Store Error]',err)
  }
}


async function updateProduct(id, product){
  try{
    const myProduct = await Model.findOne({_id: id})
    myProduct.title = product.title || myProduct.title
    myProduct.description = product.description || myProduct.description
    myProduct.image = product.image || myProduct.image
    myProduct.price = product.price || myProduct.price
    return await myProduct.save()
  }catch (err){
    throw new Error('[Store Error]',err)
  }

}

async function deleteProduct(id){
  try {
    return await Model.deleteOne({
      _id: id
    })
  } catch (err){
    throw new Error('[Store Error]',err)
  }
}


module.exports = {
  get: getProducts,
  create: createProduct,
  getOne: getOneProduct,
  patch: updateProduct,
  delete: deleteProduct
}