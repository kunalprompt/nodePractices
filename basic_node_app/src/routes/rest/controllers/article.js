var article = {
    get_article: function(req, res){
        res.send("Article Id: " + req.params['id']);
    }
}

module.exports = article;
