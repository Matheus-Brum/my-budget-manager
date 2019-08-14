import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-add-expense-dialogue',
  templateUrl: './add-expense-dialogue.component.html',
  styleUrls: ['./add-expense-dialogue.component.scss']
})
export class AddExpenseDialogueComponent implements OnInit {

  categories:string[];
  category:string;
  name:string;
  amount:number;

  constructor(public dialogRef: MatDialogRef<AddExpenseDialogueComponent>) { }

  ngOnInit() {
    this.categories = [
      "Food", 
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
