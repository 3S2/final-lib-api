// IMPORTING THE APP MODULE
const app = require("./app");

// HERE LISTING FOR PORT
PORT = 4800;
app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
