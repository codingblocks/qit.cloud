const fs = require('fs')

const pad = (number, length) => {
  let str = '' + number
  while (str.length < length) {
    str = '0' + str
  }

  return str
}

const formatDate = function (d) {
  const yyyy = d.getUTCFullYear().toString()
  const mm = pad(d.getMonth() + 1, 2)
  const dd = pad(d.getDate(), 2)
  const hh = pad(d.getHours(), 2)
  const m = pad(d.getMinutes(), 2)
  const ss = pad(d.getSeconds(), 2)

  return `${yyyy}-${mm}-${dd} ${hh}:${m}:${ss}`
}

const buildSuffix = '{{' + formatDate(new Date()) + '}}'
const serviceWorker = './build/sw.js'

fs.readFile(serviceWorker, 'utf8', function (err, data) {
  console.log(data)
  if (err) {
    console.log('ERROR: Could not generate service worker version number:' + err)
    return
  }

  console.log('Updating service worker cache key: ' + buildSuffix)
  const result = data.replace(/{{DEVMODE}}/g, buildSuffix)

  fs.writeFile(serviceWorker, result, 'utf8', function (err) {
    if (err) {
      return console.log(err)
    }
  })
})
