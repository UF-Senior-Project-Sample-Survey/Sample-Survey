var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var questionSchema = new Schema({

    prompt: {type: String, required: true, unique: true},
    answers:[String]
});



/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Question = mongoose.model('Question', questionSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Question;