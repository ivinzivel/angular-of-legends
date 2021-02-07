import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ChampionSelectComponent } from './champion-select/champion-select.component';


@NgModule({
  declarations: [ChampionSelectComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
