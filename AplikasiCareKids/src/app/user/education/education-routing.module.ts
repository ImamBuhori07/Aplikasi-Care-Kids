import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailEducationComponent } from './detail-education/detail-education.component';
import { EducationComponent } from './education.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: EducationComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                title: 'Edukasi'
            },
            {
                path: 'detail/:id',
                component: DetailEducationComponent,
                title: 'Detail Edukasi'
            },
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EducationRoutingModule { }