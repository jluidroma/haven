import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { CrearmascotaComponent } from './crearmascota/crearmascota.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AgregarsolicitudComponent } from './agregarsolicitud/agregarsolicitud.component';
import { AdministrarsolicitudComponent } from './administrarsolicitud/administrarsolicitud.component';


//se definen las rutas y el componente al cual va a llamar con esa ruta
const routes: Routes = [
  {path:"inicio", component: InicioComponent},
  {path:"mascotas/adopta", component: AdoptaComponent},
  {path:"mascotas/crearmascota", component: CrearmascotaComponent},
  {path:"administrar", component: AdministradorComponent},
  {path:"mascotas/editarmascota/:idMascota", component: CrearmascotaComponent},
  {path:"mascotas/agregarsolicitud/:idMascota", component: AgregarsolicitudComponent},
  {path:"administrar/listarsolicitudes", component:AdministrarsolicitudComponent},
  //{path:"administrar/editarsolicitud/:idSolicitud", component:EditarSolicitudComponent},
  //{path:"administrar/editarsolicitud/:idSolicitud", component: ActualizarSolicitudComponent},
  {path:"**", redirectTo:"/inicio",pathMatch:"full"}  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
