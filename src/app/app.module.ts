import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule, LoginRoutingModule, LoginService } from './autenticacao';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DrawerModule, DrawerRoutingModule } from './drawer';
import { SharedModule } from './shared';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DrawerModule,
    DrawerRoutingModule,
    SharedModule,

    AppRoutingModule // deve ser o último
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
