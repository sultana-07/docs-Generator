const userModel = require('../Models/user.models.js');
const {validationResult } = require('express-validator');


// Function to register a new user

const registerUser = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: "register validation error" });
    }
    // Destructure user data from request body
    const { username, email, password } = req.body;
    console.log('Registering user:', { username, email, password });
    
    
    try {
        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', existingUser);
            
        return res.status(400).json({ message: 'User already exists' });

        }
    
        // Create new user
        const newUser = new userModel({ username, email, password });
        await newUser.save();
    
        // Generate JWT token
        const token = newUser.generateAuthToken();
    
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
    }

// Function to login a user
const loginUser = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: "login validation error" });
    }
    // Destructure email and password from request body
    const { email, password } = req.body;
    
    try {
        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        // Generate JWT token
        const token = user.generateAuthToken();
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
// Function to get user information
const getUser = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication
    
    try {
        // Find user by ID
        const user = await userModel.findById(userId).select('-password'); // Exclude password from response
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

// Export the functions
module.exports = {
    registerUser,
    loginUser,
    getUser
};