const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()


const cnn = process.env.DB_CNN
const database = process.env.DATABASE


const dbConect = async () =>{
    try {
        await mongoose.connect( `${ cnn }/${ database }`, { } );
        console.log("DB Success!!!");
    } catch( err ){
        console.log( err );
        throw new Error('No se conecto a la base de datos');
    }
}

module.exports = {
   dbConection: dbConect
}