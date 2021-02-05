import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';


@NgModule({
  declarations: [OverviewComponent, HomeComponent, PatchNotesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
