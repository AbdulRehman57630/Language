const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const createError = require('../units/appError');

exports.signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return next(new createError('Email already exists', 400));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: newUser._id }, 'secretkey123', {
      expiresIn: '90d',
    });

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(new createError('User not found', 404));

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return next(new createError('Invalid credentials', 401));

    const token = jwt.sign({ _id: user._id }, 'secretkey123', {
      expiresIn: '90d',
    });

    res.status(200).json({
      status: 'success',
      message: 'Logged in successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
exports.logout = async (req, res, next) => {
  try {
    
    
    res.status(200).json({
      status: 'success',
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};
