import { Component, OnInit, ViewChild } from '@angular/core';
import { RevenueModel } from "../../../models/revenueModel";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddRevenueDialogComponent } from "../../add-revenue-dialog/add-revenue-dialog.component";
import { RevenueService } from "../../../services/revenue.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { LoginFormComponent } from "../../login-form/login-form.component";

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('revenuePageLoginForm', {static: false}) revenuePageLoginForm:LoginFormComponent;

  userId: string;
  revenueTotal:number;
  displayedColumns:string[];
  revenues: RevenueModel[];

  dataSource: MatTableDataSource<RevenueModel>;

  constructor(private dialog: MatDialog, private revenueService:RevenueService, private authenticationService:AuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.hasCookie()){
      this.userId = this.authenticationService.decodeAuthenticationToken().id;
      this.displayedColumns = ["total", "category", "name", "amount", "delete"]; 
      this.revenueService.getUserRevenues(this.userId).subscribe((res => {
        this.revenues = res;
        this.dataSource = new MatTableDataSource(this.revenues);
        this.dataSource.sort = this.sort;
        this.revenueTotal = this.getTotalRevenue(this.dataSource);
      }));
    }
  }

  async initializeRevenueTable() {
    var x = await this.revenuePageLoginForm.onSubmitLogin()
  }

  getTotalRevenue(dataSource:MatTableDataSource<any>):number {
    let revenueTotal:number = 0;
    for(let revenue of dataSource.data) {
      revenueTotal += parseFloat(revenue.amount + '');
    }
    return revenueTotal;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog():void {
    const dialogRef = this.dialog.open(AddRevenueDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.onAdd(dialogRef);
    });
  }

  onAdd(dialogRef:MatDialogRef<AddRevenueDialogComponent>) {
    let revenueModel = new RevenueModel();
    revenueModel.userId = this.userId;
    revenueModel.category = dialogRef.componentInstance.category;
    revenueModel.name = dialogRef.componentInstance.name;
    revenueModel.amount = parseFloat(dialogRef.componentInstance.amount + '');
    this.revenueService.addRevenue(revenueModel).subscribe(() => {
      this.revenueService.getUserRevenues(this.userId).subscribe((res => {
        this.revenues = res;
        this.dataSource = new MatTableDataSource(this.revenues);
        this.dataSource.sort = this.sort;
        this.revenueTotal = this.getTotalRevenue(this.dataSource);
      }));  
    });
  }

  onDelete(revenue:RevenueModel) {
    this.revenueService.deleteRevenue(revenue.id).subscribe(() => {
      this.revenueService.getUserRevenues(this.userId).subscribe((res => {
        this.revenues = res;
        this.dataSource = new MatTableDataSource(this.revenues);
        this.dataSource.sort = this.sort;
        this.revenueTotal = this.getTotalRevenue(this.dataSource);
      }));
    });
  }

}