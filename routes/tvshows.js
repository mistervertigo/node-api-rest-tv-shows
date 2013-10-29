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
  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
    TVShow.findById(req.param.id, function(err, tvshow) {
      if(!err) {
        res.send(tvshow);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };
  
  

}