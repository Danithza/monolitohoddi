const PaymentModel = require("../models/paymentModel");

exports.getPayments = async (req,res)=>{

    const payments = await PaymentModel.getAll();

    res.json(payments);
};

exports.createPayment = async (req,res)=>{

    await PaymentModel.create(req.body);

    res.json({message:"Payment created"});
};