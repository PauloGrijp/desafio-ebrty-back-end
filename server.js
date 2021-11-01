const express = require('express');
require('dotenv').config();
const taskRoutes = require('./controllers/taskController')

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes)

app.listen(PORT, (console.log(`Listening - Port ${PORT}`)));