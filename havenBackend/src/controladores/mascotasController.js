import { mascotas } from "../modelos/mascotaModelo.js";

//Crear un recurso Mascota
const crear = (req,res)=>{

    //Validar 
     if(!req.body.nombre){
          res.status(400).send({ mensaje: "El campo nombre está vacio."});
          return;
     }
     if (!req.body.sexo) {
          return res.status(400).send({ mensaje: "El campo sexo se encuentra vacío." });
     }    
     if (!req.body.raza) {
          return res.status(400).send({ mensaje: "El campo raza está vacía." });
     }
     const dataset={
          nombre: req.body.nombre,
          sexo: req.body.sexo,
          raza: req.body.raza,
          edad: req.body.edad,
          imagen: req.body.imagen,
          estado_adopcion: req.body.estado_adopcion
     }

//Usuar Sequelize para crear el recurso en la base de datos
     mascotas.create(dataset).then((resultado)=>{
          res.status(200).json({
               mensaje: "El registro se ha completado de manera exitosa"
          });
     }).catch((err)=>{
          res.status(500).json({
               mensaje: `El registro de Mascota no ha sido exitoso ::: ${err}`
          });
     });
}

//Buscar Mascotas
const buscar= (req,res)=>{
mascotas.findAll().then((resultado)=>{
     res.status(200).json(resultado);
}).catch((err)=>{
     res.status(500).json({
          mensaje:`No se encontraron registros ::: ${err}`
     });
});
}


//buscar por ID
const buscarId= (req,res)=>{

const id=req.params.id;
if(id==null){
     res.status(400).json({
          mensaje: "El id no puede estar vacio"
     });
     return;
}
else{
     mascotas.findByPk(id).then((resultado)=>{
          res.status(200).json(resultado);
     }).catch((err)=>{
          res.status(500).json({
               mensaje:`No se encontraron registros ::: ${err}`
          });
     });

}

}



//Actualizar Mascota
const actualizar=(req,res)=>{
const id=req.params.id;
if(!req.body.nombre && !req.body.nombre){
     res.status(400).json({
          mensaje: "No se encontraron Datos para Actualizar"
     });
     return;

}
else{
     const nombre= req.body.nombre
     const sexo= req.body.sexo;
     const raza= req.body.raza;
     const edad= req.body.edad;
     const imagen= req.body.imagen;
     const estado_adopcion= req.body.estado_adopcion
     mascotas.update({nombre,sexo,raza,edad,imagen,estado_adopcion},{where:{id}}).then((resultado)=>{
          res.status(200).json({
               tipo: 'success',
               mensaje: "Registro Actualizado"
          });

     }).catch((err)=>{
          res.status(500).json({
               tipo: 'error',
               mensaje: `Error al actualizar Registro ::: ${err}`
          });

     });
}


}

//Eliminar Mascota
const eliminar = (req, res) => {
     const id = req.params.id;

// Verificar si se proporcionó un ID
if (!id) {
     return res.status(400).json({
          tipo: "error",
          mensaje: "Debe ingresar un ID válido",
     });
}

// Lógica para eliminar el registro de la base de datos
mascotas.destroy({ where: { id: id } })
     .then((result) => {
          if (result === 0) {
               return res.status(404).json({
                    tipo: 'error',
                    mensaje: `No se encontró un registro con id ${id}`
               });
          }

          res.status(200).json({
               tipo: 'success',
               mensaje: `Registro con id ${id} eliminado correctamente`,
          });
     })
     .catch((err) => {
          res.status(500).json({
               tipo: 'error',
               mensaje: `Error al eliminar el registro: ${err.message}`,
          });
     });
};



export {crear,buscar,buscarId,actualizar,eliminar}