import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxPaginationModule } from "ngx-pagination";

//routing
import { PostinganRoutingModule } from "./postingan-routing.module";

//import
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularEditorModule } from "@kolkov/angular-editor";

//pages
import { PostinganComponent } from "./postingan.component";
import { PublicComponent } from "./public/public.component";
import { DraftComponent } from "./draft/draft.component";
import { TrashComponent } from "./trash/trash.component";
import { AddComponent } from './add/add.component';
// import { EditComponent } from './edit/edit.component';

//pipes
import { SearchPipe } from "./search.pipe";

@NgModule({
  declarations: [

    SearchPipe
  ],

  imports: [
    CommonModule,
    PostinganRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    NgxPaginationModule
  ]
})
export class PostinganModule { }
