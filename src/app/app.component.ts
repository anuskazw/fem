import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {themeChange} from 'theme-change'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('myDrawer') myDrawer!: ElementRef;

  constructor() {
    
  }

  ngOnInit() {
    themeChange();
  }

  onActivate() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
  close() {
    this.myDrawer.nativeElement.click();
  }

}
