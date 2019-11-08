// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const satteliteDb = mysql.createConnection({
  host: '127.0.0.1',
  user: 'hotpadsreadonly',
  password: 'HotPads123',
  database: 'satellite',
  port: 3307
});

// First you need to create a connection to the db
const rentalManagerDb = mysql.createConnection({
  host: '127.0.0.1',
  user: 'hotpadsreadonly',
  password: 'HotPads123',
  database: 'rentalmanager',
  port: 3308
});

rentalManagerDb.connect((err) => {
  if (err) {
    console.log('Error in connecting to the Rental Manager database');
    return
  }
  console.log('Connected to the Rental Manager database');
  rentalManagerDb.end(err);
});

satteliteDb.connect((err) => {
  if(err){
    console.log('Error connecting to the Satellite Db');
    return;
  }
  satteliteDb.query("SELECT COUNT(*) FROM ListingConversationUpdate where fromEmail = 'louistran30@gmail.com'", function (err, result) {
    if (err) throw err;
    console.log(result);
    satteliteDb.end(err)
  });
  console.log('Connected to the satellite database');
});



// con.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });