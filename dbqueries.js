require('console.table')
const { Client } = require('pg')
const client = new Client({connectionString: `postgres://localhost:5432/cli_todolist`})
client.connect()

const addTask = task => {
  client.query(`
    INSERT INTO
      todolist (description)
    VALUES
      ($1)
    RETURNING
      id
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
    SELECT * FROM todolist
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
    DELETE FROM
      todolist
    WHERE
      id = ${taskID}
    RETURNING
      *
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
