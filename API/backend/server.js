const cors = require('cors');
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/players', require('./routes/playerRoutes'))
app.use('/api/v1/teams', require('./routes/teamRoutes'))
app.use('/api/v1/leagues', require('./routes/champRoutes'))



app.use(errorHandler)

app.listen(port, () => console.log(`Server start ${port}`))