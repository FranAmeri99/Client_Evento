import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EventosResourceService } from './api/resources/eventos-resource.service';
import { ActividadesEventoResolver, AsisitentesEventoResolver, DatosEventoResolver, ResolverService } from './api/resolvers/resolver.service';
import {MatCardModule} from '@angular/material/card';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { SplashComponent } from './pages/splash/splash.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AsistenteComponent } from './pages/asistente/asistente.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [ 
    HomeComponent, InscriptionComponent, ConfirmacionComponent, SplashComponent, AsistenteComponent, LoginComponent, 
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    EventosResourceService,
    ResolverService,
    DatosEventoResolver,
    ActividadesEventoResolver,
    AsisitentesEventoResolver
  ]
})
export class MainModule { }
