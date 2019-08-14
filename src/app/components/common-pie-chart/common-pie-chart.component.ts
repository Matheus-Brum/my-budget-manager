import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-pie-chart',
  templateUrl: './common-pie-chart.component.html',
  styleUrls: ['./common-pie-chart.component.scss']
})
export class CommonPieChartComponent implements OnInit {

  single:any[];
  view:number[];
  colorScheme : {
    domain:string[]
  };
  showLegend:boolean;
  gradient:boolean;
  showLabels:boolean;
  explodeSlices:boolean;
  doughnut:boolean;

  constructor() { 
  }

  ngOnInit() {
    this.single = undefined;
    this.view = undefined;
    this.colorScheme = {
      domain : undefined
    };
    this.showLegend = undefined;
    this.gradient = undefined;
    this.showLabels = undefined;
    this.explodeSlices = undefined;
    this.doughnut = undefined;
  }

}
