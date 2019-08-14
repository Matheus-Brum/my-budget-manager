import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MaterialModule } from "./material-module";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/pages/layout/layout.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RevenueComponent } from './components/pages/revenue/revenue.component';
import { AddRevenueDialogComponent } from './components/add-revenue-dialog/add-revenue-dialog.component';
import { ExpenseComponent } from './components/pages/expense/expense.component';
import { AddExpenseDialogueComponent } from './components/add-expense-dialogue/add-expense-dialogue.component';
import { OverviewComponent } from './components/pages/overview/overview.component';
import { GlobalPieChartComponent } from './components/global-pie-chart/global-pie-chart.component';
import { RevenuePieChartComponent } from './components/revenue-pie-chart/revenue-pie-chart.component';
import { ExpensesPieChartComponent } from './components/expenses-pie-chart/expenses-pie-chart.component';
import { CommonPieChartComponent } from './components/common-pie-chart/common-pie-chart.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { AccountComponent } from './components/pages/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainMenuComponent,
    HomeComponent,
    RevenueComponent,
    AddRevenueDialogComponent,
    ExpenseComponent,
    AddExpenseDialogueComponent,
    OverviewComponent,
    GlobalPieChartComponent,
    RevenuePieChartComponent,
    ExpensesPieChartComponent,
    CommonPieChartComponent,
    LoginFormComponent,
    SigninFormComponent,
    AccountComponent
  ],
  entryComponents: [
    AddRevenueDialogComponent,
    AddExpenseDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
