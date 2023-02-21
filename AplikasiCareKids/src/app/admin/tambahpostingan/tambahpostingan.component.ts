import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin,article,Category } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-tambahpostingan',
  templateUrl: './tambahpostingan.component.html',
  styleUrls: ['./tambahpostingan.component.css']
})

   

export class TambahpostinganComponent implements OnInit {
   
    formarticle : FormGroup
    category : Category [] = []
    articleId : number =1

    constructor(
      private _AdminService : AdminService,
      private _FormBuilder : FormBuilder,
      private _router : Router,
      private _Activatedroute : ActivatedRoute,
      ){

        this.formarticle = _FormBuilder.group ({
          'articleId' : new FormControl (null),
          'title' : new FormControl (null),
          'description' : new FormControl (null),
          'content' : new FormControl (null),
          'category_id' : new FormControl (null),
          'status_id' : new FormControl (null),
          'thumbnail' : new FormControl (null),
          'video' : new FormControl (null),
        })


      }

  ngOnInit(): void {
      
  }

  }

  

