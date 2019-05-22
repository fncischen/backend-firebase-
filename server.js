const express = require("express");
const server = express();
const userRoutes = require("./routers/usersRoutes");

server.use("./users", userRoutes);
server.listen(5000, () => console.log("Welcome to our server"));