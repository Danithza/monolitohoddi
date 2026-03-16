const ProductModel = require("../models/productModel");

exports.getProducts = async (req,res)=>{
    const data = await ProductModel.getAll();
    res.json(data);
};

exports.createProduct = async (req,res)=>{
    await ProductModel.create(req.body);
    res.json({message:"Product created"});
};

exports.updateProduct = async (req,res)=>{
    await ProductModel.update(req.params.id,req.body);
    res.json({message:"Product updated"});
};

exports.deleteProduct = async (req,res)=>{
    await ProductModel.delete(req.params.id);
    res.json({message:"Product deleted"});
};