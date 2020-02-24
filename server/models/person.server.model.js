var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var personSchema = new Schema({

    name: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},   
    maritalStatus: {type: String, required: true},
    householdSize: {type: Number, required: true},
    education: {type: String, required: true},
    job: {type: String, required: true},
    yearsExperience: {type: Number, required: true},
    location: {type: String, required: true},
    salary: {type: Number, required: true}    
});



/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Person = mongoose.model('Person', personSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Person;