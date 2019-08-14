import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { UserModel } from "../models/userModel";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserByUsername(username:string):Observable<UserModel> {
   return this.http.get<UserModel>(`http://127.0.0.1:3000/v1/users?username=${username}`); 
  }

  public addUser(userModel:UserModel):Observable<UserModel> {
    return this.http.post<UserModel>("http://127.0.0.1:3000/v1/users", JSON.stringify(userModel), httpOptions);
  }

}
