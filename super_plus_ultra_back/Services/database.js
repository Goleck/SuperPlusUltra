const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'super_plus_ultra' ,
    port: 3306 
  });

  connection.connect((err) => {
    if (err){
        console.log(err.stack)
        return
    }
    console.log(connection.threadId)
})

module.exports = connection