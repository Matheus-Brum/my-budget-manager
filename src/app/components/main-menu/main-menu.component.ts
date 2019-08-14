import {Component, OnInit, DoCheck} from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, DoCheck {

  username: string;
  userIcon: string;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.username = undefined;
    this.userIcon = undefined;
  }

  ngDoCheck() {
    if (this.authenticationService.hasCookie()) {
      this.username = this.authenticationService.decodeAuthenticationToken().username;
      this.userIcon = this.username.charAt(0);
    }
  }

}
