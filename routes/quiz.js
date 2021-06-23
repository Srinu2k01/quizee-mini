var express = require( 'express' );
var router = express.Router();
var quizLib = require( '../bin/Backend/lib/quiz' );
const {body, validationResult, check} = require( 'express-validator' );


router.post( '/quiz/create', quizLib.createQuiz );
router.get( '/quiz/:quizCode', quizLib.getQuiz );

module.exports = router;