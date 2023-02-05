import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BeritaComponent } from './berita/berita.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { InfoanakhilangComponent } from './infoanakhilang/infoanakhilang.component';
import { PesanComponent } from './pesan/pesan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path:'',
    component: AdminComponent,
    children : [
      {
        path: 'dashboard',
       component: DashboardComponent
      },

      {
        path: 'berita',
        component: BeritaComponent
      },

      {
        path:'infoanakhilang',
        component: InfoanakhilangComponent
      },

      {
        path:'edukasi',
        component: EdukasiComponent
      },

      {
        path:'pesan',
        component: PesanComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
