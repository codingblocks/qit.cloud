// TODO This is not a good pattern!
if (process.env.AIRBRAKE_PROJECTID && process.env.AIRBRAKE_PROJECTKEY) {
  const AirbrakeClient = require('airbrake-js')
  console.log('Initializing airbrake client')
  var airbrake = new AirbrakeClient({
    projectId: process.env.AIRBRAKE_PROJECTID,
    projectKey: process.env.AIRBRAKE_PROJECTKEY
  })

  module.exports.notify = function (errorMessage, severity = 'error', additionalInformation = []) {
    console.log(`Notifying Airbrake`)
    console.log(`${severity}: ${errorMessage}`)
    console.log(additionalInformation)
    airbrake.notify({
      error: errorMessage,
      context: { severity: severity },
      params: { additionalInformation: additionalInformation }
    })
  }
} else {
  module.exports.notify = (errorMessage, severity = 'error', additionalInformation = []) => {
    console.log(`${severity}: ${errorMessage}`)
    console.log(additionalInformation)
  }
}
