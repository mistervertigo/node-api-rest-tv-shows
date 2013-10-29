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
  //POST - Insert a new TVShow in the DB
  addTVShow = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var tvshow = new TVShow({
      title:    req.body.title,
      year:     req.body.year,
      country:  req.body.country,
      poster:   req.body.poster,
      seasons:  req.body.seasons,
      genre:    req.body.genre,
      summary:  req.body.summary  
    });

    tvshow.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });
  

}