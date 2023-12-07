import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeThemeModeComponent } from './shared/components/change-theme-mode/change-theme-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeThemeModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
