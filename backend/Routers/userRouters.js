const express = require('express');
const router = express.Router();
const {getUser, registerUser, loginUser} = require('../Controllers/user.controllers');
const authMiddleware = require('../Middleware/auth');
const {body } = require('express-validator');


// Route to register a new user
router.post('/register',
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    registerUser); 
// Route to login a user
router.post('/login',
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
    loginUser);
// Route to get user information
router.get('/user',authMiddleware, getUser);

// Export the router
module.exports = router;