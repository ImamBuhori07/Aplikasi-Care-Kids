import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';
import { EdukasiComponent } from './edukasi.component';

import { IsAuthGuard } from 'src/app/auth/is-auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: EdukasiComponent,
    children: [
      {
        path: 'edukasi',
        component: EdukasiComponent,
        title: 'Edukasi',
        canActivate: [IsAuthGuard]
      },
      {
        path: 'tambahpostingan',
        component: TambahpostinganComponent,
        title: 'Edukasi | Tambah Postingan',
        canActivate: [IsAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdukasiRoutingModule { }

