import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { BerandaComponent } from './beranda/beranda.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'beranda',
    pathMatch:'full'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'beranda',
        component: BerandaComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
