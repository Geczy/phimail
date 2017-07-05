const express = require('express')
const next = require('next')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use('/css', express.static(path.join(__dirname, 'css')))

    server.get('/jobs/:id', (req, res) => {
      const page = '/jobs'
      const query = { id: req.params.id }

      app.render(req, res, page, query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
