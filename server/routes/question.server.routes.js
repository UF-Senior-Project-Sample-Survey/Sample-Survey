const question = require('../controllers/question.server.controller'),
  express = require('express'),
  router = express.Router()

router.route('/add')
  .post(question.addQuestion);

router.route('/all')
  .get(question.allQuestions);

router.route('/find/:id')
  .get(question.findById);

//TODO: Test/example Route. Test it in a better manner and remove this
router.route('/getAnAnswer/:id')
  .get(question.selectRandomAnswer);
module.exports = router;