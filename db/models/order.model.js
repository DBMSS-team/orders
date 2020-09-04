const mongoose = require("mongoose");
const addressSchema = require('../../../users/db/models/user.model').addressSchema;

const orderSchema = new mongoose.Schema(
	{
		user_id: { type: String, required: true },
		payment_id: { type: String, required: true },
		billing_address: { type: addressSchema, required: true },
		shipping_address: { type: addressSchema, required: true },
		amount: { type: mongoose.Types.Decimal128, required: true },
		status_id: { type: String, required: true },
		products: [
			{
				product_id: { type: String },
				store_id: { type: String },
				price: { type: mongoose.Types.Decimal128 },
				quantity: { type: Number }
			},
		],
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
