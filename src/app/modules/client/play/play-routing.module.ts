import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { PlayMenuComponent } from './play-menu/play-menu.component';
import { PvpComponent } from './pvp/pvp.component';

const routes: Routes = [

  { path: '', component: PlayMenuComponent, children: [

    { path: '', redirectTo: 'pvp', pathMatch: 'full' },
    { path: 'pvp', component: PvpComponent }

  ]},
  { path: 'lobby', component: LobbyComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
