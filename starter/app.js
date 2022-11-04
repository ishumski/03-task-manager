const express = require('express')

const app = express()
const PORT = 3000
app.use(express.static('public'))

app.get('/hello', (req, res)=>{
    res.send('Task manager app')
})


app.listen(PORT, () => {
    console.log(`Server starts on port ${PORT}...`)
})
