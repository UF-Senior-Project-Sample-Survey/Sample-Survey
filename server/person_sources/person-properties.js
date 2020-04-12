const mNames = require('./MaleNames.json');
const fNames = require('./FemaleNames.json');
const sNames = require('./Surnames.json');
const states = require('./States.json');

module.exports.randGender = () => {
    let genderRoll = Math.random()*100;
    if (genderRoll <= 49)
        return "Male"
    else if (genderRoll <= 98)
        return "Female"
    else if (genderRoll <= 99)
        return "Other"
    else 
        return "I prefer not to disclose"
}

module.exports.randFemale = () => {
    let totalWeightFemale = 0;
    for (i in fNames.names) {
        totalWeightFemale += fNames.names[i].weight;
    };
    var weight = Math.floor(Math.random() * totalWeightFemale);
    for (i in fNames.names) {
        var fName = fNames.names[i].name;
        weight -= fNames.names[i].weight;
        if (weight <= 0)
            break;
    }
    return fName;
};

module.exports.randMale = () => {
    let totalWeightMale = 0;
    for (i in mNames.names) {
        totalWeightMale += mNames.names[i].weight;
    };
    var weight = Math.floor(Math.random() * totalWeightMale);
    for (i in mNames.names) {
        var mName = mNames.names[i].name;
        weight -= mNames.names[i].weight;
        if (weight <= 0)
            break;
    }
    return mName;
};

module.exports.randSurname = () => {
    let totalWeightSurname = 0;
    for (i in sNames.names) {
        totalWeightSurname += sNames.names[i].weight;
    };
    var weight = Math.floor(Math.random() * totalWeightSurname);
    for (i in sNames.names) {
        var sName = sNames.names[i].name;
        weight -= sNames.names[i].weight;
        if (weight <= 0)
            break;
    }
    return sName;
};

module.exports.randSalary = (experience, title) => {
    var job = getJobByTitle(title);
    if (!job)
        return; //Return undefined if no job found with title.
    var salary;
    for (i in job.salary) {
        if (experience - job.salary[i].experience <= 0) {
            let data = job.salary[i];
            salary = Math.floor(Math.random() * data.range) + data.median - (data.range / 2); //Generate a random salary within +/- half the range of the median.
            break;
        }
    }
    return salary;
};

module.exports.randEmployment = (age) => {
    let roll = Math.random()*100;
        if (roll <= 4.4)
            return "Unemployed";
        else if (roll <= 9.4){
            if (age < 30)
                return "Student";
            else if (age > 66)
                return "Retired";
            else 
                return "Full time";
        }
        else if (roll <= 15)
            return "Less than part time";
        else if (roll <= 25)
            return "At least part time";
        else
            return "Full time";
};

module.exports.randEducation = () => {
    var education;

    switch (Math.floor(Math.random() * 6)) {
        case 0:
            education = "Some High School";
            break;
        case 1:
            education = "High School or GED";
            break;
        case 2:
            education = "Associate's Degree";
            break;
        case 3:
            education = "Bachelor's Degree";
            break;
        case 4:
            education = "Master's Degree";
            break;
        case 5:
            education = "Doctorate Degree";
            break;
    }

    return education;
};

module.exports.randMarital = () => {
    let rand = (Math.random() * 100)
    let status;
    if (rand < 37)
        status = "Never Married";
    else if (rand < 86.3)
        status = "Married";
    else if (rand < 87.9)
        status = "Separated";
    else if (rand < 97.4)
        status = "Divorced";
    else
        status = "Widowed";

    return status;
};

module.exports.randState = () => {
    let totalStates = 0;
    for (i in states.states)
        totalStates++;
    let stateName = states.states[Math.floor(Math.random() * totalStates)].name;
    return stateName;
};

module.exports.randHousehold = (maritalStatus) => {
    if (maritalStatus == "Never Married") {
        let kidRoll = Math.random();
        if (kidRoll <= .8)
            return 1;
        else if (kidRoll <= .9)
            return 2;
        else
            return 3;
    }
    else if (maritalStatus == "Married") {
        let kidRoll = Math.random();
        if (kidRoll <= .3)
            return 2;
        else if (kidRoll <= .6)
            return 3;
        else if (kidRoll <= .8)
            return 4;
        else if (kidRoll <= .95)
            return 5;
        else if (kidRoll <= .98)
            return 6;
        else
            return 7;
    }
    else {
        let kidRoll = Math.random();
        if (kidRoll <= .3)
            return 1;
        else if (kidRoll <= .6)
            return 2;
        else if (kidRoll <= .8)
            return 3;
        else if (kidRoll <= .95)
            return 4;
        else if (kidRoll <= .98)
            return 5;
        else
            return 6;
    }
};