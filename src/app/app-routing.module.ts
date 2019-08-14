import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/pages/home/home.component";
import { RevenueComponent } from "./components/pages/revenue/revenue.component";
import { ExpenseComponent } from "./components/pages/expense/expense.component";
import { OverviewComponent } from "./components/pages/overview/overview.component";
import { AccountComponent } from "./components/pages/account/account.component";

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'revenue', component: RevenueComponent },
  { path : 'expense', component: ExpenseComponent },
  { path : 'overview', component: OverviewComponent },
  { path : 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
