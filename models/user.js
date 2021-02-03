const mongoose =require("mongoose");
var bcrypt = require('bcrypt');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:[true,"please enter an password"],
    },
    resetToken:{
        type:String
    }
    ,
    expirein:{
        type:String
    }
    

})
userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})
const User=mongoose.model("user",userSchema);
module.exports=User;