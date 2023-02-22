import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//service
import { AuthService } from '../services/auth.service';

//class
import { Login } from '../classes/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private loginData: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(loginForm: Login) {
    if (this.loginForm.invalid) {
      return;
    }


    this.loginData.postLogin(loginForm).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['/admin/dashboard']);
    })

  }


}
