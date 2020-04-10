const personProp = require('./person-properties');
const Person = require('../models/person.server.model');

//TODO: Connect Job to education
//TODO: Make householdSize dependent on marital status?

module.exports.createPerson = () => {
    let person = new Person({
        age: Math.floor(Math.random() * 55) + 20,
        maritalStatus: personProp.randMarital(),
        education: personProp.randEducation(),
        location: personProp.randCity()
    });
    person.householdSize = personProp.randHousehold(person.maritalStatus);
    person.job = personProp.randJob(person.education);
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

