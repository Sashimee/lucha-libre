import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageDashboardComponent } from './components/page-dashboard/page-dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
