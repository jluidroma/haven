import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MascotaModel } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-adopta',
  templateUrl: './adopta.component.html',
  styleUrl: './adopta.component.css'
})

export class AdoptaComponent implements OnInit{
  title='Mascotas en adopción'
  //se trae las mascotas de la db
  mascotas: Observable<MascotaModel[]>| undefined;
  constructor (private mascotaService: MascotaService){}
  ngOnInit(){
    //se hace uso del metodo obtenermascotas creado en el servicio
    this.mascotas=this.mascotaService.obtenerMascotas();
  }
  eliminarMascota(idMascota:string){
    //el subscribe se utiliza en el caso que todo salga bien o de que haya un error
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
