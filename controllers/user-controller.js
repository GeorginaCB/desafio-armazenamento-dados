const asyncHandler = require ("express-async-handler");
const User = require("../models/desafio-model");



const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users );
});

const getUser = asyncHandler(async (req, res) => {
  const {id} = req.params
  const users = await User.findById(id);

  res.status(200).json( users );
});
const signup = asyncHandler(async(req, res) => {
    const { title,
       name, 
       email, 
       password, 
       passwordConfirmation } = req.body;
    if (!title || !name || !email || !password || !passwordConfirmation) {
      return res.status(400).json({ message: "Os dados introduzidos não são válidos." });
    }
  });
  const existingSignup = await Users.findOne({ where: { email } });
  if (existingEmail) {
    return res.status(400).json({ message: "O endereço introduzido já está registado." });
  }
  const createSignup = await Users.create({
    title,
    name,
    email,
    password,
    passwordConfirmation,
  });
  res.status(201).json({
    message: "Utilizador Criado com Sucesso!",
    _id: createSignup.id, 
  });

const login = asyncHandler(async(req, res) => {
    const { title,
       email, 
       password, 
     } = req.body;
    if (!title|| !email || !password) {
      return res.status(404).json({ message: "O utilizador não foi encontrado!" });
    }
  });
  const existingEmail = await Users.findOne({ where: { email } });
  if (existingEmail) {
    return res.status(401).json({ message: "A password introduzida é inválida!" });
  }
  const createEmail = await Users.create({
    title,
    email,
    password,
    });
  res.status(200).json({
    message: "login feito com Sucesso!",
    _id: createEmail.id, 
  });



  













module.exports = {getAllUser,getUser,createUser, }