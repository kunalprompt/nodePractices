var rest_router = require('express').Router();

var article_controller = require(__dirname + '/controllers/article.js');

rest_router.get('/article/:id', article_controller.get_article);

module.exports = rest_router;
