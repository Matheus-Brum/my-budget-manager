import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { UserModel } from "../../models/userModel";
import { UserService } from "../../services/user.service";
import { AppErrorStateMatcher } from "../../appErrorStateMatcher";
import { UserModelValidator } from "../../validators/userModelValidator";
import { MatIcon } from "@angular/material";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

  @ViewChild('hasUsernameIcon', {static: false}) hasUsernameIcon:MatIcon;

  signinUsername:string
  signinPassword:string
  signinConfirmPassword:string;
  signinPasswordVisibility:string;
  signinConfirmPasswordVisibility:string;
  signinPasswordFormControl:FormControl;
  signinUsernameFormControl:FormControl;
  signinConfirmPasswordFormControl:FormControl;
  hasUsernameIconValue:string
  matcher:AppErrorStateMatcher;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.matcher = new AppErrorStateMatcher();
    this.signinUsername = undefined;
    this.signinPassword = undefined;
    this.signinConfirmPassword = undefined;
    this.signinPasswordVisibility = 'visibility';
    this.signinConfirmPasswordVisibility = 'visibility';
    this.signinUsernameFormControl = new FormControl('', [
      Validators.required,
      Validators.nullValidator,
      Validators.minLength(12)
    ]);
    this.signinPasswordFormControl = new FormControl('', [
      Validators.required,
      Validators.nullValidator,
      Validators.minLength(12)
    ]);
    this.hasUsernameIconValue = 'youtube_searched_for';
    // this.signinConfirmPasswordFormControl = new FormControl('', [
    //   Validators.pattern
    // ]);
  }

  onSubmitSignin() {
    let newUser:UserModel = new UserModel();
    newUser.username = this.signinUsernameFormControl.value;
    newUser.password = this.signinPasswordFormControl.value;
    if(UserModelValidator.validateUserModel(newUser)) {
      this.userService.addUser(newUser).subscribe();
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
    if(passwordVisibilityButtonIconId == "signinPasswordVisibilityButton") {
      if(passwordVisibilityButtonIconValue == 'visibility'){
        this.signinPasswordVisibility = 'visibility_off';
      }else{
        this.signinPasswordVisibility = 'visibility';
      }
    }else if(passwordVisibilityButtonIconId == "signinConfirmPasswordVisibilityButton") {
      if(passwordVisibilityButtonIconValue == 'visibility'){
        this.signinConfirmPasswordVisibility = 'visibility_off';
      }else{
        this.signinConfirmPasswordVisibility = 'visibility';
      }
    }
  }

  hasUsername(signinUsernameFormControlValue:string):boolean { 
    return this.userService.getUserByUsername(signinUsernameFormControlValue).subscribe(
      res => {
        console.log("EXISTS");
        this.hasUsernameIconValue = 'error';
        //this.hasUsernameIcon.color = 'warn';
      },
      err => {
        console.log("DOESN'T EXIST");
        this.hasUsernameIconValue = 'verified_user';
        //this.hasUsernameIcon.color = green;
      }
    ) instanceof UserModel;
  }

}
