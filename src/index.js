require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)
app.use(routes)

app.listen(3000)
