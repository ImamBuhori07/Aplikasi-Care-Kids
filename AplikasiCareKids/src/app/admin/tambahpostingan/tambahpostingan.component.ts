import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Admin,Category } from '../admin.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-tambahpostingan',
  templateUrl: './tambahpostingan.component.html',
  styleUrls: ['./tambahpostingan.component.css']
})

   

export class TambahpostinganComponent {



    judul : string ="Tambah Postingan";

    constructor(private AdminService : AdminService){}

    getcategories(): void {
      this.AdminService.getCategories<any>('categories/3').subscribe(response => {
        console.log(response);
      });
    }

  
    tambahcategories():void {
      const data = {name_categories : 'Education'};
      this.AdminService.buatCategories<any>('categories',data).subscribe(response => {
        console.log(response);
      });
    }

    updatecategories():void {
      const data = {name_categories : 'Articles'};
      this.AdminService.updatecategories<any>('categories/3',data).subscribe(response => {
        console.log(response);
      });
    }

    deletecategories():void {
      this.AdminService.deletecategories<any>('categories/3').subscribe(response => {
        console.log(response);
      });
    }
  }

