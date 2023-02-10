import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//services
import { moduleMe } from '../modules/modules';

//pages
import { HomeComponent } from './home/home.component';
import { DetailNewsComponent } from './detail-news/detail-news.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: '',
        component: NewsComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'detail/:id',
                component: DetailNewsComponent
            },
        ]
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    DetailNewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    moduleMe
  ]
})
export class NewsModule { }
