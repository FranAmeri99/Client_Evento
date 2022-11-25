import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesEventoResolver, AsisitentesEventoResolver, DatosEventoResolver, ResolverService } from './api/resolvers/resolver.service';
import { AsistenteComponent } from './pages/asistente/asistente.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LoginComponent } from './pages/login/login.component';
import { SplashComponent } from './pages/splash/splash.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: { eventos: ResolverService} },
  { path: 'inscripcion/:idEvento', component: InscriptionComponent, resolve: { evento: DatosEventoResolver, actividades: ActividadesEventoResolver} },
  { path: 'confirmacion/:codigoConfirmacio', component: ConfirmacionComponent},
  { path: 'splash', component: SplashComponent},
  { path: 'login', component: LoginComponent},
  { path: 'asistente/:nro_evento', component: AsistenteComponent, resolve: { eventos: AsisitentesEventoResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
