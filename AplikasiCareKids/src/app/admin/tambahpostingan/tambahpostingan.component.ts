  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { response } from 'express';
  import { routes } from '../admin-routing.module';
  import { Admin,article,Category, savearticle } from '../admin.model';
  import { AdminService } from '../admin.service';

  @Component({
    selector: 'app-tambahpostingan',
    templateUrl: './tambahpostingan.component.html',
    styleUrls: ['./tambahpostingan.component.css']
  })

    

  export class TambahpostinganComponent implements OnInit {
    
    
    formArticle: FormGroup
    listcategory: Category[] = [];
    articleId: number = 1;
    ListArticle: any;
  
    constructor(
      private adminService: AdminService,
      private formBuilder: FormBuilder,
      private router: Router,
      private activatedRoute: ActivatedRoute,
    ) {
      this.formArticle = formBuilder.group({
        'title': new FormControl(null),
        'description': new FormControl(null),
        'category': new FormControl(null),
        'content': new FormControl(null),
        'thumbnail': new FormControl(null),
      });
    }
  
    ngOnInit(): void {
      this.ListCategory();
  
      this.activatedRoute.params.subscribe(route => {
        this.articleId = route['id'];
      });
  
      if (this.articleId) {
        this.findArticleById();
      }
    }
  
    findArticleById() {
      this.adminService.FindarticleById(this.articleId).subscribe((response: any) => {
        this.formArticle.patchValue(response);
      });
    }
  
    ListCategory() {
      this.adminService.listcategory().subscribe(response => {
        this.listcategory = response;
      });
    }
  
    save() {
      let article: savearticle = this.formArticle.value;
  
      if (this.articleId) {
        article.articleId = this.articleId;
        this.adminService.Updatearticle(article).subscribe((response: any) => {
          if (response.status == 200) {
            alert("Berhasil Edit Data");
            this.router.navigate(['/','edukasi']);
          } else {
            alert('Gagal Mengupdate Data');
          }
        });
      } else {
        this.adminService.savearticle(article).subscribe((response:any) => {
          if (response.status == 200) {
            alert("Berhasil Menyimpan Data");
          } else {
            alert("Gagal Menyimpan Data");
          }
        });
      }
    }
  
  }

    

