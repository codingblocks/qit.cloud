const settings = require('./settings').settings
const synonymSchema = require('./schemaDefinition').synonymSchema
const schemaDefinition = require('./schemaDefinition').schemaDefinition
const client = require('./client').client

// ew all the console!!

let initializeSchema = function (callback) {
  client.getIndex(settings.index, function (err, foundSchema) {
    // optional error, or the schema object back from the service
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
  })
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
