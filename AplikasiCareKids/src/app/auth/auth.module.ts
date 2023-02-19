import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule , HttpHeaders } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
