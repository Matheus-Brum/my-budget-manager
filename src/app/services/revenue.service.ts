import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { RevenueModel } from "../models/revenueModel";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  constructor(private http: HttpClient) { }

  public getUserRevenues(userId:string):Observable<RevenueModel[]> {
    return this.http.get<RevenueModel[]>(`http://127.0.0.1:5000/v1/revenues?user_id=${userId}`);
  }

  public deleteRevenue(revenueId:string):Observable<RevenueModel> {
    return this.http.delete<RevenueModel>(`http://127.0.0.1:5000/v1/revenues/${revenueId}`);
  }

  public addRevenue(revenueModel:RevenueModel):Observable<RevenueModel> {
    return this.http.post<RevenueModel>("http://127.0.0.1:5000/v1/revenues", JSON.stringify(revenueModel), httpOptions);
  }

}
