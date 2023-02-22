
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PesanComponent } from './pesan/pesan.component';
import { IsAuthGuard } from '../auth/is-auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
        canActivate: [IsAuthGuard]

      },

      // {
      //   path: 'berita',
      //   loadChildren: () => import('./berita/berita.module').then(m => m.BeritaModule),
      //   canActivate: [IsAuthGuard]
      // },

      // {
      //   path: 'edukasi',
      //   loadChildren: () => import('./edukasi/edukasi.module').then(m => m.EdukasiModule),
      //   canActivate: [IsAuthGuard]
      // },

      {
        path: 'postingan',
        loadChildren: () => import('./postingan/postingan.module').then(m => m.PostinganModule),
        canActivate: [IsAuthGuard]
      },

      {
        path: 'pesan',
        component: PesanComponent,
        title: 'Pesan',
        canActivate: [IsAuthGuard]
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

