const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const socket = require("socket.io");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

// app.use(
//   cors({
//     origin: "http://localhost:8080",
//     credentials: true,
//   })
// );

app.use(express.json());

app.use(cookieParser());

// app.use(express.static("../client/build"))

app.use("/api", routes);


db.sync({force: false})
  .then(function () {
    console.log("DB Connected");
    app.listen(PORT, () =>
      console.log(`Server listened at port ${PORT}`)
    );
  })
  .catch((error) => console.log("ERR", error));


// const io = socket(server, {
//   cors: {
//     origin: PORT,
//     credentials: true,
//   },
// });

// global.onlineUsers = new Map();

// io.on("connection", (socket) => {
//   global.chatSocket = socket;
//   socket.on("add-user", (userId) => {
//     onlineUsers.set(userId, socket.id);
//   });

//   socket.on("send-msg", (data) => {
//     const sendUserSocket = onlineUsers.get(data.to);
//     if (sendUserSocket) {
//       socket.to(sendUserSocket).emit("msg-recieve", data.message);
//     }
//   });
// });

// db.sync({ force: false })
//   .then(function () {
//     console.log("DB Connected");
//     app.listen(envs.PORT, () =>
//       console.log(`Server listened at port ${envs.PORT}`)
//     );
//   })
//   .catch((error) => console.log("ERR", error));
