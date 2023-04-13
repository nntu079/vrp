const express = require('express')
var cors = require('cors')
var conn = require('./util')
const path = require("path");

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/build")); //build reactjs

app.get('/api/get-locations', async function (req, res) {
  let kq = await conn.query(`
    select *
    from locations as l, products as p, products_locations as pd
    where pd.id_location = l.id_location and pd.id_product = p.id_product
    order by l.id_location
  `, []);

  //1 7 10 12

  const finalResult = []
  for (let index = 0; index < 200; index++) {
    finalResult.push({
      id_location: index + 1
    })
  }

  for (const iterator of kq.rows) {
    finalResult[parseInt(iterator.id_location) - 1] = iterator
  }

  res.status(200).json({ data: finalResult, count: finalResult.length })

}
)

app.post('/api/get-product', async function (req, res) {
  let { id_product } = req.body


  let kq = await conn.query(`
    select *
    from products as p, products_locations as pd
    where p.id_product = pd.id_product and p.id_product = $1
  `, [id_product]);

  const locations = []
  for (const iterator of kq.rows) {
    locations.push(iterator.id_location)
  }

  res.status(200).json({ product: kq.rows?.[0] || {}, count: kq.rowCount, locations })
})

app.post('/api/set-location', async function (req, res) {
  //let kq = await conn.query(`SELECT * FROM locations ORDER BY id`,[]);
  let { id_location, type, quantity, id_product, currentQuantity } = req.body

  console.log(currentQuantity)

  if (currentQuantity == 0) {
    let kq = await conn.query(
      `INSERT INTO  public.products_locations("id_product", "id_location","quantity")  
       VALUES ($1, $2, $3)`, [id_product, id_location, quantity])
    res.status(200).json({ count: kq.rowCount })
  }
  else if (quantity == 0) {
    let kq = await conn.query('DELETE FROM public.products_locations WHERE id_location = $1', [id_location])
    res.status(200).json({ count: kq.rowCount })
  }
  else {
    let kq = await conn.query(`UPDATE public.products_locations SET quantity = $1 WHERE id_location = $2`,
      [quantity, id_location]);
    res.status(200).json({ count: kq.rowCount })
  }




})

app.post('/api/get-order', async function (req, res) {
  let { id_order } = req.body

  let kq1 = await conn.query(`
  SELECT DISTINCT  p.name, quantity_order
  FROM orders as o, products as p, products_locations as pl
  where o.id_order = $1 and o.id_product = p.id_product and pl.id_product = p.id_product
  order by p.name
`, [id_order]);

  let kq2 = await conn.query(`
  SELECT *
  FROM orders as o, products as p, products_locations as pl
  where o.id_order = $1 and o.id_product = p.id_product and pl.id_product = p.id_product
  order by p.name
  `, [id_order]);

  res.status(200).json({ rows1: kq1.rows, rows2: kq2.rows })

})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});

module.exports = app;
