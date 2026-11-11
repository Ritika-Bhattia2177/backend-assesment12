

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");


const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);


app.get("/", (req, res) => {
    res.send("Backend is running successfully");
});

const startServer = async () => {
    await connectDB();

    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
};

startServer();