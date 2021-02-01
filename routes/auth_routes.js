const { Router}=require("express");
const authController=require("../controlers/authController")
 const router=new Router();
 router.get("/",authController.get_login)
 router.post("/",authController.post_login) 
 router.get("/signup",authController.get_signup) 
 router.post("/signup",authController.post_signup);
 router.get("/game",authController.game)

 module.exports=router;