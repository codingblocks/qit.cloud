let settings = require('./settings').settings,
  schemaDefinition = require('./schemaDefinition').schemaDefinition,
  client = require('./client').client;

// ew all the console!!

exports.initialize = function(callback) {
  client.getIndex(settings.index, function(err, foundSchema) {
    // optional error, or the schema object back from the service
    if(err) {
      console.error(`Error finding schema by index ${settings.index}`);
      console.error(err);
    }
    if(foundSchema) {
      console.log(`Found index ${settings.index}, skipping create`);
      callback();
    } else {
      console.log('No schema found, creating one from definition');
      client.createIndex(schemaDefinition, function(err, newSchema) {
        if(err) {
          console.error(`Error creating schema for index ${settings.index}`);
          console.error(err);
        } else {
          console.log(`New index has been created for ${settings.index}`);
          callback();
        }
      });
    }
  });
}