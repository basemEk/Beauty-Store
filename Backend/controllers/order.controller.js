import Order from "../models/order.model.js"
import asyncHandler from "express-async-handler";

//CREATE ORDER
const createOrder = asyncHandler(async(req, res) => {
    const newOrder = Order(req.body);
    const savedOrder = await newOrder.save();

    if(!savedOrder) {
        res.status(400);
        throw new Error("Order was not created");
    } else {
        res.status(201).json(savedOrder);
    }
});


//UPDATE ORDER 
const updateOrder = asyncHandler(async(req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body},
        {new: true}
    );

    if(!updatedOrder) {
        res.status(400);
        throw new Error("Order was not updated");
    } else {
        res.status(200).json(updatedOrder);
    }
});


//DELETE ORDER
const deleteOrder = asyncHandler(async(req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if(!order) {
        res.status(400);
        throw new Error("Order was not deleted");
    } else {
        res.status(200).json(order);
    }
});


// GET USER'S ORDER
const getUserOrder = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.params.id }).exec();   //executes the Mongoose query and returns a real array of results. Not reverse before getting data ex: (await Order.find({ userId: req.params.id }).reverse())

  // Execute the query
  if (!orders || orders.length === 0) {
    res.status(404);
    throw new Error("No orders were found for this user.");
  } else {
    res.status(200).json(orders.reverse());    // Reverse the resulting array (from latest to oldest), after getting the data
  }
});


//GET ALL ORDERS
const getAllOrders = asyncHandler(async(req, res) => {
    const orders = await Order.find();

    if(!orders) {
        res.status(400);
        throw new Error("Orders not found, or something went wrong");
    } else {
        res.status(200).json(orders.reverse());
    }
})


export { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders };
