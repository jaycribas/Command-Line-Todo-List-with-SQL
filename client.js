const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL ||
  'postgres://localhost:5432/cli_todolist'
const client = new Client({ connectionString: connectionString })
client.connect()

module.exports = client
