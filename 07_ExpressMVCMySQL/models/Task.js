import db from "../config/db.js";

const Task = {
    getAll: async () => {
        try{
            const [tasks] = await db.query("SELECT * FROM tasks");
            return tasks;
        }catch(err){
            throw { status: 500, message: 'Error al cargar las tareas' }
        }
    },
    getOne: async (id) => {
        try {
            const [results] = await db.query("SELECT * FROM tasks WHERE id = ?", [id] )
            return results[0];
        } catch (err) {
            throw { status: 500, message: 'Error al cargar la tarea' }
        }
    },
    create: async (task) => {
        try{
            await db.query("INSERT INTO tasks (title) VALUES (?)", [task.title])
        }catch(err){
            throw { status: 500, message: 'Error al crear la tarea' }
        }
    },
    update: async (task) => {
        try{
            await db.query("UPDATE tasks SET title = ? WHERE id = ?", [task.title, task.id])
        }catch(err){
            throw { status: 500, message: 'Error al actualizar la tarea' }
        }
    },
    complete: async (id) => {
        try{
            await db.query("UPDATE tasks SET completed = ? WHERE id = ?", [true, id])
        }catch(err){
            throw { status: 500, message: 'Error al completar la tarea' }
        }
    },
    uncomplete: async (id) => {
        try{
            await db.query("UPDATE tasks SET completed = ? WHERE id = ?", [false, id])
        }catch(err){
            throw { status: 500, message: 'Error al finalizar la tarea' }
        }
    },
    delete: async (id) => {
        try{
            await db.query("DELETE FROM tasks WHERE id = ?", [id])
        }catch(err){
            throw { status: 500, message: 'Error al eliminar la tarea' }
        }
    }
}

export default Task;