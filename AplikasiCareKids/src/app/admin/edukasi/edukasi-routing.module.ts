import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';
import { EdukasiComponent } from './edukasi.component';

export const routes: Routes = [
  {
    path: '',
    component: EdukasiComponent,
    children: [
      {
        path: 'edukasi',
        component: EdukasiComponent
      },
      {
        path: 'tambahpostingan',
        component: TambahpostinganComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdukasiRoutingModule { }

