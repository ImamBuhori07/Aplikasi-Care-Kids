import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TambahpostinganComponent } from './tambahpostingan/tambahpostingan.component';

//my modules
import { moduleMe } from './user/modules/modules';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './user/services/contact.service';
@NgModule({
  declarations: [
    AppComponent,
    TambahpostinganComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    moduleMe
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
