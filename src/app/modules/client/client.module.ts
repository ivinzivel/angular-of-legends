import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientMainLayoutComponent } from './client-main-layout/client-main-layout.component';
import { ClientRoutingModule } from './cliente-routing.module';


@NgModule({
  declarations: [
    ClientMainLayoutComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})


export class ClientModule { }
