const Flight = require("../models/flight");

module.exports = {

    new: newFlight,
    index,
    create,
    show
};

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flights' });
  }

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All flights', flights });
    });
  }
  function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if(err) return res.redirect("/flights/new");
        res.redirect("/flights");
    })
  }
  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      console.log("----->",flight);
      res.render("flights/show", {flight});
    })
    
    // Adventure.findById(id, function (err, adventure) {});
    // Flight.findById(req.params.id)
    // .populate('cast')
    // .exec(function(err, movie) {
    //   Performer.find({_id: {$nin: movie.cast}}, function(err, performers) {
    //     res.render('movies/show', {
    //       title: 'Movie Detail',
    //       movie,
    //       performers
    //     });
    //   });
    // });
  }