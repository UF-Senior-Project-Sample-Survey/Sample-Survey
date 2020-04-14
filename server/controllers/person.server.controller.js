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

exports.createPeopleStratified = (req, res) => {
    var response = {
        people: []
    }

    var strataVariable = req.params.strataVariable;
    var amtBreakdown = [];

    strataValues = [];
    
    if (strataVariable == 'age') {
        amtBreakdown[0] = Math.floor(0.2 * req.params.amount);
        amtBreakdown[1] = Math.floor(0.28 * req.params.amount);
        amtBreakdown[2] = Math.floor(0.19 * req.params.amount);
        amtBreakdown[3] = Math.floor(0.19 * req.params.amount);
        amtBreakdown[4] = Math.floor(0.14 * req.params.amount);

        if ((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]) < req.params.amount) {
            if (amtBreakdown[4] == 0) {
                amtBreakdown[4] += 1;
            }    
            amtBreakdown[1] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]));
        }

        strataValues = [{low: 20, high: 29}, {low: 30, high: 44}, {low: 45, high: 54}, {low: 55, high: 64}, {low: 65, high: 75}]
    } else if (strataVariable == 'gender') {
        amtBreakdown[0] = Math.floor(0.49 * req.params.amount);
        amtBreakdown[1] = Math.floor(0.49 * req.params.amount);
        amtBreakdown[2] = Math.floor(0.02 * req.params.amount);

        if ((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2]) < req.params.amount) {
            var genderRoll = Math.random()*2
            if (genderRoll <= 1) {
                amtBreakdown[0] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2]));
            } else {
                amtBreakdown[1] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2]));
            }
        }

        strataValues = ['Male', 'Female', 'Other'];

    } else if (strataVariable == 'maritalStatus') {
        amtBreakdown[0] = Math.floor(0.37 * req.params.amount);
        amtBreakdown[1] = Math.floor(0.493 * req.params.amount);
        amtBreakdown[2] = Math.floor(0.016 * req.params.amount);
        amtBreakdown[3] = Math.floor(0.095 * req.params.amount);
        amtBreakdown[4] = Math.floor(0.026 * req.params.amount);

        if ((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]) < req.params.amount) {
            if (amtBreakdown[2] == 0) {
                amtBreakdown[2] += 1;
            } 
            if (((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]) < req.params.amount) && (amtBreakdown[4] == 0)){
                amtBreakdown[4] += 1;
            }

            amtBreakdown[1] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]));
        }
        strataValues = ["Never Married", "Married", "Separated", "Divorced", "Widowed"];
    }

    for (var i = 0; i < amtBreakdown.length; i++) {
        for (var j = 0; j < amtBreakdown[i]; j++) {
            if (strataVariable == 'age') {
                var randAge = Math.floor(Math.random() * (strataValues[i].high - strataValues[i].low + 1)) + strataValues[i].low;
                let person = personMaker.createPersonStratified(strataVariable, randAge, i);
                response.people.push(person)
            } else {
                let person = personMaker.createPersonStratified(strataVariable, strataValues[i], i);
                response.people.push(person);
            }
        }
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

exports.getAnswerStratified = (req, res) => {
    var response = {
        people: []
    }

    var strataVariable = req.params.strataVariable;
    var amtBreakdown = [];

    strataValues = [];
    
    if (strataVariable == 'age') {
        amtBreakdown[0] = Math.floor(0.2 * req.params.amount);
        amtBreakdown[1] = Math.floor(0.28 * req.params.amount);
        amtBreakdown[2] = Math.floor(0.19 * req.params.amount);
        amtBreakdown[3] = Math.floor(0.19 * req.params.amount);
        amtBreakdown[4] = Math.floor(0.14 * req.params.amount);

        if ((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]) < req.params.amount) {
            if (amtBreakdown[4] == 0) {
                amtBreakdown[4] += 1;
            }    
            amtBreakdown[1] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]));
        }

        strataValues = [{low: 20, high: 29}, {low: 30, high: 44}, {low: 45, high: 54}, {low: 55, high: 64}, {low: 65, high: 75}]
    } else if (strataVariable == 'gender') {
        amtBreakdown[0] = Math.floor(0.49 * req.params.amount);
        amtBreakdown[1] = Math.floor(0.49 * req.params.amount);
        amtBreakdown[2] = Math.floor(0.02 * req.params.amount);

        if ((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2]) < req.params.amount) {
            var genderRoll = Math.random()*2
            if (genderRoll <= 1) {
                amtBreakdown[0] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2]));
            } else {
                amtBreakdown[1] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2]));
            }
        }

        strataValues = ['Male', 'Female', 'Other'];

    } else if (strataVariable == 'maritalStatus') {
        amtBreakdown[0] = Math.floor(0.37 * req.params.amount);
        amtBreakdown[1] = Math.floor(0.493 * req.params.amount);
        amtBreakdown[2] = Math.floor(0.016 * req.params.amount);
        amtBreakdown[3] = Math.floor(0.095 * req.params.amount);
        amtBreakdown[4] = Math.floor(0.026 * req.params.amount);

        if ((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]) < req.params.amount) {
            if (amtBreakdown[2] == 0) {
                amtBreakdown[2] += 1;
            } 
            if (((amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]) < req.params.amount) && (amtBreakdown[4] == 0)){
                amtBreakdown[4] += 1;
            }

            amtBreakdown[1] += (req.params.amount - (amtBreakdown[0] + amtBreakdown[1] + amtBreakdown[2] + amtBreakdown[3] + amtBreakdown[4]));
        }
        strataValues = ["Never Married", "Married", "Separated", "Divorced", "Widowed"];
    }

    for (var i = 0; i < amtBreakdown.length; i++) {
        for (var j = 0; j < amtBreakdown[i]; j++) {
            var person;
            if (strataVariable == 'age') {
                var randAge = Math.floor(Math.random() * (strataValues[i].high - strataValues[i].low + 1)) + strataValues[i].low;
                person = personMaker.createPersonStratified(strataVariable, randAge, i);
            } else {
                person = personMaker.createPersonStratified(strataVariable, strataValues[i], i);
            }

            person.answers = [];

            for(var k = 0; k < questions.length; k++){
            
                let question = {
                    prompt: questions[k].prompt,
                    answer: ''
                };

                let weight = Math.floor(Math.random() * questions[k].totalWeightStratified[i]) + 1;

                let tempAnswer;
    
                for (let l = 0; l < questions[k].answersStratified.length; l++){
                    weight -= questions[k].answers[l].weightStratified[i];
                    tempAnswer = questions[k].answers[l].text;
                    if (weight <= 0)
                        break;
                }
                
                question.answer = tempAnswer;
                person.answers.push(question);
            }

            response.people.push(person);
        }
    }
    
    res.json(response);
}