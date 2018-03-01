
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HolidaysService } from './utilities/holidays.service';
import { CalendarDataService } from './calendar/services/calendar-data.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormComponent } from './calendar/form/form.component';
import { CanvasComponent } from './calendar/canvas/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    FormComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalendarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
