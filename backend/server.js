const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db')
const { config } = require('./config')
var morgan = require('morgan')
const router = require('./network/router');

const corsOptions = {
  // origin: ['http://zyrebox.com', 'http://127.0.0.1:5500']
  origin: '*'
}
// const router = express.Router()
let app = express();
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
// enviar datos por json
app.use(bodyParser.json());
// enviar datos por urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
// inicializar router
// app.use(router)

app.use(cors(corsOptions))
db(config.mongodb)
router(app)



// SIN ROUTER
// app.use('/', function(req, res){
//   res.send('servidor express listo!')
// })

app.listen(3200);
console.log('listening on http://localhost:3200');