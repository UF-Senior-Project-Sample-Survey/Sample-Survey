const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creation of survey schema to store answers to survey questions
const SurveySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    cluster: {
        type: Number,
        required: false
    },
    strata: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    employment: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    relationshipStatus: {
        type: String,
        required: true
    },
    drugUse: {
        type: String,
        required: true
    },
    criminal: {
        type: String,
        required: true
    },
    additionalQuestions: {
        type: Map,
        of: Number
        // I think a map that would store questionID and their answer would work best here
    }
});

module.exports = Survey = mongoose.model("survey", SurveySchema);