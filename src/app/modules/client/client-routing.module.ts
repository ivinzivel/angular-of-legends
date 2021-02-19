import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainClientLayoutComponent } from 'src/app/layout/main-client-layout/main-client-layout.component';

const routes: Routes = [

  { path: '', component: MainClientLayoutComponent, children: [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'play', loadChildren: () => import('./play/play.module').then(m => m.PlayModule) },
    { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }

  ]},
  { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
