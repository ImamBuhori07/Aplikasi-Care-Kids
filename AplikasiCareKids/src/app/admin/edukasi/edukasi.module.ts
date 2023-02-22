import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EdukasiRoutingModule } from './edukasi-routing.module';

import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';




@NgModule({
  declarations: [
    TambahpostinganComponent
  ],
  imports: [
    CommonModule,
    EdukasiRoutingModule,
    FormsModule
  ]
})
export class EdukasiModule { }
