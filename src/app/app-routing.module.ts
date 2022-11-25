import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  { path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  { path: 'splash', redirectTo: 'splash', pathMatch: "full"},
  { path: '', redirectTo: 'splash', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
