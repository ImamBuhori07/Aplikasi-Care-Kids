import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pages
import { EducationRoutingModule } from './education-routing.module';  
import { HomeComponent } from './home/home.component'; 
import { DetailEducationComponent } from './detail-education/detail-education.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailEducationComponent,
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
