const db = require('../dbqueries')
const client = require('../client')

module.exports = callback => {
  db.listTasks(function(error, tasks){
    if (error)
      callback(error)
    else{
      callback(tasks.rows)
      client.end()
    }
  })
}
