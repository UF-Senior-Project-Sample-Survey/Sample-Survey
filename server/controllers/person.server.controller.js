const Person = require('../models/person.server.model');
const personMaker = require('../person_sources/person-constructor');

exports.createPeople = (req, res) => {
    var response = {
        people: []
    }
    for (let i = 0; i < req.params.amount; i++) {
        let person = personMaker.createPerson();
        response.people.push(person);
    }
    res.json(response);
}

exports.getAnswer = (req, res) => {
    var response = {
        people: []
    }
    var questions = req.body.questions
    for (let i = 0; i < req.params.amount; i++) {
        let person = personMaker.createPerson();
        person.answers = [];

        for(let j = 0; j < questions.length; j++){
            
            let question = {
                prompt: questions[j].prompt,
                answer: ''
            };
            let weight = Math.floor(Math.random() * questions[j].totalWeight) + 1;
            let tempAnswer;

            for (let k = 0; k < questions[j].answers.length; k++){
                weight -= questions[j].answers[k].weight;
                tempAnswer = questions[j].answers[k].text;
                if (weight <= 0)
                    break;
            }
            question.answer = tempAnswer;
            person.answers.push(question);
        }
        response.people.push(person);
    }
    res.json(response);
}