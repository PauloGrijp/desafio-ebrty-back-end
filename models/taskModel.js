const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const destroy = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  await db.collection('tasks').deleteOne({_id: ObjectId(id)})
}

module.exports = {
  create,
  getALl,
  destroy,
}