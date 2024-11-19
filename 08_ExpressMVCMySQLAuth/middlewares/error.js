const error = {
    e401 : ( req, res, err ) => {
        res.status(401);
        res.render("error.pug", { title: "Error 401 Not Authorized", message:err.message });
    },
    e403 : ( req, res, err ) => {
        res.status(401);
        res.render("error.pug", { title: "Error 403 Forbidden", message:err.message });
    },
    e404 : ( req, res ) => {
        res.status(404);
        res.render("error.pug", { title: "Error 404 Not Found", message:"Página no encontrada" });
    },
    e500 : ( req, res, err ) => {
        res.status(500);
        res.render("error.pug", { title: "Error 505 Internal Server", message: err.message })
    }
}

export default error;
