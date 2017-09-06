#!/usr/bin/env node
const print = require('node-print').pt

const command = process.argv[2]
const add = require('./commands/add')
const list = require('./commands/list')
// const complete = require('./commands/complete')

switch (command) {
  case 'add':
    const task = process.argv.slice(3).join(' ')
    add(task, console.log)
    break;
  case 'list':
    list(print)
    break;
  case 'complete':
  case 'delete':
    const taskID = process.argv[3]
    complete(command, taskID)
    break;
  default:
    console.log('No.')
}
