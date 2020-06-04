const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'please enter username'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'please enter email'],
      unique: [true, 'email registered. please use a new one']
    },
    passwordHash: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

 module.exports = model('User', userSchema);
