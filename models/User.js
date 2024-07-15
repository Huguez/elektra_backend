const { Schema, model } = require("mongoose")

const User = Schema({
   nombre: {
      type: Schema.Types.String,
      required: true
   },
   apellidoPaterno: {
      type: Schema.Types.String,
      required: true
   },
   apellidoMaterno: {
      type: Schema.Types.String,
      required: false,
      default: "N/A",
   },
   telefono: {
      type: Schema.Types.String,
      required: true
   },
   nickname: {
      type: Schema.Types.String,
      required: true
   },
   email: {
      type: Schema.Types.String,
      required: false,
      default: "N/A",
   },
   password: {
      type: Schema.Types.String,
      required: true
   }
}, { 
   timestamps: true,
} )

User.method( "toJSON", function( doc, ret ){
   const { __v, _id, password, ...obj } = this.toObject()
   obj.uid = _id
   return obj
} )

module.exports = model( "User", User )