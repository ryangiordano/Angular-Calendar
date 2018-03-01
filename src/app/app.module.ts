
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HolidaysService } from './utilities/holidays.service';
import { CalendarDataService } from './calendar/services/calendar-data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormComponent } from './calendar/form/form.component';
import { CanvasComponent } from './calendar/canvas/canvas.component';
import { AboutComponent } from './about/about.component';
const appRoutes:Routes =[
  {
    path:'calendar',
    component:CalendarComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'',
    component:CalendarComponent,
  },
  {
    path:'**',
    component:CalendarComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    FormComponent,
    CanvasComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [CalendarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
