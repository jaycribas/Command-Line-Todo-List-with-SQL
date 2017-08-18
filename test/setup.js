//You want all environment variables inside of a .env file. then you can set the environment to be a test or a dev environment.
process.env.DATABASE_URL = 'postgres://localhost:5432/test_cli_todolist'

global.expect = require('chai').expect
global.client = require('../client')

beforeEach( done => {
  client.query('TRUNCATE todolist', (error, results) => {
    done(error)
  })
})
