import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeritaComponent } from './berita.component';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';

const routes: Routes = [

  {
    path:'',
    component:BeritaComponent,
    children: [
    {
      path:'berita',
      component:BeritaComponent,
    },
    {
      path:'tambahpostingan',
      component:TambahpostinganComponent
    }
      
    ]
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeritaRoutingModule { }
