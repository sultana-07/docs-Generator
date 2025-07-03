const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {  
    type: String,
    required: true,
    unique: true,
  },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
// Hash the password before saving the user
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
// Method to compare passwords
userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}
// Method to generate JWT token
userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
}
// Create the User model
const User = mongoose.model('User', userSchema);
// Export the User model
module.exports = User;
// This model can be used in the userController to handle user-related operations such as registration, login, and fetching user data.
// Ensure to handle errors and validations in the controller to provide a robust user management system.