const db = require('../dbqueries');

module.exports = task => {
  if(task)
    db.addTask(task)
  else
    throw new Error('Enter something.')
}
