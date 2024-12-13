import { Component } from '@angular/core';
import { UserProfileComponent } from "../loginauth/user-profile";
import { LogoutButtonComponent } from "../loginauth/logout-button";

@Component({
  selector: 'app-home',
  imports: [UserProfileComponent, LogoutButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
