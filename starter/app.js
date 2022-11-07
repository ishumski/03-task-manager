const express = require('express')
const tasksRouter = require('./routes/tasks')
const connectDB = require('./db/connection')
require('dotenv').config()

const app = express()
const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`Server starts on port ${PORT}...`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()

//middleware
app.use(express.static('public'))
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)
app.get('/hello', (req, res) => {
    res.send('Task manager app')
})



