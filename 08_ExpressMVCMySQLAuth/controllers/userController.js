import bcrypt from "bcrypt";
import error from "../middlewares/error.js";
import User from "../models/User.js";

const userController = {
    getLoginForm: ( req, res ) => {
        res.render("login.pug")
    },
    login: async( req, res ) => {
        try {
            const { username, password } = req.body;
            const results = await User.getOne( username );

            if(results.length === 0){
                let err = {
                    status: 401,
                    message: "El usuario no fue encontrado en la base de datos"
                }
                error.e401( req, res, err );
            }

            let user = results[0];
            let isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                let err = {
                    status: 403,
                    message: "Contraseña incorrecta"
                }

                error.e403( req, res, err );
            }

            req.session.user = user;
            res.redirect("/");

        } catch (err) {
            error.e500( req, res, err );
        }
    },
    getSigninForm: ( req, res ) => {
        res.render("signin.pug")
    },
    signin: async ( req, res ) => {
        try {
            const { username, password } = req.body;
            await User.create({ username, password });
            res.render("signin.pug", { newUser: true, username })
        } catch (err) {
            error.e500( req, res, err );
        }
    },
    logout: ( req, res ) => {
        req.session.destroy();
        res.redirect("/login");
    },
};

export default userController;