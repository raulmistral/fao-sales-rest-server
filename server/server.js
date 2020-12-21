require('./config/config')  // Configuraciones

const express = require('express')
const app = express()
const port = process.env.PORT

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/ventas', (req, res) => {
    res.json('GET ventas FAO')
})

app.post('/ventas', (req, res) => {
    let body = req.body

    if (body.farmacia === undefined) {
        res.status(400).json({
            ok: false,
            msg: 'Debe suplir una farmacia'
        })
    } else {
        res.json({
            ventas: body
        })
    }
    
})

app.put('/ventas/:id', (req, res) => {
    let id = req.params.id
    res.json({
        id
    })
})

app.delete('/ventas', (req, res) => {
    res.json('DELETE ventas FAO')
})


app.listen(port, () => {
  console.log(`Escuchando el puerto http://localhost:${port}`)
})