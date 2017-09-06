const db = require('../dbqueries')
const client = require('../client')

module.exports = (task, callback) => {
  if(task)
    db.addTask(task, function(error, result){
      if (error)
        callback(error)
      else{
        callback(`Created task ${result.rows[0].id}`)
        client.end()
      }
    })
  else
    throw new Error('Enter something.')
}
