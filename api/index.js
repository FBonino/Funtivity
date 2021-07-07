const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3000, () => {
    console.log('%s listening at 3001');
  });
}).catch(err => console.log(err));