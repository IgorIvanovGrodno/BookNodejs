const express = require('express');
const mysql = require('mysql2');


const router = express.Router();
const connection = mysql.createConnection({
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  database : 'books',
  password : 'root'
});

var queryGetAllBookByLang = "SELECT b.id, IFNULL(l.book_name,b.name) as name, b.year FROM book b left join language_book l on l.id_book=b.id AND id_locale=";
var queryGetAllLang = "SELECT * FROM localization;"

getAllLanguagesAndBooks = ( cb) => {
    connection.query("SELECT * FROM localization; SELECT * FROM book;", function(err, results) {
        if (err) {
            throw err;
        }
        cb(results);
    });
}

getAllLanguagesAndBooksByLang = (idLang, cb) => {

    connection.query(queryGetAllLang+queryGetAllBookByLang+idLang, function(err, results) {
        if (err) {
            throw err;
        }
        cb(results);
    });
}

/* GET home page. */
router.get('/', function(req, res) {
    getAllLanguagesAndBooks((results) => {
        res.render("index.pug", {
            "langs": results[0],
            "books": results[1]
        });
        console.log(results);
    });
});

/* GET home page. */
router.get('/select/:id', function(req, res) {
    getAllLanguagesAndBooksByLang(req.params.id,(results) => {
        res.render("index.pug", {
            "langs": results[0],
            "books": results[1]
        });
    });

});

module.exports = router;