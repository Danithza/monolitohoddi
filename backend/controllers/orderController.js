const OrderModel = require("../models/orderModel");

exports.getOrders = async (req,res)=>{
    const orders = await OrderModel.getAll();
    res.json(orders);
};

exports.createOrder = async (req,res)=>{
    await OrderModel.create(req.body);
    res.json({message:"Order created"});
};

exports.updateOrderStatus = async (req,res)=>{
    const id = req.params.id;
    const {estado} = req.body;

    await OrderModel.updateStatus(id,estado);

    res.json({message:"Order updated"});
};