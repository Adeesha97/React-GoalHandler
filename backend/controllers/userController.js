const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')


// @desc    Register new User
// @route   Post /api/users
// @access  Public    
const registerUser = asyncHandler(async(req, res) => {
    res.json({message: 'Register User'})
})

// @desc    Authenticate a User
// @route   Post /api/users/login
// @access  Public    
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'Login User'})
})

// @desc    Get user date
// @route   Get /api/users/me
// @access  Private    
const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'User data display'})
})

module.exports = {
    registerUser, loginUser, getMe
}