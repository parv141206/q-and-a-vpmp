const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send({ message: "This is some crazy data" });
});
app.listen(5000, () => console.log(`listening on http://localhost:5000`));
