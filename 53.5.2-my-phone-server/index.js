const express = require('express')
var cors = require('cors')
const phones = require("./phones.json")
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!enjoy express js')
})
app.get('/phones', (req, res) => {
  res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    // const id = req.params.id
    const id = parseInt(req.params.id)
    console.log("i need data for id:",id)
    const phone = phones.find(phn=>phn.id===id) || {}
    res.send(phone)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`server running at http://localhost:${port}`)
})