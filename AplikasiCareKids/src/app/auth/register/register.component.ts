import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { response } from 'express';
import { Router } from '@angular/router';
import { AuthModule } from '../auth.module';
import { register } from '../auth.model';


interface Register {
      email : string ;
      full_name : string;
      password : string;
      password_confirmation : string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

      registerform!:FormGroup;
  

    constructor(private formbuilder: FormBuilder, private authservice: AuthService, private router : Router){}

    ngOnInit(): void {
        this.registerform = this.formbuilder.group({
          email:['', [Validators.required, Validators.email]],
          full_name:['',Validators.required],
          password:['',[Validators.required, Validators.minLength(8)]],
          password_confirmation: ['', Validators.required]
        });

      }

    onsubmit(formValue: {email:string,full_name:string,password:string,password_confirmation:string}){
      if (!formValue.email || !formValue.full_name || !formValue.password || !formValue.password_confirmation) {
        alert('Silahkan lengkapi semua kolom untuk melakukan registrasi');
        return;
      }
      
      this.authservice.register(formValue.email,formValue.full_name,formValue.password,formValue.password_confirmation).subscribe(() => {
        this.router.navigate(['/auth/login']);
        this.registerform.reset();
      });

    }
      
    }

  
