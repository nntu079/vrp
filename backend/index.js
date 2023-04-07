const express = require('express')
var cors = require('cors')
var conn = require('./util')

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/api/get-locations', async function (req, res) {
  let kq = await conn.query(`SELECT * FROM locations ORDER BY id`, []);

  res.status(200).json({ data: kq.rows, count: kq.rows.length })
})

app.post('/api/set-location', async function (req, res) {
  //let kq = await conn.query(`SELECT * FROM locations ORDER BY id`,[]);
  const { id, type, name, quantity, expire } = req.body

  if(quantity <=0){
    quantity=0
  }

  let kq = await conn.query(`UPDATE public.locations SET type = $1, name = $2, quantity = $3,expire = $4 WHERE id = $5`, 
  [type,name,quantity,expire,id]);

  console.log({kq})

  res.status(200).json({count:kq.rowCount})
})

app.listen(5000)