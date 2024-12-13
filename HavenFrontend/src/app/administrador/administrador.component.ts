import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})


export class AdministradorComponent implements OnInit{
  title='Mascotas en adopción'
  //trae las mascotas creadas en nuestra db
  mascotas: Observable<MascotaModel[]>| undefined;
  constructor (private mascotaService: MascotaService){}
  ngOnInit(){
    //se usa el metodo obtenerMascotas creado en el servicio
    this.mascotas=this.mascotaService.obtenerMascotas();
  }
  eliminarMascota(idMascota:string){
    
    this.mascotaService.eliminarMascota(idMascota).subscribe({
      next: data=>{
        console.log(`Registro Eliminado`);
        this.ngOnInit();
      },
      error: err=>{
        console.log(`Error al eliminar Registro ${err}`);
      }
    });
  }
}
