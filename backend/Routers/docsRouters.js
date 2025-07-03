const express = require('express');
const router = express.Router();
const authMiddleware = require('../Middleware/auth');
const {uploadDocument} = require('../Controllers/docs.controllers');
const {body} = require('express-validator');

router.post('/upload', 
    
     uploadDocument);
// Export the router
module.exports = router;
