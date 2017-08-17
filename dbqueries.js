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
    console.log(`Created task`, data.rows[0].id)
    client.end()
  })
  .catch( err => console.log(err.message) )
}

module.exports = {
  addTask
}
