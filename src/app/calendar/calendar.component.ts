import { Component, OnInit, EventEmitter } from '@angular/core';
import { CalendarData } from '../utility/CalendarData';

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
