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

export const getAllTasks = (req, res) => {
    res.render("index.pug", {
        title: "Lista de Tareas",
        tasks
    })
}

export const addTask = (req, res) => {
    let { title } = req.body;
    let id = tasks.length + 1;

    tasks.push({
        id,
        title,
        completed: false
    })

    res.redirect("/")
}

export const editTask = (req, res) => {
    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(task => task.id === id);

    if(taskIndex === -1){
        res.redirect("/")
    }else{
        tasks[taskIndex].title = req.body.title;
        res.redirect("/")
    }
}

export const completeTask = (req, res) => {
    let id = parseInt(req.params.id);
    tasks[id - 1].completed = true;
    res.redirect("/")
}

export const uncompleteTask = (req, res) => {
    let id = parseInt(req.params.id);
    tasks[id - 1].completed = false;
    res.redirect("/")
}

export const deleteTask = (req, res) => {
    let id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id)
    res.redirect("/")
}
