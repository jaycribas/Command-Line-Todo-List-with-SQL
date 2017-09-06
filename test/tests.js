const db = require('../dbqueries')

describe('queries', () => {
  describe('list', () => {
    beforeEach(function(done){
      client.query(`
        INSERT INTO
          todolist (description)
        VALUES
          ('Do something'),
          ('Something else'),
          ('One more')
      `, (error, results) => {
        done(error)
      })
    })

    it('should return 3 rows in To Do List table', (done) => {
      db.listTasks(function(error, tasks){
        if (error) return done(error)
        expect(tasks.rows.length).to.eql(3)
        done()
      })

    })
  })
})
