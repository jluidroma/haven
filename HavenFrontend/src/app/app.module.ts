import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { CrearmascotaComponent } from './crearmascota/crearmascota.component';
import { MascotaService } from './shared/mascota.service';
import { provideHttpClient } from '@angular/common/http';
import { SolicitudService } from './shared/solicitud.service';
import { AgregarsolicitudComponent } from './agregarsolicitud/agregarsolicitud.component';
import { AdministrarsolicitudComponent } from './administrarsolicitud/administrarsolicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AdoptaComponent,
    AdministradorComponent,
    CrearmascotaComponent,
    AgregarsolicitudComponent,
    AdministrarsolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MascotaService,
    SolicitudService,
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
