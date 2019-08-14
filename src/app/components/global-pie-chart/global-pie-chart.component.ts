import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonPieChartComponent } from "../common-pie-chart/common-pie-chart.component";
import { RevenueModel } from '../../models/revenueModel';
import { ExpenseModel } from '../../models/expenseModel';
import { ExpenseService } from "../../services/expense.service";
import { RevenueService } from "../../services/revenue.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-global-pie-chart',
  templateUrl: './global-pie-chart.component.html',
  styleUrls: ['./global-pie-chart.component.scss']
})
export class GlobalPieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('commonPieChart', {static: false}) commonPieChart:CommonPieChartComponent;

  userId:string;
  totalExpense:number;
  totatRevenue:number;
  expenses:ExpenseModel[];
  revenues:RevenueModel[];

  constructor(private revenueService:RevenueService, private expenseService:ExpenseService, private authenticationService: AuthenticationService) {  
  }

  ngOnInit() {
    if (this.authenticationService.hasCookie()) {
      this.userId = this.authenticationService.decodeAuthenticationToken().id;
    }
  }

  ngAfterViewInit() {
    this.expenseService.getUserExpenses(this.userId).subscribe(
      res => {this.expenses = res; this.setTotalExpense();
    });
    this.revenueService.getUserRevenues(this.userId).subscribe(
      res => {this.revenues = res; this.setTotalRevenue();
    });
    this.commonPieChart.view = [600, 600];
    this.commonPieChart.colorScheme = {
      domain: ['#A10A28', '#5AA454']
    };
    this.commonPieChart.showLegend = true;
    this.commonPieChart.gradient = true;
    this.commonPieChart.showLabels = false;
    this.commonPieChart.explodeSlices = false;
    this.commonPieChart.doughnut = true;
  }

  private setTotalExpense() {
    this.totalExpense = 0;
    for(let expense of this.expenses) {
      this.totalExpense += expense.amount;
    }
    this.commonPieChart.single = [
      {
        "name": "Expense",
        "value": this.totalExpense
      },
      {
        "name": "Revenue",
        "value": this.totatRevenue
      }
    ];
  }

  private setTotalRevenue() {
    this.totatRevenue = 0;
    for(let revenue of this.revenues) {
      this.totatRevenue += revenue.amount;
    }
    this.commonPieChart.single = [
      {
        "name": "Expense",
        "value": this.totalExpense
      },
      {
        "name": "Revenue",
        "value": this.totatRevenue
      }
    ];
  }

}
