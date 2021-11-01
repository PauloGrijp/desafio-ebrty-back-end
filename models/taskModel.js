const connection = require('./connection');

const create = async ({ task, status }) => {
  const db = await connection();
  const newTask = await db.collection('tasks')
    .insertOne({ task, status, createAt: new Date() });
  
  return newTask;
}

const getALl = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks').find().toArray();

  return tasks;
}

module.exports = {
  create,
  getALl
}