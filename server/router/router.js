const router = require('express').Router()
const controller = require('../controller/controller');
const auth = require('../middleware/auth')

router.post('/register', controller.registerUser);
router.post('/login', controller.login);
router.delete('/delete', auth, controller.delete);

module.exports = router;