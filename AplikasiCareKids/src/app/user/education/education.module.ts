import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//my modules
import { moduleMe } from '../modules/modules';

//pages
import { EducationRoutingModule } from './education-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailEducationComponent } from './detail-education/detail-education.component';
import { CommentsComponent } from './comments/comments.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    DetailEducationComponent,
    CommentsComponent,
    ImagesListComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    moduleMe
  ]
})
export class EducationModule { }
