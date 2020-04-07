const Question = require('../models/question.server.model')


exports.addQuestion = function (req, res) {
    let question = new Question({
        category: "Examples",
        prompt: "Another Example Prompt",
        answers: [
            {
                text: "Answer A",
                weight: 10
            },
            {
                text: "Answer B",
                weight: 30
            },
            {
                text: "Answer C",
                weight: 50
            },
            {
                text: "Answer D",
                weight: 30
            }
        ]
    });
    question.save()
        .then(question => {
            res.status(200).json({ 'question': 'question added successfully' });
        })
        .catch(err => {
            res.status(400).send(err);
        });
};

exports.allQuestions = (req, res) => {
    Question.find((err, question) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(question);
        }
    });
};

exports.findById = (req, res) => {
    let id = req.params.id;
    Question.findById(id, (err, question) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(question);
        }
    });
}


exports.selectRandomAnswer = (req, res) => {
    let id = req.params.id;
    Question.findById(id, (err, question) => {
        if (err) {
            console.log(err);
        }
        else {
            //Algorithm for randomly selecting an answer from a question
            let totalAnswerWeight = 0;
            for (i in question.answers)
                totalAnswerWeight += question.answers[i].weight;
            let weight = Math.floor(Math.random() * totalAnswerWeight);
            let answer;
            for (i in question.answers) {
                weight -= question.answers[i].weight;
                answer = question.answers[i].text;
                if (weight <= 0)
                    break;
            }

            res.json({ question: question.prompt, answer: answer });
        }
    });
}