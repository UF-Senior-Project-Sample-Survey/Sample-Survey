const mNames = require('./MaleNames.json');
const fNames = require('./FemaleNames.json');
const sNames = require('./Surnames.json');
const jobInfo = require('./job-info.json');

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
}

module.exports.randJob = () => {
    let totalWeightJob = 0;
    for (i in jobInfo.jobs) {
        totalWeightJob += jobInfo.jobs[i].weight;
    };
    var weight = Math.floor(Math.random() * totalWeightJob);
    for (i in jobInfo.jobs) {
        var jobTitle = jobInfo.jobs[i].title;
        weight -= jobInfo.jobs[i].weight;
        if (weight <= 0)
            break;
    }
    return jobTitle;
}

module.exports.randSalary = (experience, title) => {
    var job = getJobByTitle(title);
    if(!job)
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
}

getJobByTitle = (title) => {
    var job = jobInfo.jobs.filter((job) => {
        return job.title == title;
    })
    return job[0];
}