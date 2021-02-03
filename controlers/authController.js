const User = require("../models/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const Str = require('@supercharge/strings')
const nodemailer = require('nodemailer'); 
const pass=require("../config")
module.exports.get_login = (req, res) => {
  res.render("login");
};
const create_token = (id) => {
  return jwt.sign({ id }, "sourabh", {
    expiresIn: 86400,
  });
};
module.exports.post_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    await bcrypt.compare(password, user.password).then((auth) => {
      if (auth) {
        var token = create_token(user._id);
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ user: user._id });
      } else {
        res.json("wrong email or password");
      }
    });
  } catch (err) {
    res.send(err);
  }
};
module.exports.get_signup = (req, res) => {
  res.render("form");
};
module.exports.post_signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    var token = create_token(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.send(err.errors.password.properties.message);
  }
};
module.exports.game = (req, res) => {
  res.render("index1");
};
module.exports.get_reset = (req, res) => {
  res.render("getreset");
};

//reset password
module.exports.post_reset = async (req, res) => {
  const { email} = req.body;
  try {
    const user = await User.findOne({ email });
   if(user.email){
    const random = Str.random()  
     user.resetToken=random;
     user.expirein=Date.now()+(60*60);
     await user.save();
     let mailTransporter = nodemailer.createTransport({ 
      service: 'gmail', 
      auth: { 
          user: 'sourabh.kamboj@daffodilsw.com', 
          pass: pass.pass
      } 
  }); 
  let mailDetails = { 
    from: 'sourabh.kamboj@daffodilsw.com', 
    to: user.email, 
    subject: 'Test mail', 
    text: 'http://' + req.headers.host + '/reset/' + user.resetToken

}; 
  
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
    } else { 
        console.log('Email sent successfully'); 
    } 
});   
     res.json(user);
   }
   console.log(user)
  
  } catch (err) {
    res.send(err);
  }
};
// resetPasswordExpires: {$gt: Date.now()}})

module.exports.get_resetpass=(req,res)=>{
  res.render("reset")
}
module.exports.post_resetpass=async (req,res)=>{
  console.log(Date.now())
  console.log(Date.now()+60)

  const {password}=req.body;
  const resetToken=req.params.token;
  const user = await User.findOne({ resetToken });
  if(user){
    if(user.expirein<=Date.now()){
    // expirein:{$gt:Date.now()}
    user.password=password;
    user.resetToken=undefined;
    user.expirein=undefined;
    await user.save();
    let mailTransporter = nodemailer.createTransport({ 
      service: 'gmail', 
      auth: { 
          user: 'sourabh.kamboj@daffodilsw.com', 
          pass: pass.pass
      } 
  }); 
  let mailDetails = { 
    from: 'sourabh.kamboj@daffodilsw.com', 
    to: user.email, 
    subject: 'Test mail', 
    text: "Password updated successfully"

}; 
  
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 
    } else { 
        console.log('Email sent successfully'); 
    } 
});   
    res.send(user)
    }else{
      res.send("Forgot password token expired")
    }
  }
console.log(user)
  

  }
