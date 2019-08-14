import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { ExpenseModel } from "../models/expenseModel";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  public getUserExpenses(userId:string):Observable<ExpenseModel[]> {
    return this.http.get<ExpenseModel[]>(`http://127.0.0.1:8080/v1/expenses?user_id=${userId}`);
  }

  public deleteExpense(expenseId:string):Observable<ExpenseModel> {
    return this.http.delete<ExpenseModel>(`http://127.0.0.1:8080/v1/expenses/${expenseId}`);
  }

  public addExpense(expenseModel:ExpenseModel):Observable<ExpenseModel> {
    return this.http.post<ExpenseModel>("http://127.0.0.1:8080/v1/expenses", JSON.stringify(expenseModel), httpOptions);
  }

}
