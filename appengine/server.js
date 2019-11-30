'use strict'

require('./env')
const express = require('express')
const cors = require('cors')
const routes = require('./src/routes')
const InitServices = require('./src/services/init')

const startServer = async () => {
  const app = express()

  app.use(cors())

  app.get('/', (req, res) => {
    res.send('Hello from App Engine!')
  })

  // Init services
  const services = await InitServices()

  // Init routes
  routes(app, services.dbService, services.syncServices)

  // send errors response
  app.use(function (err, req, res, next) {
    if (err) {
      res
        .status(err.status || 500)
        .json({ status: err.status, message: err.message })
    } else {
      next()
    }
  })

  // Listen to the App Engine-specified port, or 8080 otherwise
  const PORT = process.env.PORT || 8080
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
  })
}

startServer()
