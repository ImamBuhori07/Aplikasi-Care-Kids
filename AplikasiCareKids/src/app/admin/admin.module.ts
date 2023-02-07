import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeritaComponent } from './berita/berita.component';
import { InfoanakhilangComponent } from './infoanakhilang/infoanakhilang.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { PesanComponent } from './pesan/pesan.component';
import { AdminComponent } from './admin.component';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BeritaComponent,
    InfoanakhilangComponent,
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
