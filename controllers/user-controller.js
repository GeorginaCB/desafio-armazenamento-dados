const asyncHandler = require("express-async-handler");
const User = require("../models/desafio-model"); 
const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  res.status(200).json(user);
});

const signup = asyncHandler(async (req, res) => {
  const { title, name, email, password, passwordConfirmation } = req.body;

  if (!title || !name || !email || !password || !passwordConfirmation) {
    return res.status(400).json({ message: "Os dados introduzidos não são válidos." });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "O endereço introduzido já está registado." });
  }

  const createUser = await User.create({
    title,
    name,
    email,
    password,
    passwordConfirmation,
  });

  res.status(201).json({
    message: "Utilizador Criado com Sucesso!",
    _id: createUser._id, 
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado." });
  }

  
  if (user.password !== password) {
    return res.status(401).json({ message: "A senha introduzida é inválida." });
  }

  res.status(200).json({
    message: "Login feito com Sucesso!",
    _id: user._id, 
  });
});

module.exports = { getAllUser, getUser, signup, login };
