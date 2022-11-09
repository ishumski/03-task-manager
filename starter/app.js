const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection');

const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');
require('dotenv').config();
// middleware

app.use(express.static('public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 5006;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
