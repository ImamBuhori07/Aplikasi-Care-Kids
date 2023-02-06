import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pages
import { UserRoutingModule } from './user-routing.module';
import { BerandaComponent } from './beranda/beranda.component';
import { UserComponent } from './user.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    BerandaComponent,
    UserComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
