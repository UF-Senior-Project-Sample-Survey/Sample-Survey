const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creation of survey schema to store answers to survey questions
const SurveySchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    questions: {
        type: [Number],
        required: true
    },
    answers: {
        type: [String],
        required: true
    }
});

module.exports = Survey = mongoose.model("survey", SurveySchema);