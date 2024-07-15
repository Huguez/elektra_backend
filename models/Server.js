const express = require("express")
const cors = require("cors")
const userRoutes = require("../Routes/users")
const {dbConection} = require("../db/config")

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
      await dbConection()
   }

   routes(){
      this.app.use( this.apiPath["users"], userRoutes ) 
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