const Person = require('../models/person.server.model');
const randName = require('../person_sources/randName');

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
    let person = new Person({
        age: Math.floor(Math.random() * 55) + 20,
        maritalStatus: "Single",
        householdSize: Math.floor(Math.random() * 8),
        education: "University",
        job: "Plumber",
        yearsExperience: Math.floor(Math.random() * 30) + 1,
        location: "CityName",
        salary: (Math.floor(Math.random() * 100) + 20) * 1000
    })
    if(Math.floor(Math.random()*2) == 0){
        person.name = {
            first: randName.randMale(),
            last: randName.randSurname()
        }
        person.gender = "Male"
    }
    else{
        person.name = {
            first: randName.randFemale(),
            last: randName.randSurname()
        }
        person.gender = "Female"
    }
    person.save()
        .then(person => {
            res.status(200).json({ 'person': 'person added successfully' });
        })
        .catch(err => {
            res.status(400).send(err);
        });
}