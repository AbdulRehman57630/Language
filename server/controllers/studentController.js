import bcrypt from 'bcryptjs';

import Student from '../models/studentModel.js'; // Adjust path if needed

// Signup controller
export const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      level,
      age,
      gender,
      country,
      phone,
      education,
      englishGoal,
      learningStyle
    } = req.body;

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      level,
      age,
      gender,
      country,
      phone,
      education,
      englishGoal,
      learningStyle
    });

    await newStudent.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error during signup', error: err.message });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', student });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
};





