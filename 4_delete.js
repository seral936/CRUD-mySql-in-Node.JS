const mysql = require('mysql');

// différence entre .createConnection et .connect ???
const db = mysql.createConnection({
    host: 'localhost',
    database: "garage",
    user: "root",
    password: "",
    // for Mac only : socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

// comprends pas pourquoi il n'y a pas de else ???
// le console log s'affiche en cas d'erreur alors que ça dit connecté?
db.connect((err) => {
    if (err) throw err
    console.log("connecté BB");

    // const sql = `DELETE FROM Users`;
    const sql = "DELETE FROM Users WHERE  id = 8";
    // const sql = "DELETE FROM Users WHERE e_mail = 'clairou@gmail.com' ";

    db.query(sql, (err, res) => {

        if (err) throw err.message
        console.log("Nombre de lignes affectées : " + res.affectedRows + " ---------->  C'est supprimé BB");
    })
});