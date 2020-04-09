const Question = require('../models/question.server.model')


exports.addQuestion = function (req, res) {
    let question = new Question(req.body);
    question.totalWeight = 0;
    for (i in question.answers){
        question.totalWeight += question.answers[i].weight;
    }
    
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

exports.updateQuestion = (req, res) => {
    Question.findById(req.params.id, function (err, question) {
      if (!question)
        res.status(400).send('Question is not found');
      else {
        question.prompt = req.body.prompt;
        question.category = req.body.category;
        question.answers = req.body.answers;
        question.totalWeight = 0;
        for (i in question.answers){
            question.totalWeight += question.answers[i].weight;
        }
  
        question.save()
          .then(question => {
            res.json('Question Updated');
          })
          .catch(err => {
            res.status(400).send(err);
          })
      }
    })
  }

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

exports.deleteQuestion = (req,res) => {
    let id = req.params.id;
    Question.findById(id, (err, question) => {
        if (!question)
            res.status(400).send('question not found');
        else
            question.remove()
                .then(question => {
                    res.json('Question Deleted');
                })
                .catch(err => {
                    res.status(400).send(err);
                });
    })
}