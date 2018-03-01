import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CalendarData } from '../../utility/CalendarData';
import { CalendarBuilder } from '../../utility/calendar-builder';
import { CalendarDataService } from '../services/calendar-data.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input() 
  private data:CalendarData;
  public countStarted:boolean=false;
  private subscription:Subscription;
  public month: any[];
  public calendar: any[];
  constructor(private calendarService:CalendarDataService) {
    this.subscription = this.calendarService.calendarUpdated$.subscribe(c=>{
      console.log(c)
      this.data = c;
      this.createCalendars();
    })
    this.calendar = [];
 

  }
  ngOnChanges(change:SimpleChanges){
    if(this.data!=undefined){
      this.createCalendars();
    }
  }
  createCalendars(){
      console.log("From component:",this.data.date)
      let cb = new CalendarBuilder(this.data);
      cb.createCalendars();
      this.calendar = cb.calendar.months;


  }
  ngOnInit() {

  }

}
