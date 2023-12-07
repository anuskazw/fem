import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeThemeModeComponent } from './shared/components/change-theme-mode/change-theme-mode.component';
import {addSharedReducer} from "./reducers/shared.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    ChangeThemeModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({shared: addSharedReducer}),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
