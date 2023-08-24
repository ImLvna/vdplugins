const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  console.log(`Fetching ${req.url.split("?")[0]}`);
  next();
});
app.use(express.static("dist", { fallthrough: true }));
app.use(express.static("public", { fallthrough: true }));
// Handle 404
app.use((req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
