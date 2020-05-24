/**
 * DAO for Book and languages.
 */

/**
 * Import mysql2.
 */
const mysql = require('mysql2');

/**
 * Create connection.
 * @type {Connection}
 */
const connection = mysql.createConnection({
    multipleStatements: true,
    host     : 'localhost',
    user     : 'root',
    database : 'books',
    password : 'root'
});

/**
 * Query for select books by language.
 * @type {string}
 */
var queryGetAllBookByLang = "SELECT b.id, IFNULL(l.book_name,b.name) as name, b.year FROM book b left join language_book l on l.id_book=b.id AND id_locale=";

/**
 * Query for select all languages.
 * @type {string}
 */
var queryGetAllLangs = "SELECT * FROM localization;"

/**
 * Query for select all books.
 * @type {string}
 */
var queryGetAllBooks = "SELECT * FROM book;"

module.exports =
{
    /**
     * This function make request to database and get all languages and books.
     * @param cb
     */
    getAllLanguagesAndBooks(cb)
    {
        connection.query(queryGetAllLangs + queryGetAllBooks, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },

    /**
     * This function make request to database and get all languages and books by selected language.
     * @param idLang
     * @param cb
     */
    getAllLanguagesAndBooksByLang(idLang, cb)
    {
        connection.query(queryGetAllLangs + queryGetAllBookByLang + idLang, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    }

};