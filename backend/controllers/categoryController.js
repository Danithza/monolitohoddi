const CategoryModel = require("../models/categoryModel");

exports.getCategories = async (req,res)=>{
    const categories = await CategoryModel.getAll();
    res.json(categories);
};

exports.createCategory = async (req,res)=>{
    await CategoryModel.create(req.body);
    res.json({message:"Category created"});
};

exports.updateCategory = async (req,res)=>{
    const id = req.params.id;
    await CategoryModel.update(id,req.body);
    res.json({message:"Category updated"});
};

exports.deleteCategory = async (req,res)=>{
    const id = req.params.id;
    await CategoryModel.delete(id);
    res.json({message:"Category deleted"});
};