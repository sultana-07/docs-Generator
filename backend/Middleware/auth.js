const jwt = require('jsonwebtoken');
const userModel = require('../Models/user.models');

// Middleware to authenticate user using JWT
const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id).select('-password'); // Exclude password from user object
        if (!req.user) {
            return res.status(404).json({ message: 'User not found' });
        }
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token', error: error.message });
    }
}

// Export the auth middleware
module.exports = authMiddleware;