const express = require("express");
const app = express();

app.set("view engine", "ejs");

function handleIndexRequest(req, res) {
  res.render("home");
}

app.get("/", handleIndexRequest);
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
