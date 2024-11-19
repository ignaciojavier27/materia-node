import express from "express";
import session from "express-session";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routesTasks from "./routes/taskRouter.js"
import routesUser from "./routes/userRouter.js"
import error from "./middlewares/error.js";
import { isAuthenticated } from "./middlewares/auth.js";


const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/|\/$/g, '').replace(/%5C/g, '\\'));
const app = express();
const port = 1234;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "secreta",
    resave: true,
    saveUninitialized: true
}));

app.use(routesUser);
app.use(isAuthenticated, routesTasks);
app.use(error.e404);

app.listen(port, () => {
    console.log(`Aplicación corriendo en http://localhost:${port}`);
})