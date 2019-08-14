import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ExpenseModel } from "../../../models/expenseModel";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddExpenseDialogueComponent } from '../../add-expense-dialogue/add-expense-dialogue.component';
import { ExpenseService } from "../../../services/expense.service";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  userId:string;
  expensesTotal:number;
  displayedColumns:string[];
  expenses: ExpenseModel[];

  dataSource: MatTableDataSource<any>;

  constructor(public dialog: MatDialog, private expenseService: ExpenseService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if (this.authenticationService.hasCookie()) {
      this.userId = this.authenticationService.decodeAuthenticationToken().id;
      this.displayedColumns = ["total", "category", "name", "amount", "delete"];
      this.expenseService.getUserExpenses(this.userId).subscribe(res => {
        this.expenses = res;
        this.dataSource = new MatTableDataSource(this.expenses);
        this.dataSource.sort = this.sort;
        this.expensesTotal = this.getTotalExpenses(this.dataSource);
      });
    }
  }

  getTotalExpenses(dataSource:MatTableDataSource<any>):number {
    let expenseTotal:number = 0;
    for(let expense of dataSource.data) {
      expenseTotal += expense.amount;
    }
    return expenseTotal;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddExpenseDialogueComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.onAdd(dialogRef);
    });
  }

  onAdd(dialogRef:MatDialogRef<AddExpenseDialogueComponent>) {
    let expenseModel = new ExpenseModel();
    expenseModel.userId = this.userId;
    expenseModel.category = dialogRef.componentInstance.category;
    expenseModel.name = dialogRef.componentInstance.name;
    expenseModel.amount = parseFloat(dialogRef.componentInstance.amount + '');
    this.expenseService.addExpense(expenseModel).subscribe(() => {
      this.expenseService.getUserExpenses(this.userId).subscribe((res => {
        this.expenses = res;
        this.dataSource = new MatTableDataSource(this.expenses);
        this.dataSource.sort = this.sort;
        this.expensesTotal = this.getTotalExpenses(this.dataSource);
      }));  
    });
  }

  onDelete(expense:ExpenseModel) {
    this.expenseService.deleteExpense(expense.id).subscribe(() => {
      this.expenseService.getUserExpenses(this.userId).subscribe((res => {
        this.expenses = res;
        this.dataSource = new MatTableDataSource(this.expenses);
        this.dataSource.sort = this.sort;
        this.expensesTotal = this.getTotalExpenses(this.dataSource);
      }));
    });
  }

}
