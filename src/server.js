const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./../config/mongoDb');
const app            = express();
const port = 9000;


app.use(bodyParser.urlencoded({ extended: true }));

// MongoClient.connect(db.url, (err, database) => {
//   if (err) return console.log(err)
//   const db = database.db('ethweb3test')
//   require('./app/routes')(app, db);
//   app.listen(port, () => {      
//       console.log('Up on port:' + port);
//   });             
// })

require('./app/routes')(app, db);
app.listen(port, () => {      
    console.log('Up on port:' + port);
}); 



