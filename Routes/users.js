const { Router } = require('express');
const { check } = require('express-validator')

const { validarCampos } = require("../middlewares/validarCompo")

const { login, register, logout, getUsers } = require("../controllers/users")

const router = Router();

router.get( '/users', getUsers );

router.post( '/login', login );

router.post( '/register',[
   check( "nombre", "El nombre es obligatorio" ).not().isEmpty(),
   check( "nombre", "El nombre debe de tener un máximo 40 caracteres" ).isLength( { max: 40 } ),
   check( "nombre", "El nombre no debe de llevar caracteres especiales" ).matches( /^[A-Z][a-z]{0,39}$/ ),
   
   check( "apellidoPaterno", "El apellido paterno es obligatorio" ).not().isEmpty(),
   check( "apellidoPaterno", "El apellido paterno debe de tener un máximo 40 caracteres" ).isLength( { max: 40 } ),
   check( "apellidoPaterno", "El apellido paterno no debe de llevar caracteres especiales" ).matches( /^[A-Z][a-z]{0,39}$/ ),
   
   check( "apellidoMaterno", "El apellido materno debe de tener un máximo 40 caracteres" ).isLength( { max: 40 } ),
   check( "apellidoMaterno", "El apellido materno no debe de llevar caracteres especiales" ).matches( /^[A-Z][a-z]{0,39}$/ ),
   
   check( "telefono", "El tenefono es obligatorio" ).not().isEmpty(),
   check( "telefono", "El telefono debe de tener un máximo 10 caracteres" ).isLength( { max: 10 } ),
   check( "telefono", "El telefono No debe de llevar caracteres especiales" ).matches( /^\d{1,10}$/ ),
   
   check( "email", "El e-mail NO es valido" ).not().isEmail(),
   check( "email", "El e-mail debe de tener un máximo 40 caracteres" ).isLength( { max: 40 } ),

   check( "nickname", "El nickname es obligatorio" ).not().isEmpty(),
   check( "nickname", "El nickname debe de tener un máximo 30 caracteres" ).isLength( { max: 30 } ),
   check( "nickname", "El nickname NO debe de llevar caracteres especiales" ).matches( /^[a-zA-Z0-9 ]{1,30}$/ ),

   check( "password", "El password debe de ser obligatorio" ).not().isEmpty(),
   check( "password", "El password debe de tener un máximo 20 caracteres" ).isLength( { max: 20 } ),

   validarCampos,
], register );

router.delete( '/logout', logout );

module.exports = router;