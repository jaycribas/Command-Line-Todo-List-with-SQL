const db = require('../dbqueries');

const complete = (command, taskID) => {
  if(command == 'complete')
    db.completeTask(taskID)
  // else
    //why are defaulting to deleting? That seems like a design flaw to me.
    // maybe be explicit: ->
  else if (command == 'delete')
    db.deleteTask(taskID)
}

module.exports = complete
