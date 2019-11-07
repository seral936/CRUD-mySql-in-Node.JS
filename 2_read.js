const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    database: "garage",
    user: "root",
    password: "",
    // for Mac only : socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

db.connect((err) => {
    if (err) throw err
    console.log("connecté BB");

    // const sql = "SELECT FROM Users WHERE  id = ";
     const sql = "SELECT * FROM Users";

    db.query(sql, (err, res) => {

        if (err) throw err.message
        console.log(res);


    })
});

