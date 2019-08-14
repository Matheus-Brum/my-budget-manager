import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";
import * as validator from "validator";
import { UserModel } from '../models/userModel';
declare var require:any;
const jwtDecode = require('jwt-decode');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  public async logUser(username:string, password:string):Promise<any> {
    return await this.http.post<any>("http://127.0.0.1:4000/login", JSON.stringify(
      {username : username, password : password}
    ), httpOptions).pipe(shareReplay()).toPromise().then(
      (res) => {
        // validate user JWT model here
        this.setSession(res);
      }
    );
  }

  // public logUser(username:string, password:string) {
  //   this.http.post<any>("http://127.0.0.1:4000/login", JSON.stringify(
  //     {username : username, password : password}
  //   ), httpOptions).subscribe(
  //     res => this.setSession(res)
  //   );
  // }

  public logout() {
    this.cookieService.delete('access_token');
  }

  private setSession(authToken) {
    if (validator.isJWT(authToken.access_token)) {
      this.cookieService.set('access_token', authToken.access_token);
    }
  }

  public hasCookie():boolean {
    return this.cookieService.check('access_token');
  }

  public decodeAuthenticationToken(): UserModel {
    let userModel:UserModel = new UserModel();
    if(this.hasCookie){
      userModel.id = jwtDecode(this.cookieService.get('access_token')).id;
      userModel.username = jwtDecode(this.cookieService.get('access_token')).username;
      userModel.password = jwtDecode(this.cookieService.get('access_token')).password;
    }
    return userModel;
  }

}
