const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/router');

// const router = express.Router()
let app = express();
// enviar datos por json
app.use(bodyParser.json());
// enviar datos por urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
// inicializar router
// app.use(router)

router(app)



// SIN ROUTER
// app.use('/', function(req, res){
//   res.send('servidor express listo!')
// })

app.listen(4200);
console.log('listening on http://localhost:4200');