import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { response } from 'express';
import { Router } from '@angular/router';
import { AuthModule } from '../auth.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

    registerform!: FormGroup;


    constructor(private formbuilder: FormBuilder, private authservice: AuthService, private route : Router){}

    ngOnInit(): void {
        this.registerform = this.formbuilder.group({
          email:['', [Validators.required, Validators.email]],
          fullname:['',Validators.required],
          password:['',[Validators.required, Validators.minLength(8)]],
          password_confirmation: ['', Validators.required]
        });
    }

    onSubmit():void{
      if(this.registerform.invalid){
        return;
      }

      const email = this.registerform.get('email')?.value;
      const fullname = this.registerform.get('fullname')?.value;
      const password = this.registerform.get('password')?.value;
      const password_confirmation = this.registerform.get('password_confirmation')?.value;

      this.authservice.register(email,fullname,password,password_confirmation).subscribe(
        response => {
          this.route.navigate(['/login'])
        },

        error => {
          console.log('Gagal Melakukan Register', error);
        }

      )
      
    }

}
