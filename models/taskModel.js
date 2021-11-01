const connection = require('./connection');

const create = async ({ task, status }) => {
  const db = await connection();
  const newTask = await db.collection('tasks')
    .insertOne({ task, status, createAt: new Date() });
  
  return newTask;
}

module.exports = {
  create
}