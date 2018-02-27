import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private inputData:any;
  
  constructor() { 

  }

  ngOnInit() {

  }
  private formSubmitted(event:any){
    this.inputData = event;
  }

}
