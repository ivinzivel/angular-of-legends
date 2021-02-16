import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { ChampionSelectComponent } from './champion-select/champion-select.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [ChampionSelectComponent, LoadingComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
