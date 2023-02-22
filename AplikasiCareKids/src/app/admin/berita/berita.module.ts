import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeritaRoutingModule } from './berita-routing.module';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TambahpostinganComponent
  ],
  imports: [
    CommonModule,
    BeritaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BeritaModule { }
