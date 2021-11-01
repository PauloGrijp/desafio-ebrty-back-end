const { Router } = require('express');
const taskModel = require('../models/taskModel')

const routes = Router();

routes.post('/', async (req, res) => {
  try {
    const { task, status } = req.body;
    await taskModel.create({ task, status });

    return res.status(201).send();
  } catch (error) {
    res.status(500).json({ error: error.message })
  }

})

module.exports = routes;