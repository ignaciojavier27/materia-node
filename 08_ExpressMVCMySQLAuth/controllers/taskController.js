import error from "../middlewares/error.js";
import Task from "../models/Task.js";

const taskController = {

    getAll : async (req, res) => {
        try {
            let tasks = await Task.getAll();
            console.log(tasks)
            res.render("index.pug", { titulo: "Lista de Tareas", tasks })
        } catch (err) {
            error.e500( req, res, err );
        }
    },

    getAddForm : (req, res) => {
        res.render("task-add.pug", { title: "Agregar Tarea" })
    },
    
    create : async (req, res) => {
        
        try {            
            let { title } = req.body;
            await Task.create({ title });
            res.redirect("/")
        } catch (error) {
            error.e500( req, res, err );
        }

    },
    
    getEditForm : async (req, res) => {

        try {
            let id = parseInt(req.params.id);
            let task = await Task.getOne(id);
        
            (!task)
                ? error.e404( req, res )
                : res.render("task-edit.pug", { title: "Editar Tarea", task })
        } catch (err) {
            error.e500( req, res, err );
        }
    
    },
    
    update : async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            let title = req.body.title;

            await Task.update({id, title});
            res.redirect("/")
        } catch (err) {
            error.e500( req, res, err );
        }
    
    },
    
    complete : async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            
            await Task.complete(id);
            res.redirect("/")
        } catch (err) {
            error.e500( req, res, err );
        }
    },
    
    uncomplete : async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            
            await Task.uncomplete(id);
            res.redirect("/")
        } catch (err) {
            error.e500( req, res, err );
        }
    },
    
    delete : async (req, res) => {
        try {
            let id = parseInt(req.params.id);
            
            await Task.delete(id);
            res.redirect("/")
        } catch (err) {
            error.e500( req, res, err );
        }
    }
}

export default taskController;


