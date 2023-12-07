import {Component, OnInit} from '@angular/core';
import { themeChange } from 'theme-change'
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fem';

  constructor(){
  }

  ngOnInit(){
    themeChange();
  }

  protected readonly RouterOutlet = RouterOutlet;
}
