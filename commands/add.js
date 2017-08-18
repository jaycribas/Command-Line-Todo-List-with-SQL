const db = require('../dbqueries');

const add = task => {
  if(task)
    db.addTask(task)
  else
    throw new Error('Enter something.')
}

module.exports = add
