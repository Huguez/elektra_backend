const { Request, Response } = require( "express" );


const login = async ( req = Request, res = Response ) => {
   try {
      const { email, telefono, password } = req.body

      

      return res.status( 200 ).json( {user: ""} )
   } catch (error) {
      console.log( error );
      return res.status( 500 ).json( error )
   }
}


const register = async ( req = Request, res = Response ) => {
   try {
      const body = req.body

      return res.status( 200 ).json( { user: body } )
   } catch ( error ) {
      console.log( error );
      return res.status( 500 ).json( error )
   }
}


const logout = async ( req = Request, res =  Response) => {
   try {
   } catch (error) {
      console.log( error );
      return res.status( 500 ).json( error )
   }
}

const getUsers = async ( req = Request, res =  Response) => {
   try {

      return res.status( 200 ).json( { user: [] } )
   } catch (error) {
      console.log( error );
      return res.status( 500 ).json( error )
   }
}

module.exports = {
   login,
   register,
   logout,
   getUsers,
}