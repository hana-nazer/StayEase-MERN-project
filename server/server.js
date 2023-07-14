// Import the Express framework and create an instance of the app
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const ownerRouter = require("./routes/ownerRoutes");
const adminRouter = require("./routes/adminRoutes");
const http = require("http");
const httpServer = http.createServer(app);
const chatConfig = require("./config/configChat");

require("dotenv").config();

const dbConfig = require("./config/dbConfig");

// Enable JSON parsing for incoming requests
app.use(express.json());

// Enable CORS for incoming requests
app.use(
  cors({
    credentials: process.env.CORS_CREDENTIALS === "true",
    origin: process.env.CORS_ORIGIN,
  })
);

// Route incoming requests to the appropriate router
app.use("/", userRouter);
app.use("/owner", ownerRouter);
app.use("/admin", adminRouter);

chatConfig(httpServer);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
