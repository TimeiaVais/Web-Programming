const Router = require("express").Router;
const bookController = require("./controller");

const userRouter = new Router();

userRouter.get("/", bookController.getAll);
userRouter.get("/:id", bookController.getById);
userRouter.delete("/:id", bookController.delete);
userRouter.post("/", bookController.post);
userRouter.patch("/:id", bookController.patch);

module.exports = userRouter;