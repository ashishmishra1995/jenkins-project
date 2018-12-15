import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 25f98cd7f833234beb4e730ba6dee9e8156ebe22

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    SignupComponent
>>>>>>> 25f98cd7f833234beb4e730ba6dee9e8156ebe22
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
