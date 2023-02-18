import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//services
import { moduleMe } from '../modules/modules';

//pages
import { HomeComponent } from './home/home.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { NewsComponent } from './news.component';
import { CommentsComponent } from './comments/comments.component';
import { ImagesComponent } from './images/images.component';
import { SearchPipe } from './search.pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Berita'
      },
      {
        path: 'detail/:id',
        component: DetailNewsComponent,
        title: 'Detail Berita'
      },
    ]
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    DetailNewsComponent,
    CommentsComponent,
    ImagesComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    moduleMe
  ]
})
export class NewsModule { }
