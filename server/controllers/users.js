import bcrypt from "bcryptjs";
import jwt from "jwt";

import User from "../models/user.js";

export const sigin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "No user with this email" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const singup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).json({ message: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email: user.email, id: user._id }, "test", {
      expiresIn: "2h",
    });

    res.status(200).json({ result: user, token });
  } catch {
    res.status(500).json({ message: err.message });
  }
};
