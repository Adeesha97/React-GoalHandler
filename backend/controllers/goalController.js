// @desc    Get goals
// @route   Get /api/goals
// @access  Private    
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals!'})
}

// @desc    Set goal
// @route   Post /api/goals
// @access  Private    
const setGoal = (req, res) => {
    res.status(200).json({message:'set Goals'})
}

// @desc    Update goal
// @route   Put /api/goals/:id
// @access  Private    
const updateGoal = (req, res) => {
    res.status(200).json({message:`update goals ${req.params.id}`})
}

// @desc    Delete goal
// @route   Delete /api/goals/:id
// @access  Private    
const deleteGoal = (req, res) => {
    res.status(200).json({message:`delete goals ${req.params.id}`})
}

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}