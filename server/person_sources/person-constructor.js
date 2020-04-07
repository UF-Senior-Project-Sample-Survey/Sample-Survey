const personProp = require('./person-properties');
const Person = require('../models/person.server.model');

//TODO: Connect Job to education

module.exports.createPerson = () => {
    let person = new Person({
        age: Math.floor(Math.random() * 55) + 20,
        maritalStatus: personProp.randMarital(),
        householdSize: Math.floor(Math.random() * 8),
        education: personProp.randEducation(),
        job: personProp.randJob(),
        location: personProp.randCity()
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

