const mongoose = require('mongoose');
const product = require('../../../products/db/product.model');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
	{
		user_id: { type: String, required: true },
		payment_id: { type: String, required: true },
		billing_add_id: { type: String, required: true },
		shipping_add_id: { type: String, required: true },
		amount: { type: Decimal128, required: true },
		status_id: { type: String, required: true },
		products: [product.productSchema],
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
