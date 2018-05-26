let settings = require('./settings').settings;

exports.schemaDefinition = {
  name: settings.index,
  fields:
   [
     { name: 'id',           type: 'Edm.String', searchable: false, filterable: false, retrievable: true,  sortable: false, facetable: false, key: true  },
     { name: 'podcastTitle', type: 'Edm.String', searchable: true,  filterable: false, retrievable: true,  sortable: false, facetable: false, key: false },
     { name: 'episodeTitle', type: 'Edm.String', searchable: true,  filterable: false, retrievable: true,  sortable: false, facetable: false, key: false },
     { name: 'description',  type: 'Edm.String', searchable: true,  filterable: false, retrievable: true,  sortable: false, facetable: false, key: false },
     { name: 'published',    type: 'Edm.String', searchable: true,  filterable: true,  retrievable: true,  sortable: true,  facetable: false, key: false },
     { name: 'audioUrl',     type: 'Edm.String', searchable: false, filterable: false, retrievable: true,  sortable: false, facetable: false, key: false }
   ],
  scoringProfiles: [],
  defaultScoringProfile: null,
  corsOptions: null
};
