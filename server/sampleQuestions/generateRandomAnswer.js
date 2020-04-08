const categories = required('./sampleCategories.json');
const questions = require('./sampleQuestions.json');
const answer = require('./sampleAnswers.json');

// None of this is syntactically correct, work on with other members of group because I don't know how this needs to work
module.exports.randomAnswer = (q_id) => {
    var setOfAnswers = answer.find(q_id).answers;
    var setOfProbabilities = answer.find(q_id).probabilities;
    var rn = Math.random();
    var c = true;
    var a = "";

    while(c === true){
        for (i in setOfProbabilities) {
            if (rn < setOfProbabilities[i]) {
                a = setOfAnswers[i];
                c = false;
            } else {
                rn = rn - setOfProbabilities[i];
            }
        }
    }

    return a;
};

module.exports.getCategoryName = (q_id) => {
    var cat_id = questions.find(q_id).c_id;
    var cat_name = categories.find(cat_id).text;

    return cat_name;
}