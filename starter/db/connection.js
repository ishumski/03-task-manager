const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://white:1234@nodeexpressprojects.atclwqi.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('CONNECTED WITH DB'))
    .catch((err) => console.log(err))