import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


//my modules
import { moduleMe } from './user/modules/modules';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './user/services/contact.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
