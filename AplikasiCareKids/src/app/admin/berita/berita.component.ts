import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { article } from '../admin.model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.css']
})
export class BeritaComponent implements OnInit{


  searchTitle: string = '';
  article: article[] = [];
  searchterm: any;

  constructor (private adminservice : AdminService){}

  ngOnInit(): void {
      
  }



 

}
