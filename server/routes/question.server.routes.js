const question = require('../controllers/question.server.controller'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(question.hello);
  
module.exports = router;