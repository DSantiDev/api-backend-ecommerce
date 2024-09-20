const UserModel = require("../models/User.model");

const dbGetUserByUsername = async ( email ) => {
    return await UserModel.findOne({ username: email })
};

const dbRegisterUser = async ( newUser ) => {
    const dbUser = new UserModel( newUser );
    dbUser.password = 'nuevo-password';
    return await dbUser.save();
};


const dbLogin = async () => {
    return await UserModel.create();
};

const dbReNewToken = async () => {
    return await UserModel.create();
};
        
module.exports ={
    dbGetUserByUsername,
    dbRegisterUser,
    dbLogin,
    dbReNewToken
};
