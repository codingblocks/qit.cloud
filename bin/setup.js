#!/usr/bin/env node

const path = require('path')
const { execSync } = require('child_process')

const ROOT_DIR = path.normalize(`${__dirname}/..`)
const WEBSITE_DIR = path.normalize(`${ROOT_DIR}/website`)

// Execute a command synchronously but wrap it with formatted console logs
// so each commands output can be separated from each other.
function executeCommand (command, description) {
  console.log(`QIT: ${description}`)
  execSync(command, { stdio: 'inherit' })
  console.log(`QIT: ${description} - COMPLETE\n`)
}

// Change directory to the root of the project regardless of how the script was executed
process.chdir(ROOT_DIR)

executeCommand('npm install', 'INSTALLING ROOT NODE MODULES')

process.chdir(WEBSITE_DIR)

executeCommand('npm install', 'INSTALLING WEBSITE NODE MODULES')

console.log('QIT: SETUP - COMPLETE')
