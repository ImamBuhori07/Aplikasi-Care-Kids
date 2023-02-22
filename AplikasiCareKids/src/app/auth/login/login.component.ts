import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { first } from 'rxjs';
import { Auth,login } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authservice:AuthService, private cookieservice :CookieService , private route : Router){}

    ngOnInit(): void {}

    onSubmit(formValue: { email: string; password: string; }){
      this.authservice.login(formValue.email,formValue.password).pipe(first()).subscribe(
        (result) => {
        alert('Login Berhasil')
        this.route.navigate(['/admin/dashboard'])
        },
        (error) => {
        alert('Email dan Password Tidak Terdaftar.');
      }
    )
  }


}



