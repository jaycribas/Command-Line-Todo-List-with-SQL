const db = require('../dbqueries')

describe('queries', () => {
  describe('listTasks', () => {

    it('should return all rows in test_todo_list table', () => {

      db.listTasks( (error, tasks) => {
        if(error) return done(error)
        expect(tasks).to.be.an('array')
        expect(tasks.length).to.eql(0)
      })

    // suggest addtional tests, each their own `it` clause:
    // separate test above in to two: on truthy, one falsy (error)
    // one truthy and one falsy for each opperation each withing the...
    // scope (closure) of its own `describe` clause 
    })
  })
})
