import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pages
import { UserComponent } from './user.component';
import { BerandaComponent } from './beranda/beranda.component';
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
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },

      {
        path: 'education',
        loadChildren: () => import('./education/education.module').then(m => m.EducationModule)
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
