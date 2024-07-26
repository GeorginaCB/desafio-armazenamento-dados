const mongoose = require("mongoose");
const usersSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Por favor, introduza seus dados"],
    },
    name: {
        type: String,
        required: [true, "Por favor, introduza seu nome"],
      },
      email: {
      type:String,
      required: [true, "Por favor, introduza seu email"],
    },
    password: {
      type: String,
      required: [true, "Por favor, introduza sua palavra passe"],
    },
    passwordConfirmation: {
      type: String,
      required: [true, "Por favor, confirme sua palavra passe"],
    },
  
    timestamps: true,
  }
);
module.exports = mongoose.model("User", usersSchema);
