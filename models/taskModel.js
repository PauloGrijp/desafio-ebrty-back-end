const connection = reuqire('./connection');

const create = async ({task, status}) => {
  const db = await connection();
  const task = await db.collection('tasks')
    .insertOne({ task, status, createAt: new Date() });
  
  return task;
}