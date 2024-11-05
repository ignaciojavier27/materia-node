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
    res.json({
        tasks
    });
}

export const addTask = (req, res) => {
    let { title } = req.body;
    let id = tasks.length + 1;

    tasks.push({
        id,
        title,
        completed: false
    })

    res.json({ err: false, message: "Tarea agregada correctamente" });
}

export const getTaskById = (req, res) => {
    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(task => task.id === id);

    if(taskIndex === -1){
        res.status(404).json({ err: true, message: "Tarea no encontrada" })
    }else{
        res.json({ err: false, task: tasks[taskIndex] });
    }
}

export const editTask = (req, res) => {
    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex(task => task.id === id);

    if(taskIndex === -1){
        res.status(404).json({ err: true, message: "Tarea no encontrada" })
    }else{
        tasks[taskIndex].title = req.body.title;
        res.json({ err: false, message: "Tarea actualizada correctamente" });
    }
}

export const completeTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find( task => task.id === id);

    if(task){
        task.completed = true;
        res.json({ err: false, message: "Tarea completada correctamente" });
    }else{
        res.status(404).json({ err: true, message: "Tarea no encontrada" })
    }

}

export const uncompleteTask = (req, res) => {
    let id = parseInt(req.params.id);
    let task = tasks.find( task => task.id === id);

    if(task){
        task.completed = false;
        res.json({ err: false, message: "Tarea no completada correctamente" });
    }else{
        res.status(404).json({ err: true, message: "Tarea no encontrada" })
    }
}

export const deleteTask = (req, res) => {

    let id = parseInt(req.params.id);
    let taskIndex = tasks.findIndex( task => task.id === id);

    if(taskIndex === -1){
        res.status(404).json({ err: true, message: "Tarea no encontrada" })
    }else{
        tasks.splice(taskIndex, 1);
        res.json({ err: false, message: "Tarea eliminada correctamente" });
    }

}
