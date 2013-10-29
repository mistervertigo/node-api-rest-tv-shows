module.exports = function(app) {

  var TVShow = require('../models/tvshow.js');

  //GET - Return all tvshows in the DB
  findAllTVShows = function(req, res) {
  	TVShow.find(function(err, tvshows) {
  		if(!err) {
  			res.send(tvshows);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };
  
  

}