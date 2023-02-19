import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeritaComponent } from './berita/berita.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { PesanComponent } from './pesan/pesan.component';
import { AdminComponent } from './admin.component';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    BeritaComponent,
    EdukasiComponent,
    PesanComponent,
    AdminComponent,
    TambahpostinganComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
