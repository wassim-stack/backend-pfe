const Router = require('express').Router();
const categoryController = require("../controllers/categoryController")

//insert a new category
Router.post('/',categoryController.addCategory)
//Update category
Router.put('/:id',categoryController.updateCategory)
//delete category
Router.delete('/:id',categoryController.deleteCategory)
//get all categories
Router.get("/",categoryController.getCategories)
//get category
Router.get('/:id',categoryController.getCategory)


module.exports = Router