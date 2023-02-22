import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { PostinganComponent } from './postingan.component';
import { PublicComponent } from './public/public.component';
import { DraftComponent } from './draft/draft.component';
import { TrashComponent } from './trash/trash.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PostinganComponent,
    children: [
      {
        path: 'public',
        component: PublicComponent,
        title: 'Postingan Publik'
      },
      {
        path: 'draft',
        component: DraftComponent,
        title: 'Postingan Draft'
      },
      {
        path: 'trash',
        component: TrashComponent,
        title: 'Postingan Sampah'
      },
    ]
  },
  {
    path: 'public/add',
    component: AddComponent,
    title: 'Tambah Postingan'
  },
  {
    path: 'public/edit/:id',
    component: EditComponent,
    title: 'Edit Postingan'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PostinganRoutingModule { }
