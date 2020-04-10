const person = require('../controllers/person.server.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/:amount')
  .get(person.createPeople);

module.exports = router;