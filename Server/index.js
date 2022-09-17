const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')
app.use(cors())

//  body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})