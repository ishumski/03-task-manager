const express = require('express')
const tasksRouter = require('./routes/tasks')
require('./db/connection')

const app = express()
const PORT = 3000

//middleware
app.use(express.static('public'))
app.use(express.json())

app.use('/api/v1/tasks', tasksRouter)

app.get('/hello', (req, res)=>{
    res.send('Task manager app')
})



app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})
