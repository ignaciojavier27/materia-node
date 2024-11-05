import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { getTaskById, getAllTasks, addTask, editTask, completeTask, uncompleteTask, deleteTask } from "./controllers/taskController.js";
import { error404 } from "./controllers/errorController.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/tasks", getAllTasks);
app.post("/tasks", addTask);
app.put("/tasks/:id", getTaskById);
app.put("/tasks/:id", editTask);
app.put("/tasks/complete/:id", completeTask);
app.put("/tasks/uncomplete/:id", uncompleteTask);
app.delete("/tasks/:id", deleteTask);

app.use(error404);

app.listen(port, () => {
    console.log(`API funcionando en http://localhost:${port}/tasks`);
})