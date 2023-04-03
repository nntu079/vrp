const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', function (req, res) {
  res.send('Hello World')
})

app.listen(5000)