const client = require('./client');
require('console.table')

const addTask = task => {
  client.query(`
    INSERT INTO todo_list (description)
    VALUES ($1)
    RETURNING id
    `,
    [ task ]
  )
  .then( data => {
    console.log(`Created task ${data.rows[0].id}`)
    client.end()
  })
  .catch( err => console.log(err.message) )
}

const listTasks = () => {
  client.query(`
    SELECT * FROM todo_list
  `)
  .then( data => {
    console.table('To Do List',data.rows)
    console.log(`You have ${data.rows.length} tasks.`)
    client.end()
  })
}

const deleteQuery = (taskID) => {
  return client.query(
  `
    DELETE FROM todo_list
    WHERE id = ${taskID}
    RETURNING *
  `)
}

const deleteTask = taskID => {
  deleteQuery(taskID)
  .then( data => {
    console.log(`Deleted task ${data.rows[0].id}: ${data.rows[0].description}`)
    client.end()
  })
}

const completeTask = taskID => {
  deleteQuery(taskID)
  .then( data => {
    console.log(`Completed task ${data.rows[0].id}: ${data.rows[0].description}`)
    client.end()
  })
}

module.exports = {
  addTask, listTasks, deleteTask, completeTask
}
