const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const path = require('path')
const axios = require('axios')
const httpServer = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get("/comments", async (req, res) => {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
    res.send(response.data);
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

httpServer.listen(process.env.PORT || 3001)
