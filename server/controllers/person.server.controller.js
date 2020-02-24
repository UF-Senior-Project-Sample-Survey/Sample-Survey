const person = require('../models/person.server.model')

exports.hello = function(req, res) {
    res.send('the things you seek.')
};