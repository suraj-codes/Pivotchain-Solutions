const express = require("express");
const cors = require("cors");
if (typeof localStorage === "undefined" || localStorage === null) {
  const LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send(localStorage.getItem("thiskey"));
});
app.listen(8000, () => {
  console.log("Listening at 8000");
});
