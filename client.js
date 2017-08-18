const { Client } = require('pg')

const env = process.env.NODE_ENV || 'development';

if(env === 'test'){
  process.env.DATABASE_URL = 'postgres://localhost:5432/test_todo_list'
} else {
  process.env.DATABASE_URL = 'postgres://localhost:5432/todo_list'
}

const connectionString = process.env.DATABASE_URL

const client = new Client({ connectionString: connectionString })
client.connect()

module.exports = client
