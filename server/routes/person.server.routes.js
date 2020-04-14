const person = require('../controllers/person.server.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/create/:amount')
  .get(person.createPeople);

router.route('/createstratified/:amount/:strataVariable')
  .get(person.createPeopleStratified)

router.route('/getAnswers/:amount')
  .post(person.getAnswer);

router.route('/getAnswersStratified/:amount/:strataVariable')
  .post(person.getAnswerStratified);

module.exports = router;