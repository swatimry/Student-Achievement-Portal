const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
const cert=require("./routes/cert.js");
app.use("/api/v1", user);
app.use("/api/v1",cert);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})