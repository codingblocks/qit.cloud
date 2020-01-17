#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')

const ROOT_DIR = path.normalize(`${__dirname}/..`)
const WEBSITE_DIR = path.normalize(`${ROOT_DIR}/website`)
const INDEXER_DIR = path.normalize(`${ROOT_DIR}/SearchIndexer`)
const API_DIR = path.normalize(`${ROOT_DIR}/qit-api`)

// Execute a command synchronously but wrap it with formatted console logs
// so each commands output can be separated from each other.
function executeCommand(command, description) {
    console.log(`QIT: ${description}`)
    execSync(command, { stdio: 'inherit' })
    console.log(`QIT: ${description} - COMPLETE\n`)
}

// Change directory to the root of the project regardless of how the script was executed
process.chdir(ROOT_DIR)

executeCommand("npm install", "INSTALLING ROOT NODE MODULES")

console.log(`QIT: SETTING UP DOCKER ENV`)
fs.copyFileSync('.env.example', '.env');
console.log(`QIT: SETTING UP DOCKER ENV - COMPLETE\n`)

executeCommand("git submodule init", "INITIALIZING SEARCHINDEXER SUBMODULE")
executeCommand("git submodule update", "UPDATING SEARCHINDEXER SUBMODULE")

process.chdir(WEBSITE_DIR)

executeCommand("npm install", "INSTALLING WEBSITE NODE MODULES")

process.chdir(INDEXER_DIR)

//TODO: error check if dotnet is installed
executeCommand("dotnet build", "BUILDING SEARCHINDEXER")

console.log("QIT: SETUP - COMPLETE")