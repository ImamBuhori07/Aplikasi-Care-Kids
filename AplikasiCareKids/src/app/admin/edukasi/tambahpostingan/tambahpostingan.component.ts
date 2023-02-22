import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { savearticle } from '../../admin.model';

@Component({
  selector: 'app-tambahpostingan',
  templateUrl: './tambahpostingan.component.html',
  styleUrls: ['./tambahpostingan.component.css']
})



export class TambahpostinganComponent implements OnInit {

  formarticle: FormGroup
  category: [] = []
  articleId: number = 1
  // listcategory: import("d:/Bootcamp/Angular/Aplikasi-Care-Kids/AplikasiCareKids/src/app/admin/admin.model").Category[] | undefined;

  constructor(
    private _AdminService: AdminService,
    private _FormBuilder: FormBuilder,
    private _router: Router,
    private _Activatedroute: ActivatedRoute,
  ) {

    this.formarticle = _FormBuilder.group({
      'articleId': new FormControl(null),
      'title': new FormControl(null),
      'description': new FormControl(null),
      'content': new FormControl(null),
      'category_id': new FormControl(null),
      'status_id': new FormControl(null),
      'thumbnail': new FormControl(null),
      'video': new FormControl(null),
    })


  }

  ngOnInit(): void {
    // this.ListCategory();

    this._Activatedroute.params.subscribe(route => {
      this.articleId = route['id'];
    });

    if (this.articleId) {
      this.findArticleById();
    }
  }

  findArticleById() {
    this._AdminService.FindarticleById(this.articleId).subscribe((response: any) => {
      this.formarticle.patchValue(response);
    });
  }

  // ListCategory() {
  //   this._AdminService.listcategory().subscribe(response => {
  //     this.listcategory = response;
  //   });
  // }

  save() {
    let article: savearticle = this.formarticle.value;

    if (this.articleId) {
      article.articleId = this.articleId;
      this._AdminService.Updatearticle(article).subscribe((response: any) => {
        if (response.status == 200) {
          alert("Berhasil Edit Data");
          this._router.navigate(['/', 'edukasi']);
        } else {
          alert('Gagal Mengupdate Data');
        }
      });
    } else {
      this._AdminService.savearticle(article).subscribe((response: any) => {
        if (response.status == 200) {
          alert("Berhasil Menyimpan Data");
        } else {
          alert("Gagal Menyimpan Data");
        }
      });
    }
  }


}



