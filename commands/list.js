const db = require('../dbqueries');

module.exports = () => {
  db.listTasks()
}
