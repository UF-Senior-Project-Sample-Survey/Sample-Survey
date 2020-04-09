const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    c_id: {
        type: Number,
        required: true
    },
    q_id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = Question = mongoose.model("question", QuestionSchema);