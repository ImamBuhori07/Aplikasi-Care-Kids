import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BerandaComponent } from './beranda/beranda.component';
import { UserComponent } from './user.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    BerandaComponent,
    UserComponent,
    NewsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
