import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MeterialModule } from '../../Meterial.Module';
import { GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  imports: [MeterialModule, GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  SocialAuthService=inject(SocialAuthService)

  OnInit(): void {
   this.SocialAuthService.authState.subscribe({
    next:(result) => {
      console.log(result);
    },
    error: (err) => {
      console.error(err);
    }
   })
  }
}
