import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonPieChartComponent } from '../common-pie-chart/common-pie-chart.component';
import { RevenueService } from "../../services/revenue.service";
import { RevenueModel } from 'src/app/models/revenueModel';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-revenue-pie-chart',
  templateUrl: './revenue-pie-chart.component.html',
  styleUrls: ['./revenue-pie-chart.component.scss']
})
export class RevenuePieChartComponent implements OnInit, AfterViewInit {

  @ViewChild('commonPieChart', {static: false}) commonPieChart:CommonPieChartComponent;

  userId:string;
  totalJobRevenue:number;
  totalOtherRevenue:number;
  revenues:RevenueModel[];

  constructor(private revenueService:RevenueService, private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.userId = this.authenticationService.decodeAuthenticationToken().id;
  }

  ngAfterViewInit() {
    this.revenueService.getUserRevenues(this.userId).subscribe(
      res => {this.revenues = res; this.setTotalCategoryRevenues();
    });
    this.commonPieChart.view = [600, 600];
    this.commonPieChart.colorScheme = {
      domain: ['#C7B42C', '#AAAAAA']
    };
    this.commonPieChart.showLegend = true;
    this.commonPieChart.gradient = true;
    this.commonPieChart.showLabels = false;
    this.commonPieChart.explodeSlices = false;
    this.commonPieChart.doughnut = true;
    
  }

  private setTotalCategoryRevenues(){
    this.totalJobRevenue = 0;
    this.totalOtherRevenue = 0;
    for(let revenue of this.revenues){
      if(revenue.category == "Job"){
        this.totalJobRevenue += revenue.amount;
      }else if(revenue.category == "Other"){
        this.totalOtherRevenue += revenue.amount;
      }
    }
    this.commonPieChart.single = [
      {
        "name": "Job",
        "value": this.totalJobRevenue
      },
      {
        "name": "Other",
        "value": this.totalOtherRevenue
      }
    ];
  }

}
