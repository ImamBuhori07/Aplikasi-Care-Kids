import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

//Pages
import { BerandaComponent } from './beranda/beranda.component';
import { NewsComponent } from './news/news.component';

import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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

      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
