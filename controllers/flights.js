const Flight = require("../models/flight");

module.exports = {

    new: newFlight,
    index,
    create
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
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // remove whitespace next to commas
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    // if (req.body.cast) req.body.cast = req.body.cast.split(',');
    // for (let key in req.body) {
    //   if (req.body[key] === '') delete req.body[key];
    // }
    // const movie = new Movie(req.body);
    // movie.save(function(err) {
    //   // one way to handle errors
    //   if (err) return res.redirect('/movies/new');
    //   console.log(movie);
    //   // for now, redirect right back to new.ejs
    //   res.redirect('/movies');
    // });
  }