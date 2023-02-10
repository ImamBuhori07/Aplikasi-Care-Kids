import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Admin,Category } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-tambahpostingan',
  templateUrl: './tambahpostingan.component.html',
  styleUrls: ['./tambahpostingan.component.css']
})
export class TambahpostinganComponent implements OnInit{

  constructor (
    private _Adminservice : AdminService
  ){}  
  
  ngOnInit(): void {
      // this.getCategory()
  }

  // getCategory(){
  //   this._Adminservice.category().subscribe(response: => {
  //     this.getCategory = response ["category"]
  //     console.log(this.getCategory)
  //   })
  // }

    // deletecategory(name_category : string){
    //   this._Adminservice.deletecategory(name_category).subscribe(response => {
    //     if(Response.status == 200){
    //       alert("Berhasil Hapus Category")
    //       location.reload()
    //     }else {
    //       alert("Gagal menghapus Category")
    //     }
    //   })
    // }
  }

