let tasks = [
    {
        id: 1,
        title: "Tarea 1",
        completed: false
    },
    {
        id: 2,
        title: "Tarea 2",
        completed: true
    }
];

const taskController = {

    getAll : (req, res) => {
        res.render("index.pug", {
            title: "Lista de Tareas",
            tasks
        })
    },

    getAddForm : (req, res) => {
        res.render("add.pug", { title: "Agregar Tarea" })
    },
    
    create : (req, res) => {
        let { title } = req.body;
        let id = tasks.length + 1;
    
        tasks.push({
            id,
            title,
            completed: false
        })
    
        res.redirect("/")
    },
    
    getEditForm : (req, res) => {
        let id = parseInt(req.params.id);
        let task = tasks.find(task => task.id === id);
    
        (!task)
            ? res.redirect("/")
            : res.render("edit.pug", { title: "Editar Tarea", task })
    
    },
    
    update : (req, res) => {
        let id = parseInt(req.params.id);
        let taskIndex = tasks.findIndex(task => task.id === id);
    
        if(taskIndex === -1){
            res.redirect("/")
        }else{
            tasks[taskIndex].title = req.body.title;
            res.redirect("/")
        }
    },
    
    complete : (req, res) => {
        let id = parseInt(req.params.id);
        tasks[id - 1].completed = true;
        res.redirect("/")
    },
    
    uncomplete : (req, res) => {
        let id = parseInt(req.params.id);
        tasks[id - 1].completed = false;
        res.redirect("/")
    },
    
    delete : (req, res) => {
        let id = parseInt(req.params.id);
        tasks = tasks.filter(task => task.id !== id)
        res.redirect("/")
    }
}

export default taskController;


