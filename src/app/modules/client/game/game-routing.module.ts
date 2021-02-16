import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionSelectComponent } from './champion-select/champion-select.component';
import { LoadingComponent } from './loading/loading.component';

const routes: Routes = [

  { path: 'champion-select', component: ChampionSelectComponent },
  { path: 'loading', component: LoadingComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
