const express = require('express');
const { validationResult } = require('express-validator');
const { signup, signin, requireSignin } = require('../../controller/auth');  
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);

router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);

// router.post('/profile', requireSignin,  (req, res) => {
//     res.status(200).json({user: 'profile'})
// })

module.exports = router;