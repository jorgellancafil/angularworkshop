import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { HistoryComponent } from './history/history.component';
import { GetinfoComponent } from './getinfo/getinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    HistoryComponent,
    GetinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
