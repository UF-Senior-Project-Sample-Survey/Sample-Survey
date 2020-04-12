const personProp = require('./person-properties');

module.exports.createPerson = () => {
    let person = {
        name: {
            first: '',
            last: ''
        },
        age: Math.floor(Math.random() * 55) + 20,
        maritalStatus: personProp.randMarital(),
        education: personProp.randEducation(),
        location: personProp.randState()
    };
    person.householdSize = personProp.randHousehold(person.maritalStatus);
    person.employment = personProp.randEmployment(person.age);
    person.gender = personProp.randGender()

    if (person.gender == "Male")
        person.name.first = personProp.randMale()
    else if (person.gender == "Female")
        person.name.first = personProp.randFemale()

    else {
        if (Math.random <= .5)
            person.name.first = personProp.randMale();
        else
            person.name.first = personProp.randFemale();
    }
    person.name.last = personProp.randSurname();
    return person;
}

