import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../services/authentication.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  a: string[];
  welcomeMessage: string;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.a = [
      "You keep an eye on your money, and we like it"
    ];
    this.welcomeMessage = _.sample(this.a)
  }

}
