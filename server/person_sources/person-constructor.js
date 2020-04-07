const personProp = require('./person-properties');
const Person = require('../models/person.server.model');

module.exports.createPerson = () => {
    let person = new Person({
        age: Math.floor(Math.random() * 55) + 20,
        maritalStatus: "Single",
        householdSize: Math.floor(Math.random() * 8),
        education: "University",
        job: personProp.randJob(),
        location: "CityName",
    });

    person.yearsExperience = Math.floor(Math.random() * ((person.age)-17)) + 1;
    person.salary = personProp.randSalary(person.yearsExperience, person.job);
    
    if (Math.floor(Math.random() * 2) == 0) {
        person.name = {
            first: personProp.randMale(),
            last: personProp.randSurname()
        }
        person.gender = "Male"
    }
    else {
        person.name = {
            first: personProp.randFemale(),
            last: personProp.randSurname()
        }
        person.gender = "Female"
    }
    return person;
}