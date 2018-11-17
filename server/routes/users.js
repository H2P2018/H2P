const mysql = require('mysql2');

var config =
{
    host: '40.79.129.1',
    user: 'gps@gpsenergy',
    password: 'Bryan3008991..',
    database: 'gps_energy',
    port: 3306,
    ssl: false
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            readData();
        }   
    });

function readData(){
        conn.query('UPDATE users_disp set v2=0',
            function (err, results, fields) {
                if (err) throw err;
                else console.log('Selected ' + results.length + ' row(s).');
                for (i = 0; i < results.length; i++) {
                    console.log('Row: ' + JSON.stringify(results[i]));
                }
                console.log('Done.');
            })
       conn.end(
           function (err) { 
                if (err) throw err;
                else  console.log('Closing connection.') 
        });
};

function queryDatabase(){
 
  conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
       function (err, results, fields) {
           if (err) throw err;
       else console.log('Inserted ' + results.affectedRows + ' row(s).');
   })
  conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
       function (err, results, fields) {
           if (err) throw err;
       console.log('Inserted ' + results.affectedRows + ' row(s).');
   })
  conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
   function (err, results, fields) {
           if (err) throw err;
       console.log('Inserted ' + results.affectedRows + ' row(s).');
   })
  conn.end(function (err) { 
   if (err) throw err;
   else  console.log('Done.') 
   });
};