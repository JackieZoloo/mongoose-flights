const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
// const airlines = new Flight().schema.path();

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
        if(err) return res.redirect('/flights/new');
        res.redirect('/flights');
    })
  }
  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', {
          flight,
          tickets,
        });

      })

    })
  }