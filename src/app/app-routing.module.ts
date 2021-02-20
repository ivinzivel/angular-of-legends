import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'client', loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
