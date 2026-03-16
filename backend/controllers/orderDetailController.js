const OrderDetailModel = require("../models/orderDetailModel");

exports.getOrderDetails = async (req,res)=>{

    const id = req.params.orderId;

    const details = await OrderDetailModel.getByOrder(id);

    res.json(details);
};

exports.createOrderDetail = async (req,res)=>{

    await OrderDetailModel.create(req.body);

    res.json({message:"Order detail created"});
};