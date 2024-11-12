import express from "express";
import path from "path";
import morgan from "morgan";
import fs from "fs/promises";
import MarkdownIt from "markdown-it";
import fm from "front-matter";
import cookieParser from "cookie-parser";


const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/|\/$/g, '').replace(/%5C/g, '\\'));

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

// Rutas dinámicas desde archivos en la carpeta "pages"
const pagesDir = path.join(__dirname, "pages");
const files = await fs.readdir(pagesDir);

for (let file of files) {
    const filePath = path.join(pagesDir, file);
    let extname = path.extname(file);

    if (extname === ".md" || extname === ".html" || extname === ".pug"){
        let fileName = path.basename(file, extname);
        
        app.get(`/${fileName}`, async (req, res) => {
            try{
                if(extname === ".pug"){
                    res.render(fileName);
                }

                if(extname == ".html"){
                    res.sendFile(filePath);
                }

                if(extname == ".md"){
                    let fileContent = await fs.readFile(filePath, "utf-8");
                    let { attributes: frontMatterAttributes, body } = fm(fileContent);
                };

            }catch(err){
                res.status(404).render("error-404");
            }
        })
    }
}


app.get("/", (req, res) => {
    res.render("index");
});

app.use((req, res) => {
    res.status(404).render("error-404");
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})
