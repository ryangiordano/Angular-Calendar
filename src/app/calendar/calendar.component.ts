import { Component, OnInit, EventEmitter } from '@angular/core';
import { CalendarData } from '../utility/CalendarData';
/** 
 * The Calendar component is the parent component of the form and canvas components.  It is simply a presentation component.
*/
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private inputData:CalendarData;

  constructor() { 

  }

  ngOnInit() {

  }
  private formSubmitted(event:CalendarData){
    this.inputData = event;
  }

}
