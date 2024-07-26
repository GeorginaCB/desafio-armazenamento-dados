const asyncHandler = require ("express-async-handler");
const Product = require("../models/desafio-model");



const getAllUser = asyncHandler(async (req, res) => {
  const users = await Users.find();

  res.status(200).json(users );
});

const getUser = asyncHandler(async (req, res) => {
  const {id} = req.params
  const users = await Users.findById(id);

  res.status(200).json( users );
});
const signup = asyncHandler(async(req, res) => {
    const { title, name, email, password, passwordConfirmation } = req.body;
    if (!title || !name || !email || !password || !passwordConfirmation) {
      return res.status(400).json({ message: "Os dados introduzidos não são válidos." });
    }
  });

  const existingEmail = await Users.findOne({ where: { email } });
  if (existingEmail) {
    return res.status(400).json({ message: "O endereço introduzido já está registado." });
  }
  const createEmail = await Users.create({
    title,
    name,
    email,
    password,
    passwordConfirmation,
  });

  res.status(201).json({
    message: "Utilizador Criado com Sucesso!",
    _id: createEmail.id, 
  });














module.exports = {getAllUser,getUser,createUser, }