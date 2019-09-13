const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dishRouter = require('./routes/dishRouter')
const hostname = 'localhost'
const port = 3000

const app = express()
app.use(morgan("dev"))
app.use(bodyParser.json())

app.use('/dishes', dishRouter)

// app.get('/dishes/:dishID', (req, res, next) =>{
//     res.end('Will send details of the dish:'+req.params.dishID+' to you!')
// })

// app.post('/dishes/:dishID', (req, res, next) => {
//     res.statusCode = 403
//     res.end('Post opeartion not supported on /dishes'+req.params.dishID)
// })

// app.put('/dishes/:dishID', (req, res, next) => {
//     // res.statusCode = 403
//     // res.end('PUT operation not supported on /dishes')
//     res.write('Updating the dish: '+req.params.dishID + '\n')
//     res.end('Will update the dish: '+ req.body.name + 'with details: '+req.body.description)
// })

// app.delete('/dishes/:dishID', (req, res, next) => {
//     res.end('Deleting dish: '+req.params.dishID)
// })

app.use(express.static(__dirname+ '/public'))

app.use((req, res, next) => {
    //console.log(req.headers)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>This is an express server</h1></body></html>')
})

const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})