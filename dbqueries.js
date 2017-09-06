const client = require('./client');

function listTasks(callback){
  return client.query(`
    SELECT * FROM todolist
    `, callback)
}

function addTask(description, callback){
  return client.query(`
    INSERT INTO
      todolist (description)
    VALUES
      ($1)
    RETURNING
      id
  `, [ description ], callback)
}

// const addTask = task => {
//   client.query(`
//     INSERT INTO
//       todolist (description)
//     VALUES
//       ($1)
//     RETURNING
//       id
//     `,
//     [ task ]
//   )
//   .then( data => {
//     console.log(`Created task ${data.rows[0].id}`)
//     client.end()
//   })
//   .catch( err => console.log(err.message) )
// }

// const deleteQuery = (taskID) => {
//   return client.query(
//   `
//     DELETE FROM
//       todolist
//     WHERE
//       id = ${taskID}
//     RETURNING
//       *
//   `)
// }
//
// const deleteTask = taskID => {
//   deleteQuery(taskID)
//   .then( data => {
//     console.log(`Deleted task ${data.rows[0].id}: ${data.rows[0].description}`)
//     client.end()
//   })
// }
//
// const completeTask = taskID => {
//   deleteQuery(taskID)
//   .then( data => {
//     console.log(`Completed task ${data.rows[0].id}: ${data.rows[0].description}`)
//     client.end()
//   })
// }
module.exports = {
  listTasks,
  addTask,
  // deleteTask,
  // completeTask
}
