const express = require('express');
require('dotenv').config();
const cors = require('cors')
const taskRoutes = require('./controllers/taskController')

const PORT = process.env.PORT;

const app = express();
app.use(cors())
app.use(express.json());

app.use('/tasks', taskRoutes)

app.listen(PORT, (console.log(`Listening - Port ${PORT}`)));