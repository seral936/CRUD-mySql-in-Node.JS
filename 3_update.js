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

    const sql = "UPDATE Users SET e_mail ='clairou@gmail.com' WHERE id = 4";
    // const sql = "UPDATE Users SET e_mail ='clairou@gmail.com' WHERE id < 3";

    db.query(sql, (err, res) => {

        if (err) throw err.message
        console.log("Nombre de lignes affectées : " + res.affectedRows + " ---------->  C'est dans la boite BB");
    })
});