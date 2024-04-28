require('dotenv').config()
const sequelize = require('./db/client')
const express = require('express')
const api_routes = require('./routes')

const app = express()
const PORT = process.env.PORT||3333

app.use(express.json())
app.use('/api', api_routes)

sequelize.sync({force: true})
.then(()=>{
    app.listen(PORT,() => {
        console.log('Server running on port: ', PORT)
    })
})