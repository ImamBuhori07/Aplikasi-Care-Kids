import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Pages
import { UserComponent } from './user.component';
import { BerandaComponent } from './beranda/beranda.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'beranda',
    pathMatch: 'full',
    title: 'Beranda'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'beranda',
        component: BerandaComponent,
        title: 'Beranda'
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
        component: AboutComponent,
        title: 'Tentang Kami'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Kontak Kami'
      },
      // {
      //   path: '**',
      //   component: NotFoundComponent
      // }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
