const settings = require('./azureSettings').settings
const synonymSchema = require('./azureSchemaDefinition').synonymSchema
const schemaDefinition = require('./azureSchemaDefinition').schemaDefinition
const client = require('./azureClient').client

// ew all the console!!

let initializeSchema = function (callback) {
  // optional error, or the schema object back from the service
  client.getIndex(settings.index, function (err, foundSchema) {
    if (settings.recreateIndex) {
      console.log('Deleting index (if it exists)')
      client.deleteIndex(settings.index, () => {
        initializeIndex(err, foundSchema, callback)
      })
    } else {
      initializeIndex(err, foundSchema, callback)
    }
  })
}

let initializeIndex = function (err, foundSchema, callback) {
  if (err) {
    console.error(`Error finding schema by index ${settings.index}`)
    console.error(err)
  }
  if (foundSchema) {
    console.log(`Found index ${settings.index}, skipping create`)
    callback()
  } else {
    console.log('No schema found, creating one from definition')
    client.createIndex(schemaDefinition, function (err, newSchema) {
      if (err) {
        console.error(`Error creating schema for index ${settings.index}`)
        console.error(err)
      } else {
        console.log(`New index has been created for ${settings.index}`)
        callback()
      }
    })
  }
}

exports.initialize = function (callback) {
  // Have to make sure the synonyms are there first
  // since they are referenced in the schema

  client.updateOrCreateSynonymMap(synonymSchema.name, synonymSchema, function (err, data) {
    if (err) {
      console.error(`Unable to create synonyms`)
      console.error(err)
    } else {
      console.log('Synonyms have been defined')
      initializeSchema(callback)
    }
  })
}
