const db = require('../dbqueries');

module.exports = (command, taskID) => {
  if(command == 'complete')
    db.completeTask(taskID)
  else
    db.deleteTask(taskID)
}
