const express = require("express");
const options = require("./options");
const userRouter = require("./users");
const frontendRouter = require("./frontend").default;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/users", userRouter);


app.set("view engine", "ejs");
app.use(express.static("./public"));
app.get("/", frontendRouter);


app.all("*", (req, res) => {
  res.status(404).send("URL not found");
});

app.listen(options.port, () => {
  console.log(`Backend runs on http://localhost:${options.port}`);
});