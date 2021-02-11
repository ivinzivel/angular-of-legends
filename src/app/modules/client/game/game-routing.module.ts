import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionSelectComponent } from './champion-select/champion-select.component';

const routes: Routes = [

  { path: 'champion-select', component: ChampionSelectComponent },
  { path: 'loading' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
