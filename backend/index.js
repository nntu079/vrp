const express = require('express')
var cors = require('cors')
var conn = require('./util')

const app = express()
app.use(cors())

app.get('/api/get-locations', async function (req, res) {
  let kq = await conn.query(`SELECT * FROM locations`,[]);

  res.status(200).json({data:kq.rows, count:kq.rows.length})
})

app.listen(5000)