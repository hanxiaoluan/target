const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('database/db.json')
const middlewares = jsonServer.defaults()
const PORT = require('../config').PORT

server.use(middlewares)
server.use('/api', router)

server.listen(PORT, () => {
  console.log(`JSON Server is running at port = ${PORT}`)
})