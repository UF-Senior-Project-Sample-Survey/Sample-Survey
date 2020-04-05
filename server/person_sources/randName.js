const mNames = require('./MaleNames.json');
const fNames = require('./FemaleNames.json');
const sNames = require('./Surnames.json');
var totalWeightMale = 0;
var totalWeightFemale = 0;
var totalWeightSurname = 0;

for (i in mNames.names) {
    totalWeightMale += mNames.names[i].weight;
};
for (i in fNames.names) {
    totalWeightFemale += fNames.names[i].weight;
};
for (i in sNames.names) {
    totalWeightSurname += sNames.names[i].weight;
};

module.exports.randFemale = () => {
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
    var weight = Math.floor(Math.random() * totalWeightSurname);
    for (i in sNames.names) {
        var sName = sNames.names[i].name;
        weight -= sNames.names[i].weight;
        if (weight <= 0)
            break;
    }
    return sName;
}