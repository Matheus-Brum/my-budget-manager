import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginUsername:string;
  loginPassword:string;
  loginPasswordVisibility:string;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.loginUsername = undefined;
    this.loginPassword = undefined;
    this.loginPasswordVisibility = 'visibility';
  }

  async onSubmitLogin() {
    try {
      await this.authenticationService.logUser(this.loginUsername, this.loginPassword);
    } catch (err) {
      console.log(err);
    }
  }

  togglePasswordVisibility(passwordInputId:string)  {
    let passwordField = <HTMLInputElement>document.getElementById(passwordInputId);
    if(passwordField.type == 'password') {
      passwordField.type = 'text';
    }else{
      passwordField.type = 'password';
    }
  }

  togglePasswordVisibilityButton(passwordVisibilityButtonIconId:string, passwordVisibilityButtonIconValue:string) {
    if(passwordVisibilityButtonIconId == "loginPasswordVisibilityButton") {
      if(passwordVisibilityButtonIconValue == 'visibility'){
        this.loginPasswordVisibility = 'visibility_off';
      }else{
        this.loginPasswordVisibility = 'visibility';
      }
    }
  }

}
