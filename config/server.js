// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

// to run off hosted server. Need to figure out production script


module.exports = ({ env }) => ({
  proxy: true,
  url: env('APP_URL'), // Sets the public URL of the application.
  app: { 
    keys: env.array('APP_KEYS')
  },
  database: {
    host: env('DATABASE_HOST'),
  },
});