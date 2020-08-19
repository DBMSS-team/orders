const router = require("express").Router();
const Order = require("../../db/models/order.model");

// Get all Orders
router.route("/").get((req, res) => {
	Order.find()
		.then((order) => res.json(order))
		.catch((err) => res.status(400).json({ err }));
});

// Get specific Order
router.route("/:id").get(async (req, res) => {
	const id = req.params.id;
	try {
		const order = await Order.findById(id);
		if (order) res.json(order);
		else res.status(400).json({ msg: "Order Not Found!" });
	} catch (err) {
		res.status(400).json({ err });
	}
});

// Create new Order
router.route("/").post((req, res) => {
	const newOrder = new Order(req.body);
	newOrder
		.save()
		.then(() => res.json("Order added."))
		.catch((err) => res.status(400).json({ err }));
});

// Update a specific Order
router.route("/:id").put(async (req, res) => {
	const id = req.params.id;
	try {
		let updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
			new: true,
			useFindAndModify: false,
		});
		if (updatedOrder) res.json(updatedOrder);
		else res.status(400).json({ msg: "Order Not Found!" });
	} catch (err) {
		res.status(400).json({ err });
	}
});

// Delete a Order
router.route("/:id").delete(async (req, res) => {
	const id = req.params.id;
	try {
		const deletedOrder = await Order.findByIdAndDelete(id);
		if (deletedOrder) res.json(deletedOrder);
		else res.status(400).json({ msg: "Order Not Found!" });
	} catch (err) {
		res.status(400).json({ err });
	}
});

module.exports = router;
