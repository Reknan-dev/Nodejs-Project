const Order = require("../models/Order");

getOrders = async (req, res, next) => {
  try {
    const queryObj = {};

    if (req.query.startDate && req.query.endDate) {
      queryObj.createdAt = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate),
      };
    }

   
    if (req.query.product) {
      queryObj.products = req.query.product;
    }
    const orders = await Order.find(queryObj).populate("products").populate("users");
    res.status(200).json({ orders });
  } catch (error) {
    console.log("Error while loading orders", error);
    res.status(500).json({ error: "Error while loading orders" });
  }
};

getSingleOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id)
      .populate("products")
      .populate("user");

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.log("Error while retrieving order", error);
    res.status(500).json({ error: "Error while retrieving order" });
  }
};

addOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      products: req.body.products,
      user: req.body.user,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order added successfully!", order: newOrder });
  } catch (error) {
    console.error("Error while adding order", error);
    res.status(500).json({ error: "Error while adding order" });
  }
};

updateOrder = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const order = await Order.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order updated successfully!", order });
  } catch (error) {
    console.error("Error while updating order", error);
    res.status(500).json({ error: "Error while updating order" });
  }
};

deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully!" });
  } catch (error) {
    console.error("Error while deleting order", error);
    res.status(500).json({ error: "Error while deleting order" });
  }
};

module.exports = {
  getOrders,
  getSingleOrder,
  addOrder,
  updateOrder,
  deleteOrder,
};
