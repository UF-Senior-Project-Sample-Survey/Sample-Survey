const person = require('../controllers/person.server.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/')
  .get(person.hello);

router.route('/add')
  .post(person.addPerson);

router.route('/find/:id')
  .get(person.findById);

router.route('/add/random')
  .post(person.addRandom);

router.route('/all')
  .get(person.allPeople);

module.exports = router;