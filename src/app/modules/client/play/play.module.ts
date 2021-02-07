import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayMenuComponent } from './play-menu/play-menu.component';
import { PvpComponent } from './pvp/pvp.component';
import { LobbyComponent } from './lobby/lobby.component';


@NgModule({
  declarations: [PlayMenuComponent, PvpComponent, LobbyComponent],
  imports: [
    CommonModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
