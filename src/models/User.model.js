const { Schema, model } = require( 'mongoose' );

const UserSchema = new Schema({
    name: {                 
        type: String,       
        required: true
    },  
    username: {                
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'registered'
    }

}, {
    timestamps: true
});


const UserModel = model( 
    'users',    
    UserSchema
);


module.exports = UserModel;      
