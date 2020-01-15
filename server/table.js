var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'navgurukul',
      database: 'videoWikiTest'
    },
  })
knex.schema.createTable('register', (table) => {
    table.increments('user_id'),
    table.string("name"),
    table.string("email_id"),
    table.string("password")

})
.then(() => console.log("table created"))
.catch((err) => { console.log(err); throw err });