import { Component, OnInit } from '@angular/core';
import { article, Category } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edukasi',
  templateUrl: './edukasi.component.html',
  styleUrls: ['./edukasi.component.css']
})
export class EdukasiComponent  implements OnInit{

  judul : string = 'POSTINGAN EDUKASI'
  listarticle : article[] = [];

  constructor( private _AdminService : AdminService){}

  ngOnInit(): void {
    this.getlistarticle()
  }

  getlistarticle(){
    this._AdminService.listarticle().subscribe(response => {
      this.listarticle = response ["article"]
      console.log(this.listarticle)
    })
  }

  deletearticle(articleId : number){
    this._AdminService.deletearticle(articleId).subscribe(response => {
      if(response.status == 200){
        alert ("Berhasil Menghapus Data")
      } else {
        alert ("Gagal Menghapus Data")
      }
    })
  }

}
