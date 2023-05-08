import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsTimeLineComponent } from './components/news-time-line/news-time-line.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { GovernmentPageComponent } from './government-page/government-page.component';
import { TreeComponentComponent } from './components/tree-component/tree-component.component';
import { PoliticiansComponent } from './politicians/politicians.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    NewsTimeLineComponent,
    FlipCardComponent,
    GovernmentPageComponent,
    TreeComponentComponent,
    PoliticiansComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
