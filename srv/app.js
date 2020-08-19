const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const orderRouter = require("./routes/orders");

const app = express();
const port = process.env.PORT || 5000;

//middlewres
app.use(express.json());
//routes
app.use("/orders", orderRouter);

//mongo db conn
const uri = process.env.ATLAS_URI;
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		createIndexes: true,
	})
	.catch(function () {
		console.log("DB connection error");
	});

mongoose.connection.once("open", () => {
	console.log(`MongoDB database connection established successfully`);
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
