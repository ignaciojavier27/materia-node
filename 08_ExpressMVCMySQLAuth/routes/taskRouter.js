import { Router } from "express";
import taskController from "../controllers/taskController.js";

const routes = Router();

routes.get("/", taskController.getAll);
routes.get("/add", taskController.getAddForm);
routes.post("/add", taskController.create);
routes.get("/edit/:id", taskController.getEditForm);
routes.post("/edit/:id", taskController.update);
routes.get("/complete/:id", taskController.complete);
routes.get("/uncomplete/:id", taskController.uncomplete);
routes.get("/delete/:id", taskController.delete);

export default routes;