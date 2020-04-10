const Person = require('../models/person.server.model');
const personMaker = require('../person_sources/person-constructor');

exports.createPeople = (req, res) => {
    var response = {
        people: []
    }
    for (let i = 0; i < req.params.amount; i++) {
        let person = personMaker.createPerson();
        response.people.push(person);
    }
    res.json(response);
}