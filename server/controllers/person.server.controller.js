const Person = require('../models/person.server.model');
const personMaker = require('../person_sources/person-constructor');

exports.hello = function (req, res) {
    res.send('the things you seek.')
};

exports.addPerson = function (req, res) {
    let person = new Person(req.body);
    person.save()
        .then(person => {
            res.status(200).json({ 'person': 'person added successfully' });
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.allPeople = (req, res) => {
    Person.find((err, people) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(people);
        }
    });
};

exports.addRandom = (req, res) => {
    let person = personMaker.createPerson();
    person.save()
        .then(person => {
            res.status(200).json({ 'person': 'person added successfully' });
        })
        .catch(err => {
            res.status(400).send(err);
        });
}