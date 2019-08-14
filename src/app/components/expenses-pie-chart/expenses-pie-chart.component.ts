import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonPieChartComponent } from '../common-pie-chart/common-pie-chart.component';
import { ExpenseService } from "../../services/expense.service";
import { ExpenseModel } from "../../models/expenseModel";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-expenses-pie-chart',
  templateUrl: './expenses-pie-chart.component.html',
  styleUrls: ['./expenses-pie-chart.component.scss']
})
export class ExpensesPieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('commonPieChart', {static: false}) commonPieChart:CommonPieChartComponent;

  userId:string;
  totalFoodExpense:number;
  totalOtherExpense:number;
  expenses:ExpenseModel[];

  constructor(private expenseService:ExpenseService, private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.userId = this.authenticationService.decodeAuthenticationToken().id;
  }

  ngAfterViewInit() {
    this.expenseService.getUserExpenses(this.userId).subscribe(
      res => {this.expenses = res; this.setTotalCategoryExpenses();
    });
    this.commonPieChart.view = [600, 600];
    this.commonPieChart.colorScheme = {
      domain: ['#A26151', '#A6CD87']
    };
    this.commonPieChart.showLegend = true;
    this.commonPieChart.gradient = true;
    this.commonPieChart.showLabels = false;
    this.commonPieChart.explodeSlices = false;
    this.commonPieChart.doughnut = true;
  }

  private setTotalCategoryExpenses(){
    this.totalFoodExpense = 0;
    this.totalOtherExpense = 0;
    for(let expense of this.expenses){
      if(expense.category == "Food"){
        this.totalFoodExpense += expense.amount;
      }else if(expense.category == "Other"){
        this.totalOtherExpense += expense.amount;
      }
    }
    this.commonPieChart.single = [
      {
        "name": "Food",
        "value": this.totalFoodExpense
      },
      {
        "name": "Other",
        "value": this.totalOtherExpense
      }
    ];
  }

}
