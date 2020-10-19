import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientMainLayoutComponent } from './client-main-layout/client-main-layout.component';

const routes: Routes = [

    { path: '', component: ClientMainLayoutComponent, children: [

        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }

    ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientRoutingModule { }
