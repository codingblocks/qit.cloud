const { hashElement } = require('folder-hash')
const fs = require('fs')

const options = {
  folders: { include: ['build'] }
}

hashElement('.', options)
  .then(hash => {
    let buildSuffix = '{{' + hash.hash + '}}'

    const serviceWorker = './build/sw.js'

    fs.readFile(serviceWorker, 'utf8', function (err, data) {
      if (err) {
        console.log('ERROR: Could not generate service worker version number:' + err)
        return
      }

      console.log('Updating service worker cache key:' + buildSuffix)
      let result = data.replace(/{{GENERATED_DO_NOT_CHANGE_THIS}}/g, buildSuffix)

      fs.writeFile(serviceWorker, result, 'utf8', function (err) {
        if (err) { return console.log(err) }
      })
    })
  })
  .catch(error => {
    return console.error('hashing failed:', error)
  })
