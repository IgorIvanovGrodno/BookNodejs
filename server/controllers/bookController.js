/**
 * Controller for Book and languages
 */

/** Import dao */
const bookDAO = require('../dao/bookDAO');

module.exports = {
    /**
     * This function receive all languages and books from bookDAO and render "index" page
     * @param req - request
     * @param res - response
     */
        getAllLanguagesAndBooks(req, res)
    {
        bookDAO.getAllLanguagesAndBooks((results) => {
            res.render("index.pug", {
                "langs": results[0],
                "books": results[1]
            });
        });
    },

    /**
     * This function receive all languages and books by selected language from bookDAO and render "index" page
     * @param req - request
     * @param res - response
     */
    getAllLanguagesAndBooksByLang(req, res)
    {
        bookDAO.getAllLanguagesAndBooksByLang(req.params.id, (results) => {
            res.render("index.pug", {
                "langs": results[0],
                "books": results[1]
            });
        });

    }
};