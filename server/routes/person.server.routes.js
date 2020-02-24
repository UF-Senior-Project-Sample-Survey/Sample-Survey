const person = require('../controllers/person.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(person.hello);
  
module.exports = router;