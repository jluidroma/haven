import Sequelize  from "sequelize";
//creamos la conexion, y le pasamos como argumentos nombre de la DB, usuario y su contraseña
const db = new Sequelize("havendb","havenUser","12345678",{
     dialect: "mysql",
     host: "localhost"
});

export {db}