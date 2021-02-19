import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OverviewComponent } from './overview/overview.component';
import { MatchHistoryComponent } from './match-history/match-history.component';


@NgModule({
  declarations: [ProfileComponent, OverviewComponent, MatchHistoryComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
