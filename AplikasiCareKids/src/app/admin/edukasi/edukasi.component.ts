import { Component, OnInit } from '@angular/core';
import { article, Category } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edukasi',
  templateUrl: './edukasi.component.html',
  styleUrls: ['./edukasi.component.css']
})
export class EdukasiComponent implements OnInit {


  judul: string = 'POSTINGAN EDUKASI'
  listarticle: any;

  constructor(private _AdminService: AdminService) { }

  ngOnInit(): void {
    this.getListArticle()
  }

  getListArticle() {
    this._AdminService.listArticle().subscribe((response: any) => {
      this.listarticle = response.data
      console.warn(this.listarticle)
    })
  }

  deletearticle(articleId: number) {
    this._AdminService.deletearticle(articleId).subscribe(response => {
      if (response.status == 200) {
        alert("Berhasil Menghapus Data")
      } else {
        alert("Gagal Menghapus Data")
      }
    })
  }

}
