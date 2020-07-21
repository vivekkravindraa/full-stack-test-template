const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const httpServer = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

httpServer.listen(process.env.PORT || 3001)
