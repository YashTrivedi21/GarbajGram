const User = require('../models/user');

// @desc  Get all stores
// @route GET /api/v1/users
// @access Public

exports.getUsers = async (req, res, next) => {
    try {
      const Users = await User.find();
  
      return res.status(200).json({
        success: true,
        count: Users.length,
        data: Users
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };