const db = require('../dbqueries')

describe('queries', () => {
  describe('listTasks', () => {

    it('should return all rows in cli_todolist table', () => {

      db.listTasks( (error, tasks) => {
        if(error) return done(error)
        expect(tasks).to.be.an('array')
        expect(tasks.length).to.eql(0)
      })

    })
  })
})
