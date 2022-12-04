const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'studentdatabase',
	user : 'root',
	password : 'Doraemon@2050'
});

connection.query(sql, (req,res) =>{
    res.send(result);
})

connection.connect(function(err){
    if(err)
    throw err;
    console.log('Database successfully connected');
})
