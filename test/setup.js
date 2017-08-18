global.expect = require('chai').expect
global.client = require('../client')

beforeEach( done => {
  client.query('TRUNCATE test_todo_list', (error, results) => {
    done(error)
  })
})
