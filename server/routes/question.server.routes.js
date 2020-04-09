const question = require('../controllers/question.server.controller'),
  express = require('express'),
  router = express.Router()

router.route('/add')
  .post(question.addQuestion);

router.route('/all')
  .get(question.allQuestions);

router.route('/find/:id')
  .get(question.findById);

router.route('/delete/:id')
  .delete(question.deleteQuestion);

router.route('/update/:id')
  .post(question.updateQuestion);

module.exports = router;