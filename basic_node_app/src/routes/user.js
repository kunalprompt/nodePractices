var user_router = require('express').Router();

user_router.get('/:userId', function(req, res){
	res.send("User Id: " + req.params['userId']);
})

module.exports = user_router;
