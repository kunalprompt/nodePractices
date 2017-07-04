var URILogger = function (req, res, next){
	console.log("Request: ", req.method, " URL: ", req.originalUrl);
	next();
}

module.exports = URILogger;
