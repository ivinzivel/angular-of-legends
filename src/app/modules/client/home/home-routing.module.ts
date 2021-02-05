import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';

const routes: Routes = [

  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: '', component: HomeComponent, children: [
  
    { path: 'overview', component: OverviewComponent },
    { path: 'patch-notes', component: PatchNotesComponent },
  
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
