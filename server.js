const express = require("express");
const app = express();

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.listen(4000, () => console.log("app is running on port 4000"));
