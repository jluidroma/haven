import { routerMascotas } from "./rutas/mascotasRouter.js";
import { routerSolicitud } from "./rutas/SolicitudesRouter.js";
import {db} from "./database/conexion.js";
import cors from "cors";
import express from "express"
//Crear instancia de Express
const app = express();

//Cors
app.use(cors());
//Middleware JSON
app.use(express.json());

//Verificar Conexion Base Datos
db.authenticate().then(()=>{
    console.log(`la conexion a Base de datos es correcta`);
}).catch(err=>{
    console.log(`la conexion a Base de datos es incorrecta ${err}`);
}); 


//Definir Rutas
app.get('/', (req, res) => {
    res.send('Hola Sitio Principal');
});

//Llamar rutas de mascotas utlizando el midelware
app.use("/mascotas",routerMascotas);
app.use("/solicitud",routerSolicitud)

//Puerto de Servidor
const PORT=3000;

db.sync({force: true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Servidor Inicializado en el puerto ${PORT}`);
    })

}).catch(err=>{
    console.log(`Error al Sincronizar base de datos ${err}`);
}); 




