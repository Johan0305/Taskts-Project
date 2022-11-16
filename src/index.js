const express = require("express");
const morgan = require("morgan");
const taskRouters = require("./routes/tasks.routes");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/task", taskRouters);

app.listen(3000);
console.log("Server ON PORT 3000");
