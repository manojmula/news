import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsTimeLineComponent } from './components/news-time-line/news-time-line.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { GovernmentPageComponent } from './government-page/government-page.component';
import { PoliticiansComponent } from './politicians/politicians.component';

const routes: Routes = [
  { path : '', component : NewsListComponent },
  { path : 'news-timeline', component : NewsTimeLineComponent },
  { path : 'government', component : GovernmentPageComponent },
  { path : 'politicians', component : PoliticiansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
