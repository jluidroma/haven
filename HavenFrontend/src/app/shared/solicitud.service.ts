import { Injectable } from '@angular/core';
import { SolicitudModel } from './solicitud.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  BASE_URL='http://localhost:3000';
 
  constructor(private http: HttpClient) { 
  }
  
  //trae todas las solicitudes realizadas de mi base de datos
  obtenerSolicitudes(){
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitud/buscarsolicitudes`);
  }
  //buscar una solicitud por id
  obtenerSolicitud(idSolicitud:string){
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitud/buscarsolicitudid/${idSolicitud}`);
  }

  //agregar una solicitud
  //le pasamos como parametro un objeto solicitud de tipo Solicitudmodel
  agregarSolicitud(solicitud:SolicitudModel){
    return this.http.post<string>(`${this.BASE_URL}/solicitud/crearsolicitud/${solicitud.id_mascota}`,solicitud)
  }
  //actualizar solicitud
  actualizarSolicitud(solicitud:SolicitudModel){
    return this.http.put<string>(`${this.BASE_URL}/solicitud/actualizarsolicitud/${solicitud.id_solicitud}`,solicitud)
  }
  //eliminar solicitud
  eliminarSolicitud(idSolicitud:string){
    return this.http.delete<string>(`${this.BASE_URL}/solicitud/eliminarsolicitud/${idSolicitud}`)
  }
}
