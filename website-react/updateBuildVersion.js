const { hashElement } = require('folder-hash')
const path = require('path')

var replace = require('replace')

let unixTime = new Date().valueOf()

function join (file) {
  return path.join(__dirname, file)
}

replace({
  regex: /"Dev-"\+\(new Date\)\.valueOf\(\)/,
  replacement: process.env.COMMIT_REF | unixTime,
  paths: [join('build/static/js')],
  include: '*.js',
  recursive: true
})

const options = {
  folders: { include: ['build'] }
}

hashElement('.', options)
  .then(hash => {
    replace({
      regex: '{{GENERATED_DO_NOT_CHANGE_THIS}}',
      replacement: hash.hash,
      paths: [join('build/sw.js')]
    })
  })
  .catch(error => {
    return console.error('hashing failed:', error)
  })
