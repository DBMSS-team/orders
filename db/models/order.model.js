const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		user_id: { type: String, required: true },
		payment_id: { type: String, required: true },
		billing_add_id: { type: String, required: true },
		shipping_add_id: { type: String, required: true },
		amount: { type: mongoose.Types.Decimal128, required: true },
		status_id: { type: String, required: true },
		products: [
			{
				product_id: { type: String },
				// quantity need to be included(Dicusss)
			},
		],
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
