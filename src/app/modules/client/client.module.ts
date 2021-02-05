import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MainClientLayoutComponent } from 'src/app/layout/main-client-layout/main-client-layout.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    MainClientLayoutComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
