const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create


}

function newTicket(req, res) {
    console.log('req.params', req.params);
    res.render('tickets/new', {
        flightId: req.params.id
    });
}

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function() {
        res.redirect(`/flights/${req.params.id}`);
    })
}

