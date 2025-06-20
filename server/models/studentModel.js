import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  level: { type: String, required: true },
  age: { type: Number, required: true }, // ✅ Number
  gender: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String },
  education: { type: String },
  englishGoal: { type: String },
  learningStyle: { type: String }
});

export default mongoose.model('Student', studentSchema);
