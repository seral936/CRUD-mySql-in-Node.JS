const mysql = require('mysql');

// 
// .createConnection, pour créer la connexion
const db = mysql.createConnection({
    host: 'localhost',
    database: "garage",
    user: "root",
    password: ""
    // for Mac only : socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});

// pour commencer à taper les requêtes
db.connect((err) => {
    if (err) {
        console.log(err.message);

    } else {
        console.log("connecté BB");


let insert = "INSERT INTO Users (first_name, last_name, e_mail) VALUE ('Claire', 'MATHIRON','clairou@MSN.COM'), ('Johnny', 'DEEP','gorgeous@MSN.COM'), ('James', 'Cameron', 'cameron@MSN.COM'),('Audee', 'MATHIRON','aude@MSN.COM'), ('Brad', 'PITT','bradou@MSN.COM'), ('Teddy', 'Smith', 'teddy@MSN.COM')"
        db.query(insert, (err, res) => {

            if (err) {
                console.log(err.message);

            } else {
                console.log(res);
                console.log("C'EST ENVOYÉ BB");

            }
        })
    }
});

