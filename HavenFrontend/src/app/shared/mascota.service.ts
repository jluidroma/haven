import { Injectable } from '@angular/core';
import { MascotaModel } from './mascota.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  //se crea una variable base para evitar que el codigo quede mas limpio
  BASE_URL='http://localhost:3000';
  //se le pasa un parametro http de tipo httClient
  //proporciona las capacidades para conectarse al backend
  constructor(private http: HttpClient) {}
  //aqui se definen los metodos para acceder conectarse y consumir mi la parte del lado del servidor
  //trae todas las mascotas de mi base de datos creada en el backend
  obtenerMascotas(){
      return this.http.get<MascotaModel[]>(`${this.BASE_URL}/mascotas/buscarmascotas`);
  }
  //buscar una mascota por id
  obtenerMascota(idMascota:string){
    return this.http.get<MascotaModel>(`${this.BASE_URL}/mascotas/buscarmascotaid/${idMascota}`);
  }

  //agregar una mascota
  agregarMascotas(mascota:MascotaModel){
    return this.http.post<string>(`${this.BASE_URL}/mascotas/crearmascota`,mascota)
  }
  //actualizar mascota
  actualizarMascota(mascota:MascotaModel){
    return this.http.put<string>(`${this.BASE_URL}/mascotas/actualizarmascota/${mascota.id}`,mascota)
  }
  //eliminar mascota
  eliminarMascota(idmascota:string){
    return this.http.delete<string>(`${this.BASE_URL}/mascotas/eliminarmascota/${idmascota}`)
  }
}
