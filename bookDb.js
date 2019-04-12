const Sequelize = require('sequelize');
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'userdb',
    password: 'userdb',
    database: 'userdb'

})

function getAllBooks() {
    return new Promise(function (resolve, reject) {
        connection.query(
            `SELECT * FROM books`,
            function (err, rows,cols) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(rows);
                }
            }
        )
    })


}

function addBooks(name,edition,semester,roll) {

    return new Promise(function (resolve, reject) {
        connection.query(
            `INSERT INTO worldCup (name,edition,semester,roll) values(?,?,?,?)`,
            [name,edition,semester,roll],
            function (err, results) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve();
                }
            }
        )
    })


}




exports= module.exports ={
    getAllBooks,
    addBooks,
}