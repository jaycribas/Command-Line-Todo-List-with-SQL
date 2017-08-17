#!/usr/bin/env node

const command = process.argv[2]
const add = require('./commands/add')
const list = require('./commands/list')
const complete = require('./commands/complete')

switch (command) {
  case 'add':
    const task = process.argv.slice(3).join(' ')
    add(task)
    break;
  case 'list':
    list()
    break;
  case 'complete':
  case 'delete':
    complete()
    break;
  default:
    console.log('No.')
}
