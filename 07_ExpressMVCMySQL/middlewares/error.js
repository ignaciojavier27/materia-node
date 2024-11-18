const error = {
    e404 : ( req, res ) => {
        res.status(404);
        res.render("error.pug", { title: "Error 404 Not Found", message:"Página no encontrada" });
    }
}

export default error;
