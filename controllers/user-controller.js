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


const createUser = asyncHandler(async(req, res) => {
  const createUser = await Users.create({
    title: req.body.title,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirmation: req.body.passwordConfirmation,
  });

  res.status(200).json({
    message: "Dados enviados com sucesso!",
    data: createUser,
  });
});


const updateUser = (req, res) => {

  const id = request.params.id
  const { name, email, password, passwordConfirmation } = req.body

  req.status(200).json({ message: 'Dados Actualizados' })
};


const deleteUser = asyncHandler(async (req, res) => {

try{
  const user = await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Dados apagados com sucesso ${user}` });
}
catch(error){
  res.status(500).json({message: error})
}

});


module.exports = {getAllUser,getUser,createUser,updateUser,deleteUser }