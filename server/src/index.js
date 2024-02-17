import express from 'express'
import morgan from 'morgan'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { formatErrorRequest, makeRequest, notFoundHandler } from './utils.js'
import config from './config.js'

const app = express()
const server = createServer(app)
const io = new Server(server)

let creationCount = 0

app.use(morgan('dev'))

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('an user has disconnected')
  })

  socket.emit('currentState', creationCount)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/index.html')
})

app.post('/shipments', async (req, res) => {
  try {
    const response = await makeRequest(req.body)

    if (response.data.meta === 'error') {
      const errorFormat = formatErrorRequest(response.data.error)
      res.status(400).json({
        messages: 'Error creating label.',
        ...errorFormat
      })
      return
    }

    creationCount += 1

    io.emit('label-created', creationCount)
    res.json({
      message: 'Label creation successfully',
      data: response.data.data
    })
  } catch (e) {
    /**
     * I want to implement a better error handleling with a middleware
     * but i think it is not necessary that over engineering on this case
     */
    console.error(e)
  }
})

app.use(notFoundHandler)

server.listen(config.PORT, () => {
  console.log(`Server runing on port: ${config.PORT}`)
})
