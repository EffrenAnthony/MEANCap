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
function getProducts(){
  return listaProductos
}

function createProduct(product){
  listaProductos.push(product)
  return product
}
module.exports = {
  get: getProducts,
  create: createProduct
}