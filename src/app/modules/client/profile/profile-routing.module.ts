import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from '../profile/overview/overview.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  { path: '', component: ProfileComponent, children: [

    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: OverviewComponent },
    { path: 'match-history', component: MatchHistoryComponent }

  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
