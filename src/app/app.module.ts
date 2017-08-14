import { AuthGuard } from './auth-guard.service';
import { HomeService } from './home/home.service';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';

import {
  NavbarComponent,
  FooterComponent,
} from './layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [HomeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
