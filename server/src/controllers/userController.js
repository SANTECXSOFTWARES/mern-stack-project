const Users = require("../models/users");
const bcrypt = require("bcryptjs");


const createUser = async (req, res) => {
  const { userName, email, password, phone } = req.body;
  const signUpUser = new Users({ userName, email, password, phone });
  let myToken = await signUpUser.getAuthToken();
  signUpUser
    .save()
    .then((data) => {
      res.status(200).json({message : "OK", token : myToken});
    })
    .catch((error) => {
      res.json(error);
    });
};

const getUser = async (req, res) => {
  let data = await Users.find();
  res.json(data);
};

const login = async (req,res,next) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(301).json({message:"Error", message:"Please select Email/Password"})
    }
   let user = await Users.findOne({email: email});
   const responseType ={
       message: "OK"
   }
   if(user){
    let match = await bcrypt.compare(password, user.password)
    if(match){
        let myToken = await user.getAuthToken();
        responseType.message = "Login Successfully";
        responseType.token = myToken;

    }else{
        responseType.message = "Invalid Password";
    }
   }else{
    responseType.message = "Invalid Email Id";
}
    res.status(200).json({message:"OK", data: responseType})
}

module.exports = {
  createUser,
  getUser,
  login
};
