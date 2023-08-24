const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.use((req, res) => {
  console.log(`Fetching ${req.url.split("?")[0]}`);
  express.static("dist")(req, res);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
