const { Router}=require("express");
const authController=require("../controlers/authController")
 const router=new Router();
 router.get("/",authController.get_login)
 router.post("/",authController.post_login) 
 router.get("/signup",authController.get_signup) 
 router.post("/signup",authController.post_signup);
 router.get("/game",authController.game);
 router.get("/reset",authController.get_reset)
 router.post("/reset",authController.post_reset)
 router.get("/reset/:token",authController.get_resetpass)
 router.post("/reset/:token",authController.post_resetpass)


 module.exports=router;