import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {CalendarData} from '../../utility/CalendarData';
import { CalendarDataService } from '../services/calendar-data.service';
import { Subscription } from 'rxjs/Subscription';
/** 
 * I decided to use a service to communicate with sibling children of CalendarComponent. It's easier than going back up to the parent and down to the child again.  Plus we can tap into the awesome power of observables.
*/
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output()
  submitForm:EventEmitter<any>;

  private currentDate:Date;
  private subscription:Subscription;
  public formData:CalendarData = {
    date:"11-02-2018",
    numberOfDays:1,
    countryCode:"US"
  };
  constructor(private calendarService:CalendarDataService) { 
    this.currentDate = new Date();
    this.formData.date = this.currentDateToString();
    this.submitForm = new EventEmitter();



  }
  private currentDateToString():string{
    let date = this.currentDate;
    return `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
  }

  ngOnInit() {
  }
  public emitFormSubmit(){
    this.calendarService.updateCalendar(this.formData);
  }
}
