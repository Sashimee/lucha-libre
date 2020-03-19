import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';
import { PageWreslersListComponent } from './components/page-wreslers-list/page-wreslers-list.component';
import { PageWreslerDetailsComponent } from './components/page-wresler-details/page-wresler-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    PageWreslersListComponent,
    PageWreslerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
