const express = require("express");
const mongoose = require("mongoose");
const messageRoutes = require("./routes/message-routes");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(messageRoutes);

mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((res) => console.log('Connected to MongoDB'))
	.catch((err) => console.log(`DB connection error: ${err}`));

app.listen(process.env.PORT, (err) => {
	err ? console.log(err) : console.log(`listening port ${process.env.PORT}`);
});


