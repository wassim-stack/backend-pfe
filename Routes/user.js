const Router = require('express').Router();
const userController = require("../controllers/userContoller")
const {verifyToken,verfiyTokenAndAuthorization} = require("./verifyToken")

//get All users
Router.get('/',userController.getAllUsers)
//get a user
Router.get('/:id',userController.getUser)
//updateUser 
Router.put('/:id',verfiyTokenAndAuthorization,userController.updateUser)
//delete profile
Router.delete('/:id',verfiyTokenAndAuthorization,userController.deleteUser)
//follow user
Router.put("/:id/follow",userController.followUser);
//unfollow a user 
Router.put("/:id/unfollow", userController.unfollowUser);
 
module.exports = Router