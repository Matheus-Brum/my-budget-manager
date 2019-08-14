import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-revenue-dialog',
  templateUrl: './add-revenue-dialog.component.html',
  styleUrls: ['./add-revenue-dialog.component.scss']
})
export class AddRevenueDialogComponent implements OnInit {

  category:string;
  categories:any[];
  name:string;
  amount:number;

  constructor(public dialogRef: MatDialogRef<AddRevenueDialogComponent>) { }

  ngOnInit() {
    this.categories = [
      "Job",
      "Other"
    ];
    this.category = undefined;
    this.name = undefined;
    this.amount = undefined;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
