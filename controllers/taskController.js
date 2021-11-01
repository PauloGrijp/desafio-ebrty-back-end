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
});

routes.get('/', async (_req, res) => {
  try {
    const tasks = await taskModel.getALl();

    return res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error:error.message })
  }
});

routes.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await taskModel.update(id, status);

    return res.status(201).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

routes.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
  
    await taskModel.destroy(id);

    return res.status(204).send();
  } catch (error) {
    res.status(500).json({ error:error.message })
  }
})

module.exports = routes;