const express = require("express")
const cors = require("cors")

class Server {
   
   apiPath = {
      users: "/api/users"
   }

   constructor() {
      this.port = process.env.PORT
      this.app = express()

      this.middlewares()

      this.routes()

      this.connectDB()
   }

   async connectDB(){

   }

   routes(){
   }

   middlewares(){
      this.app.use( cors() )
   
      this.app.use( express.static( 'public' ) )

      this.app.use( express.json() )
   }

   start(){
      this.app.listen( this.port, () => {
         console.log( `servidor corriendo en http://localhost:${ this.port }/` )

      } )
   }
}

module.exports = Server;