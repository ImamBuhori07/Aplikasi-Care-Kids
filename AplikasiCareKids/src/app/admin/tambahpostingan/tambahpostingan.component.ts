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

  }

