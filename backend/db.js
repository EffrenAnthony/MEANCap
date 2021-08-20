const db = require('mongoose')

db.Promise = global.Promise

async function connectMongo(url){
  await db.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('[db] connected'))
}

module.exports = connectMongo