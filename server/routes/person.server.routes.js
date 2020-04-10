const person = require('../controllers/person.server.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/create/:amount')
  .get(person.createPeople);

router.route('/getAnswers/:amount')
  .post(person.getAnswer);

module.exports = router;