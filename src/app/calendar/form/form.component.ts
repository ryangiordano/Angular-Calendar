import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {CalendarData} from '../../utility/CalendarData';
import { CalendarDataService } from '../services/calendar-data.service';
import { Subscription } from 'rxjs/Subscription';
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
    numberOfDays:0,
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
  private emitFormSubmit(){
    // this.submitForm.emit(this.formData);
    this.calendarService.updateCalendar(this.formData);
  }
  private dateChanged(e){
    // console.log(this.formData.date)
  }
}
