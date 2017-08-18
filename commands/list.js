const db = require('../dbqueries');

const list = () => {
  db.listTasks()
}

module.exports = list
