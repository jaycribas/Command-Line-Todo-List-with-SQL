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
    const taskID = process.argv[3]
    complete(command, taskID)
    break;
  default:
    console.log('Please use one of the following command options: add, list, complete, delete.')
}
