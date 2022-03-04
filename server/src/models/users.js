const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function (next) {
  const salt = bcrypt.genSaltSync(10);
  if (this.password && this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, salt);
  } 
  next();
});

userSchema.methods.getAuthToken = async function (data) {
  let params = {
    id:this._id,
    email: this.email,
    phone: this.phone,
  };
  let tokenValue = jwt.sign(params, process.env.SECRATE_KEY,{expiresIn: '300000s'});
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};

module.exports = mongoose.model("users", userSchema);
