import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { error404 } from "./controllers/errorController.js";
import routesTasks from "./routes/taskRouter.js"


const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/|\/$/g, '').replace(/%5C/g, '\\'));
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routesTasks);
app.use(error404);

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
})