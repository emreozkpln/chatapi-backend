const express = require('express');
const cors = require('cors');
require("dotenv").config();
const textRouter = require('./routes/textRouter');

const port = 3001
const app = express();

app.use(cors())
app.use(express.json());
app.use("/text", textRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})