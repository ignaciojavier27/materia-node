import bcrypt from "bcrypt";
import db from "../config/db.js";

const User = {
    create: async ( user ) => {
        try {
            console.log(user);
            const hash = await bcrypt.hash(user.password, 10);
            const [results] = await db.query("INSERT INTO users (username, password) VALUES (?,?)", [user.username, hash]);
            return results;
        } catch (err) {
            throw{
                status: 500,
                message: 'Error al crear el usuario'
            }
        }
    },
    getOne: async ( username ) => {
        try {
            const [results] = await db.query("SELECT * FROM users WHERE username = ?", [username])
            return results;
        } catch (err) {
            throw { status:500, message: 'Error al cargar el usuario' }
        }
    }
}

export default User;