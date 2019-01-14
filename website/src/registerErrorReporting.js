import airbrakeJs from 'airbrake-js'
export default () => {
  const projectId = process.env.REACT_APP_AIRBRAKE_PROJECTID
  const projectKey = process.env.REACT_APP_AIRBRAKE_PROJECTKEY

  if (projectId && projectKey) {
    return new airbrakeJs.Client({
      projectId: projectId,
      projectKey: projectKey,
      environment: 'production'
    })
  } else {
    return {
      notify: message => {
        console.log(`No error reporting configured`)
        console.log(message)
      }
    }
  }
}
