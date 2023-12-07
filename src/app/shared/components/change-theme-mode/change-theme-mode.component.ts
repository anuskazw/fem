import {Component} from '@angular/core';

@Component({
  selector: 'azw-change-theme-mode',
  templateUrl: './change-theme-mode.component.html',
  styleUrls: ['./change-theme-mode.component.scss']
})
export class ChangeThemeModeComponent {

  public active: boolean = false;

  change(state: boolean): void {
    this.active = state;
    localStorage.setItem('mode', state ? 'light' : 'dark');
  }

}
