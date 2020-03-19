import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageDashboardComponent } from "./components/page-dashboard/page-dashboard.component";
import { PageWreslersListComponent } from "./components/page-wreslers-list/page-wreslers-list.component";
import { PageMatchCalendarComponent } from "./components/page-match-calendar/page-match-calendar.component";
import { PageMatchDetailsComponent } from "./components/page-match-details/page-match-details.component";
import { PageNewMatchComponent } from "./components/page-new-match/page-new-match.component";
import { PageRentWreslerComponent } from "./components/page-rent-wresler/page-rent-wresler.component";
import { PageWreslerDetailsComponent } from "./components/page-wresler-details/page-wresler-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: PageDashboardComponent
  },
  {
    path: "match-calendar",
    component: PageMatchCalendarComponent
  },
  {
    path: "match-details/:matchId",
    component: PageMatchDetailsComponent
  },
  {
    path: "new-match",
    component: PageNewMatchComponent
  },
  {
    path: "rent-wresler",
    component: PageRentWreslerComponent
  },
  {
    path: "wresler-details/:wreslerId",
    component: PageWreslerDetailsComponent
  },
  {
    path: "wreslers-list",
    component: PageWreslersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
