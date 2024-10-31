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

export const getAddTaskForm = (req, res) => {
    
}

export const addTask = (req, res) => {
    
}

export const getEditTaskForm = (req, res) => {
    
}

export const editTask = (req, res) => {

}

export const completeTask = (req, res) => {
    
}

export const uncompleteTask = (req, res) => {
    
}

export const deleteTask = (req, res) => {

}
