'use strict'

require('./env')

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const https = require('https')
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

  // launch up the server with ssl certificates for https support
  const SSL_KEY_FILE = process.env.SSL_KEY_FILE
  const SSL_CERT_FILE = process.env.SSL_CERT_FILE
  const HTTPS_OPTIONS = {
    key: fs.readFileSync(SSL_KEY_FILE),
    cert: fs.readFileSync(SSL_CERT_FILE)
  }

  const server = https.createServer(HTTPS_OPTIONS, app)
  const PORT = process.env.PORT || 8080

  server.listen(PORT, () =>
    console.log(`harmony staking dashboard backend listening on port ${PORT}!`)
  )
}

startServer()

