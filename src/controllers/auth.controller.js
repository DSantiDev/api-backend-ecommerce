const UserModel = require("../models/User.model");
const { dbRegisterUser, dbLogin, dbReNewToken, dbGetUserByUsername } = require("../services/auth.service");

async function register(req, res) {
    const inputData = req.body;
    
    const userFound = await dbGetUserByUsername( inputData.username );
    
    if ( userFound ) {
        return res.status(500).json({
            ok: false,
            msg: 'El usuario ya existe'
        })
    }
    try {
        const data = await dbRegisterUser( inputData );
        res.json({
            ok: true,
            data
        }); 
    } catch (error) {
        console.error( error );
        res.status(500).json({
            ok: false,
            msg: 'Error al crear un usuario',
        });
    }
   

}

function login(req, res) {
    res.json({
        ok: true,
        msg: 'Autentica un usuario'
    });
}

function reNewToken(req, res) {
    res.json({
        ok: true,
        msg: 'Renueva las credenciales (Token)'
    });
}


module.exports = {
    register,
    login,
    reNewToken
}