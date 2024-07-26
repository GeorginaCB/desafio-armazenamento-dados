const mongoose = require("mongoose");
const DB_URL = process.env.MOGO_URL; 

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URL);
    console.log(`Base de dados conectada: ${connect.connection.host}`);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error); 
  }
};

module.exports = connectDB;
