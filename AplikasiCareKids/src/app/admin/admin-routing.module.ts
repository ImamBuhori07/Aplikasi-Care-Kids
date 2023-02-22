import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PesanComponent } from './pesan/pesan.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
    
      },

      {
        path: 'berita',
        loadChildren: () => import ('./berita/berita.module'). then(m =>m.BeritaModule)
      },

      {
        path: 'edukasi',
        loadChildren: () => import('./edukasi/edukasi.module').then(m => m.EdukasiModule)
      },

      {
        path: 'pesan',
        component: PesanComponent
      },

  
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

