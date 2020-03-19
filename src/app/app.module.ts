import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PageWreslersListComponent } from './components/page-wreslers-list/page-wreslers-list.component';
import { PageWreslerDetailsComponent } from './components/page-wresler-details/page-wresler-details.component';
import { PageMatchCalendarComponent } from './components/page-match-calendar/page-match-calendar.component';
import { PageMatchDetailsComponent } from './components/page-match-details/page-match-details.component';
import { PageNewMatchComponent } from './components/page-new-match/page-new-match.component';
import { HeaderComponent } from './components/header/header.component';
import { PageRentWreslerComponent } from './components/page-rent-wresler/page-rent-wresler.component';

@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    PageWreslersListComponent,
    PageWreslerDetailsComponent,
    PageMatchCalendarComponent,
    PageMatchDetailsComponent,
    PageNewMatchComponent,
    HeaderComponent,
    PageRentWreslerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
