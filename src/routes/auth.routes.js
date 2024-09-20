const express = require( 'express' );
const router = express.Router();

const { register, login, reNewToken } = require('../controllers/auth.controller');

router.post( '/register', register);
router.post( '/login', login);
router.get( '/re-new-token', reNewToken);



module.exports = router;
