import Contact from "../models/contactModel.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const existingUser = await Contact.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error during contact submission",
      error: error.message,
    });
  }
};
