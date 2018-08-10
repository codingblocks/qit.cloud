const { AIRBRAKE_PROJECT_ID, AIRBRAKE_PROJECT_KEY } = require('./helpers/app.constants')

if (AIRBRAKE_PROJECT_ID && AIRBRAKE_PROJECT_KEY) {
  const AirbrakeClient = require('airbrake-js')
  console.log('Initializing airbrake client')
  const airbrake = new AirbrakeClient({
    projectId: AIRBRAKE_PROJECT_ID,
    projectKey: AIRBRAKE_PROJECT_KEY
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
