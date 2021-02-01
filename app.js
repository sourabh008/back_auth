const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());
const { requireAuth } =require("./middleware/checkAuth")
app.set('view engine','ejs');
mongoose.connect("mongodb://localhost:27017/kamboj",{useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true},(err,db)=>{
    if(err){
        console.log(err);
    }else{
        app.listen(3000,(err,res)=>{
            console.log("working")
        })
    }
    });
const routes=require("./routes/auth_routes")

app.get('/game', requireAuth, (req, res) => res.render('index1'));
app.use(routes)
