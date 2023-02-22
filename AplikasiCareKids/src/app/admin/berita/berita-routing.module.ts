import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeritaComponent } from './berita.component';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';

import { IsAuthGuard } from 'src/app/auth/is-auth.guard';

const routes: Routes = [

  {
    path: '',
    component: BeritaComponent,
    children: [
      {
        path: 'berita',
        component: BeritaComponent,
        title: 'Berita',
        canActivate: [IsAuthGuard]
      },
      {
        path: 'tambahpostingan',
        component: TambahpostinganComponent,
        title: 'Berita | Tambah Postingan',
        canActivate: [IsAuthGuard]
      }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeritaRoutingModule { }
