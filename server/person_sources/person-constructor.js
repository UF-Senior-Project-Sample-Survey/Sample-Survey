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

// create a person with stratification inputs
module.exports.createPersonStratified = (strataVariable, value, strataValue) => {
    let person = {
        name: {
            first: '',
            last: ''
        },
        education: personProp.randEducation(),
        location: personProp.randState(), 
        strata: strataValue
    };

    if (strataVariable == 'maritalStatus') {
        person.maritalStatus = value;
    } else {
        person.maritalStatus = personProp.randMarital()
    }
    
    if (strataVariable == 'age') {
        person.age = value
    } else {
        person.age = Math.floor(Math.random() * 55) + 20;
    }

    person.householdSize = personProp.randHousehold(person.maritalStatus);
    person.employment = personProp.randEmployment(person.age);

    if (strataVariable == 'gender') {
        person.gender = value;
    } else {
        person.gender = personProp.randGender()
    }

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

module.exports.createPersonCluster = (cluster, inState) => {
    let person = {
        name: {
            first: '',
            last: ''
        },
        age: Math.floor(Math.random() * 55) + 20,
        maritalStatus: personProp.randMarital(),
        education: personProp.randEducation(),
        location: inState,
        cluster: cluster
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