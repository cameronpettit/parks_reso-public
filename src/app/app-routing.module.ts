import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';

// Components
import { HomeComponent } from './home/home.component';
import { ParkComponent } from './park/park.component';
import { ReserveComponent } from './reserve/reserve.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'parks',
    component: ParkComponent,
    data: {
      breadcrumb: 'Name of the park',
    },
    children: [
      {
        path: ':parkId',
        children: [
          {
            path: '',
            redirectTo: 'passes',
            pathMatch: 'full',
          },
          {
            path: 'passes',
            component: FacilitiesListComponent,
          },
          {
            path: 'reserve',
            component: ReserveComponent,
          }
        ]
      }
    ]
  },
  {
    // wildcard route
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
