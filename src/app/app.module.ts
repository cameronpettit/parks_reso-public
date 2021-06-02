import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ParkComponent } from './park/park.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FacilitiesListComponent } from './facilities/facilities-list/facilities-list.component';
import { ParksListComponent } from './parks-list/parks-list.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    ParkComponent,
    BreadcrumbComponent,
    FacilitiesListComponent,
    ParksListComponent,
    ReserveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    CardComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
