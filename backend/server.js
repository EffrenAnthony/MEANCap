const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router()
let app = express();
// enviar datos por json
app.use(bodyParser.json());
// enviar datos por urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
// inicializar router
app.use(router)

router.get('/', function(req, res){
  console.log(req.headers)
  res.header({
    "cursomHeader": "token"
  })
  res.send('Esto es un get de la raiz')
})
router.get('/productos', function(req, res){
  let query = req.query.saludo
  if (query == 'hola') {
    res.send({
      response: "solo saludamos"
    })
  }
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
  res.send(listaProductos)
})
router.get('/productos/:parametro', function(req, res){ 
  console.log(req.params)
  res.send({prod:"producto"})
})
router.put('/', function(req, res){
  res.send('Esto es un put de la raiz')
})
router.post('/', function(req, res){
  res.send('Esto es un post de la raiz')
})
router.post('/productos', function(req, res){
  console.log(req.body);
  let body = {...req.body};
  body.price = "s/." + body.price.toString()
  console.log(`[ingresando a base de datos]:${JSON.stringify(body)}`)
  res.send(body)
})
router.delete('/', function(req, res){
  res.send('Esto es un delete de la raiz')
})

// SIN ROUTER
// app.use('/', function(req, res){
//   res.send('servidor express listo!')
// })

app.listen(4200);
console.log('listening on http://localhost:4200');