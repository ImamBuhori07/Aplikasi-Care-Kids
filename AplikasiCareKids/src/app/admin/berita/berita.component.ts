import { response } from 'express';
import { Component, OnInit } from '@angular/core';
import { Article } from '../admin.model';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.css']
})


export class BeritaComponent implements OnInit {

        judul : string = 'POSTINGAN'
        data : any ;
        Article!: Article[];

        constructor (private _AdminService : AdminService){}

        
        ngOnInit(): void {}


        // GetArticle(){
        //   this._AdminService.AddArticle().subscribe(response => {
        //     this.Article = response.data
        //   })
        // }



}
