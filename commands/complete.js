const db = require('../dbqueries');

module.exports = (taskID) => {
  db.deleteTask(taskID)
}
