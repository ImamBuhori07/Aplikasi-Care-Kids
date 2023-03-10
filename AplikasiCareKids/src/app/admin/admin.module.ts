import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeritaComponent } from './berita/berita.component';
import { EdukasiComponent } from './edukasi/edukasi.component';
import { PesanComponent } from './pesan/pesan.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProviders } from './auth.interceptor';


@NgModule({
  declarations: [
    DashboardComponent,
    BeritaComponent,
    EdukasiComponent,
    PesanComponent,
    AdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthInterceptorProviders]
})
export class AdminModule { }
