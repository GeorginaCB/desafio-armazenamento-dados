const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Por favor, introduza seu título'],
  },
  name: {
    type: String,
    required: [true, 'Por favor, introduza seu nome'],
  },
  email: {
    type: String,
    required: [true, 'Por favor, introduza seu email'],
  },
  password: {
    type: String,
    required: [true, 'Por favor, introduza sua senha'],
  },
  passwordConfirmation: {
    type: String,
    required: [true, 'Por favor, confirme sua senha'],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', usersSchema);
